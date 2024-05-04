# Nodetest

1. Install Dependencies:
- Run npm install express sequelize jsonwebtoken bcryptjs dotenv.

2. Environment Variables:
- Create a .env file in the root directory and define:
  
     DB_NAME=your_db_name
     DB_USER=your_db_user
     DB_PASSWORD=your_db_password
     DB_HOST=your_db_host
     JWT_SECRET=your_jwt_secret
     PORT=3000

3. Database Setup:
- Ensure your database is accessible with the credentials provided in .env.
- Use Sequelize migrations to set up your database tables.

4. Running the Application:
- Start the server with node app.js or use a process manager like pm2 for production environments.
