const PROTOCOL_DEFINITION = "./proto/assessment.proto";

import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';
import dotenv from 'dotenv';
import initializeDatabase from './config/databaseConfig.js';
import Assessment from './models/assessments.js';

dotenv.config();
initializeDatabase();

async function initializeService() {
    const serviceConfig = protoLoader.loadSync(PROTOCOL_DEFINITION, {
        keepCase: true,
        longs: String,
        enums: String,
        arrays: true,
        defaults: true,
        oneofs: true,
    });

    const assessmentProto = grpc.loadPackageDefinition(serviceConfig);
    const serviceInstance = new grpc.Server({
        'grpc.max_receive_message_length': 20000000,
        'grpc.max_send_message_length': 20000000
    });

    serviceInstance.addService(assessmentProto.AssessmentService.service, {
        fetchAssessments: async (request, response) => {
            console.log("Assessment retrieval initiated");
            try {
                const { pageNumber = 1, itemsPerPage = 5, searchTerm = "" } = request.request;
                const offset = (pageNumber - 1) * itemsPerPage;
                const searchPattern = new RegExp(searchTerm, 'i');
                
                const assessments = await Assessment.find(
                    { title: searchPattern }
                ).skip(offset)
                    .limit(itemsPerPage);
                
                const totalCount = await Assessment.countDocuments({
                    title: searchPattern
                });

                response(null, {
                    assessments,
                    totalCount,
                    currentPage: pageNumber,
                    pageSize: itemsPerPage
                });
            } catch (error) {
                console.error("Assessment retrieval error:", error);
                response(error, null);
            }
        },
    });

    serviceInstance.bindAsync(`127.0.0.1:${process.env.SERVICE_PORT}`, 
        grpc.ServerCredentials.createInsecure(), 
        (error, port) => {
            if (error) {
                console.error(`Service binding failed: ${error.message}`);
                return;
            }
            console.log(`Service operational on port ${port}`);
    });
}

initializeService()
