const PROTOCOL_DEFINITION = "./proto/assessment.proto";

import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';
import dotenv from 'dotenv'

dotenv.config()

const serviceConfig = protoLoader.loadSync(PROTOCOL_DEFINITION, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true,
    defaults: true,
    oneofs: true,
});

const { AssessmentService } = grpc.loadPackageDefinition(serviceConfig);
const assessmentClient = new AssessmentService(
    `localhost:${process.env.SERVICE_PORT}`, 
    grpc.credentials.createInsecure(), 
    {
        'grpc.max_receive_message_length': 20000000,
        'grpc.max_send_message_length': 20000000
    }
);

export default assessmentClient;
