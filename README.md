# Node Express API for Product Management

This project is a backend API for managing product information, including user authentication and product listings. It uses Node.js with Express for the server and Sequelize as the ORM to interact with a MySQL database.

## Features

- User authentication (login functionality)
- Role-based access control (admin and user roles)
- CRUD operations for products
- Pagination for product listings
- Secure handling of passwords and authentication tokens

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed on your machine
- MySQL server running locally or remotely

## Installation

Clone the repository to your local machine

git clone https://github.com/kruti2511/Nodetest.git
cd your-repository

Install the necessary dependencies:

npm install


## Configuration

Create a `.env` file in the root directory of the project and add the following environment variables:

DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=your_db_host
JWT_SECRET=your_jwt_secret
PORT=3000


## Running the Application

To start the server, run:

npm start


For development, you can use:

npm run dev


This will start the server with `nodemon`, which will watch for any file changes and automatically restart the server.

## API Endpoints

- `POST /api/login`: Authenticate users and return a JWT.
- `GET /api/products`: Retrieve a paginated list of products. Requires authentication.

## Contributing

Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE) file for details.
