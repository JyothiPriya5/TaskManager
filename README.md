# Task Management Web Application

This project is a full-stack Task Management Web Application developed as part of the
Full Stack Development Internship Assignment.

It allows users to create, view, update, and delete tasks with persistent data storage
using MongoDB.

---

## Features

- Create new tasks with title, description, and status
- View all tasks in a structured format
- Update task status
- Delete tasks
- Data stored permanently in MongoDB
- Responsive and user-friendly interface

---

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB

---

##  Setup Instructions

### Prerequisites

Make sure the following are installed on your system:

- Node.js
- MongoDB
- Git
- VS Code (Recommended)

---

### MongoDB Connection Setup

1. Open MongoDB Compass

2. Click New Connection

 Use this URL:

```bash
mongodb://localhost:27017
```

Click Connect

Now you are connected to local MongoDB.

Create Database for Project

Enter:

Database Name: taskdb

Collection Name: tasks

### Backend Setup

1. Open terminal and navigate to backend folder:

```bash
cd backend
```
2. Install required dependencies:
   
```bash
npm install express mongoose cors dotenv
```
3. start the backend server

```bash
node server.js
```
The backend will run on:
```bash
http://localhost:5000
```
### Frontend Setup

1. Open the frontend folder

2. Open index.html in any modern browser or Use Live Server extension in VS Code for better experience.

## Screenshots

#### Home Page
<img width="1354" height="645" alt="image" src="https://github.com/user-attachments/assets/d336aded-e103-4cc3-9077-050c40129fd8" />

#### Your Tasks Page
<img width="1353" height="644" alt="image" src="https://github.com/user-attachments/assets/a63775d2-aa39-4ddd-8ebd-17f96b2994ff" />

#### About Page
<img width="1357" height="636" alt="image" src="https://github.com/user-attachments/assets/940063ae-4e49-4a61-b220-8009ec937d0d" />



