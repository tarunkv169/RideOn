# RideOn Backend API Documentation

## Endpoints

### POST /users/register

#### Description
This endpoint is used to register a new user.

#### HTTP Method
POST

#### Request Body
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname`: A string representing the user's first name (minimum 3 characters).
  - `lastname`: A string representing the user's last name (minimum 3 characters).
- `email`: A string representing the user's email address.
- `password`: A string representing the user's password (minimum 6 characters).

#### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses

- **201 Created**
  - **Description**: User successfully registered.
  - **Body**: A JSON object containing the authentication token and user details.
  - **Example**:
    ```json
    {
      "token": "your_jwt_token",
      "user": {
        "_id": "user_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```

- **401 Unauthorized**
  - **Description**: Validation errors or missing required fields.
  - **Body**: A JSON object containing the validation errors.
  - **Example**:
    ```json
    {
      "error": [
        {
          "msg": "First name must be at least 3 character long",
          "param": "fullname.firstname",
          "location": "body"
        },
        {
          "msg": "Enter a valid email address",
          "param": "email",
          "location": "body"
        }
      ]
    }
    ```

- **500 Internal Server Error**
  - **Description**: An error occurred on the server.
  - **Body**: A JSON object containing the error message.
  - **Example**:
    ```json
    {
      "error": "Internal Server Error"
    }
    ```

### POST /users/login

#### Description
This endpoint is used to log in an existing user.

#### HTTP Method
POST

#### Request Body
The request body should be a JSON object containing the following fields:
- `email`: A string representing the user's email address.
- `password`: A string representing the user's password.

#### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses

- **200 OK**
  - **Description**: User successfully logged in.
  - **Body**: A JSON object containing the authentication token and user details.
  - **Example**:
    ```json
    {
      "token": "your_jwt_token",
      "user": {
        "_id": "user_id",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```

- **401 Unauthorized**
  - **Description**: Invalid email or password.
  - **Body**: A JSON object containing the error message.
  - **Example**:
    ```json
    {
      "error": "Invalid email and password"
    }
    ```

- **500 Internal Server Error**
  - **Description**: An error occurred on the server.
  - **Body**: A JSON object containing the error message.
  - **Example**:
    ```json
    {
      "error": "Internal Server Error"
    }
    ```
