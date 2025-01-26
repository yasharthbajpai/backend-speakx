
# Question Search API Documentation

*Developed by Yasharth Bajpai*

## Project Overview
This project implements a gRPC server and client alongside an Express.js REST API to handle questions data stored in MongoDB.

## Architecture
- **gRPC Server**: Handles requests to fetch paginated and searchable question data
- **gRPC Client**: Communicates with the gRPC server to retrieve data
- **Express API**: Provides RESTful endpoints to interact with the question data

## Setup Instructions

### Installation
```bash
# Clone the repository
git clone https://github.com/s4kenn/speakx-backend.git

# Install dependencies
npm i
```

### Configuration
Create a `.env` file in the root directory:
```env
MONGO_URI=<your-mongodb-uri>
GRPC_PORT=50051
PORT=5000
```

### Running the Application
```bash
npm start
```

## Technical Implementation

### gRPC Server
- Proto file location: `./proto/question.proto`
- Service: QuestionService
- Features:
  - Pagination support
  - Regex-based search
  - MongoDB integration with Mongoose

### Express API
- **Endpoints**
  - `GET /api/questions`: Fetch questions with optional query parameters
- **Features**
  - CORS enabled
  - JSON parsing
  - URL-encoded data handling

## Tech Stack
| Technology | Purpose |
|------------|---------|
| Node.js | Runtime environment |
| Express.js | REST API framework |
| gRPC | Service communication |
| MongoDB | Database |
| Mongoose | ODM |
| dotenv | Environment management |

# Contributors
[Yasharth Bajpai](https://github.com/yasharthbajpai) - Lead Developer  
[Aditya Singh](https://github.com/s4kenn) - Contributor

---
*© 2024 Yasharth Bajpai. All rights reserved.*
