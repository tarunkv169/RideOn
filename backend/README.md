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

### GET /users/userProfile

#### Description
This endpoint is used to get the profile of the logged-in user.

#### HTTP Method
GET

#### Headers
- `Authorization`: Bearer token or `token` cookie.

#### Responses

- **200 OK**
  - **Description**: User profile retrieved successfully.
  - **Body**: A JSON object containing the user details.
  - **Example**:
    ```json
    {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
    ```

- **401 Unauthorized**
  - **Description**: Invalid or missing token.
  - **Body**: A JSON object containing the error message.
  - **Example**:
    ```json
    {
      "error": "Unauthorized"
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

### GET /users/logout

#### Description
This endpoint is used to log out the user.

#### HTTP Method
GET

#### Headers
- `Authorization`: Bearer token or `token` cookie.

#### Responses

- **200 OK**
  - **Description**: User successfully logged out.
  - **Body**: A JSON object containing a success message.
  - **Example**:
    ```json
    {
      "message": "Logged Out"
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

### /captains/register

**POST** `/captains/register`

Registers a new captain.

#### Request Body

```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password1234",
    "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
    },
    "location": {
        "ltd": 40.7128,
        "lng": -74.0060
    }
}
```

#### Response

- **201 Created**

```json
{
    "token": "jwt_token",
    "captain": {
        "_id": "captain_id",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "vehicle": {
            "color": "red",
            "plate": "ABC123",
            "capacity": 4,
            "vehicleType": "car"
        },
        "location": {
            "ltd": 40.7128,
            "lng": -74.0060
        },
        "status": "inactive"
    }
}
```

- **400 Bad Request**

```json
{
    "message": "Captain already exists"
}
```

- **401 Validation Error**

```json
{
    "errors": [
        {
            "msg": "First name must be at least 3 character long",
            "param": "fullname.firstname",
            "location": "body"
        },
        {
            "msg": "Email is invalid",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "Password must be at least 6 characters long",
            "param": "password",
            "location": "body"
        },
        {
            "msg": "Vehicle color is required",
            "param": "vehicle.color",
            "location": "body"
        },
        {
            "msg": "Vehicle plate is required",
            "param": "vehicle.plate",
            "location": "body"
        },
        {
            "msg": "Vehicle capacity must be a positive integer",
            "param": "vehicle.capacity",
            "location": "body"
        },
        {
            "msg": "Vehicle type is required",
            "param": "vehicle.vehicleType",
            "location": "body"
        }
    ]
}
```
