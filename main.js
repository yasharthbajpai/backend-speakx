import express from 'express';
import dotenv from 'dotenv';
import assessmentRoutes from './routes/assessmentRoutes.js';
import cors from 'cors';

dotenv.config();

const application = express();

application.use(express.json());
application.use(express.urlencoded({ extended: true }));
application.use(cors())

application.use("/api", assessmentRoutes);

const APP_PORT = process.env.PORT || 5000

application.listen(APP_PORT, () => {
    console.log(`Application server running on port ${APP_PORT}`);
});
