# 📚 Bookstore REST API

A simple Node.js RESTful API for managing a bookstore with secure user 

---


## 🚀 Features

- JWT-based authentication
- User registration and login
- Full CRUD for books
- File-based storage (no DB needed)
- Authentication access control (users can only edit/delete their own books)

---

## ⚙️ Setup Instructions

### 1. Clone and install dependencies
```bash
git clone [https://github.com/Malay207/bookstore-api.git](https://github.com/Malay207/Bookstroe-api.git)
cd bookstore-api
npm install


##Create a .env file

PORT=5000
JWT_SECRET=your_jwt_secret

##start the server
npm start


###How to test end points
 1.Register a User

 POST /api/register


{
  "email": "test@example.com",
  "password": "123456"
}

2.Login user

POST /api/login

{
  "email": "test@example.com",
  "password": "123456"
}

3.get all book (authenticated)

GET /api/books
Authorization: Bearer <your_token>

4.add books(authenticated)

POST /api/books
Authorization: Bearer <your_token>
Content-Type: application/json

{
  "title":" book_name",
  "author": "author_name",
  "genre": "book_type",
  "publishedYear": published year
}

5.get book by id(authenticated)

Authorization: Bearer <your_token>
GET /api/books/:id 

6.update book by id

PUT /api/books/:id
Authorization: Bearer <your_token>

{
  "title": "Updated Title",
  "author": "Updated Author",
  "genre": "Updated Genre",
  "publishedYear": update_year
}

7.Delete book by id

DELETE /api/books/:id
Authorization: Bearer <your_token>


### Api Documnetation 

info:
  title: Bookstore API
  version: 1.0.0
paths:
  /api/register:
    post:
      summary: Register a new user
      requestBody:
        required: true
      responses:
        '201':
          description: User registered
  /api/books:
    get:
      summary: Get all books
      responses:
        '200':
          description: Success

