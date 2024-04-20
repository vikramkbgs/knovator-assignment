# knovator-assignment

This is a simple Express application that provides user authentication functionality using JSON Web Tokens (JWT). Users can register, login, and access protected routes.

## Features

- User registration
- User login
- Authentication using JWT
- Protected routes
- CRUD operations for posts
- Retrieving posts by location
- Counting active and inactive posts

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- MongoDB (or an accessible MongoDB instance)

## Getting Started

1. Clone the repository:
```
git clone https://github.com/your-username/express-authentication-app.git

2. Install dependencies:
```
npm install

3. Set up environment variables:

Create a `.env` file in the root directory and add the following variables:
```
SECRET_KEY=your_secret_key
DATABASE_URL=mongodb://localhost:27017/your_database_name
PORT=3000
```
Replace `your_secret_key` with a secret key for JWT encryption, and `your_database_name` with the name of your MongoDB database.

4. Start the server:


5. Access the application:

Open your web browser and go to `http://localhost:3000` to access the application.

## Usage

- Register a new user by providing a username, email, and password.
- Login with your registered credentials to obtain a JWT token.
- Use the token to access protected routes, such as creating, updating, or deleting posts.

## Directory Structure

- `config`: Contains configuration files (e.g., database connection).
- `controllers`: Contains route handlers for different endpoints.
- `middleware`: Contains middleware functions (e.g., authentication).
- `models`: Contains Mongoose models for MongoDB documents.
- `routes`: Contains route definitions.
- `views`: Contains EJS templates for rendering views (if applicable).
- `public`: Contains static assets (e.g., CSS files).

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



