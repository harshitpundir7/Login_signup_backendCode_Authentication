
**Login and Signup Backend with MongoDB, Node.js, and Express**

**Description:**

This repository contains the backend implementation for a simple login and signup system using MongoDB as the database and Node.js with Express for the server-side logic.

**Features:**
- User signup with username and password.
- User login with username and password.
- Retrieving profile information of authenticated users.

**Setup:**

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/login-signup-backend.git
   cd login-signup-backend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   - Create a `.env` file in the root directory.
   - Define the following environment variables:
     ```
     PORT=3000
     MONGODB_URI=mongodb://localhost:27017/your-database-name
     SECRET_KEY=your-secret-key-for-jwt
     ```

4. **Database Setup:**
   - Ensure MongoDB is installed and running.
   - Replace `your-database-name` in the `MONGODB_URI` variable with your MongoDB database name.

5. **Run the Application:**
   ```bash
   npm start
   ```

**Endpoints:**

- **POST /signup**
  - Create a new user account.
  - Request Body:
    ```json
    {
      "name": "example",
      "email": "example",
      "password": "password",
      "password_confirmation": "password"
    }
    ```
- **POST /login**
  - Authenticate and login a user.
  - Request Body:
    ```json
    {
      "email": "example",
      "password": "password"
    }
    ```
- **GET /profile**
  - Retrieve the profile information of the authenticated user.

**Folder Structure:**
```
.
├── controllers        # Handlers for HTTP requests
├── models             # Mongoose models for MongoDB
├── routes             # Express routes
├── .env               # Environment variables configuration
├── app.js             # Entry point of the application
└── README.md          # Project documentation
```

**Contributing:**
Contributions are welcome. If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.

**Developer:**
Harshit - neerajpundir2005@gmail.com - harshitpundir7

Feel free to update this README with additional information specific to your project or any additional features you implement. Happy coding!