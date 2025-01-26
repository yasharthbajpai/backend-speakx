import assessmentClient from '../client.js'
import express from 'express'

const router = express.Router()

router.get('/assessments', async (req, res) => {
    const pageNumber = parseInt(req.query.pageNumber) || 1;
    const itemsPerPage = parseInt(req.query.itemsPerPage) || 5;
    const searchTerm = req.query.searchTerm || "";

    assessmentClient.fetchAssessments({ 
        pageNumber, 
        itemsPerPage, 
        searchTerm 
    }, (error, response) => {
        if (error) {
            console.error(error);
            return res.status(500).send({
                message: "Service communication error",
                details: error.message,
            });
        } else {
            res.status(200).json({
                success: true,
                totalCount: response.totalCount,
                currentPage: response.currentPage,
                pageSize: response.pageSize,
                assessments: response.assessments,
            });
        }
    });
});


export default router;
