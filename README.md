This project consists of a gRPC server and client alongside an Express.js REST API to handle questions data stored in MongoDB.

"Project Structure" :
  gRPC Server: Handles requests to fetch paginated and searchable question data.

  gRPC Client: Communicates with the gRPC server to retrieve data.

  Express API: Provides RESTful endpoints to interact with the question data.


"Installation" :

  Clone the repository:

    git clone https://github.com/s4kenn/speakx-backend.git

  Install dependencies:

    npm i

  Create a .env file in the root directory and configure the following:

    MONGO_URI=<your-mongodb-uri>
    GRPC_PORT=50051
    PORT=5000

  Start MongoDB (if not already running).

"Running the Application" :

  Start gRPC Server & Express Server

    npm start

"gRPC Server" :

  The gRPC server loads the question.proto file and exposes the following service:

  getQuestions: Retrieves paginated and searchable questions from the MongoDB database.

"Features" :

  Pagination support

  Search functionality using regex

  MongoDB connection using Mongoose

  Environment variable support with dotenv

"gRPC Server Code Highlights" :

  Proto File Path: ./proto/question.proto

  Service Name: QuestionService

  Functionality:

    Accepts page, limit, and search query parameters

    Responds with questions and total number of documents

"gRPC Client" :

  The gRPC client connects to the server and provides a way to fetch questions using the defined service.

  Client Setup

    Loads the same proto definition.

    Connects to localhost:<GRPC_PORT>.

    Handles data retrieval with specified request limits.

"Express API" :

  The Express.js server acts as a REST API to handle HTTP requests.

  Routes

    GET /api/questions - Fetch questions with optional query parameters (page, limit, search).

  Features

    CORS enabled

    JSON request body parsing

    URL-encoded data handling

"Technologies Used" :

  Node.js

  Express.js

  gRPC

  MongoDB with Mongoose

  dotenv

  cors



Contributors
  Aditya Singh

