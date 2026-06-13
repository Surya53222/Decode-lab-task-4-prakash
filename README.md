# Decode-lab-task-4-prakash
"I created a Node.js and Express backend that exposes a REST API. The frontend was built using HTML, CSS, and JavaScript. Using the Fetch API, the frontend sends asynchronous requests to the backend and receives JSON data, which is rendered dynamically on the UI. Error handling is implemented using try-catch blocks."
Full Stack Development – Project 4

Frontend & Backend Integration

📌 Project Overview

This project demonstrates the integration of a frontend application with a backend server using REST APIs. The frontend sends requests to the backend, receives JSON data, and dynamically displays it on the user interface.

The project is developed as part of the Full Stack Development Industrial Training Kit – Project 4.

---

🎯 Objective

The main objective of this project is to understand how frontend and backend applications communicate with each other using APIs.

---

🚀 Features

- Fetch student data from the backend API.
- Display student information dynamically on the frontend.
- Handle API requests asynchronously using Fetch API.
- Basic error handling using try-catch.
- Demonstrates full-stack communication flow.

---

🛠️ Technologies Used

Frontend

- HTML5
- CSS3
- JavaScript (ES6)

Backend

- Node.js
- Express.js
- CORS Middleware

---

📂 Project Structure

project4/

├── backend/

│ ├── server.js

│ └── package.json

│

├── frontend/

│ ├── index.html

│ ├── style.css

│ └── script.js

│

└── README.md

---

⚙️ Backend Implementation

The backend is developed using Node.js and Express.js.

API Endpoint

GET /students

Returns a list of students in JSON format.

Sample Response

[
  {
    "id": 1,
    "name": "Rahul",
    "course": "MERN"
  },
  {
    "id": 2,
    "name": "Priya",
    "course": "Java"
  },
  {
    "id": 3,
    "name": "Aman",
    "course": "Python"
  }
]

---

💻 Frontend Implementation

The frontend is developed using HTML, CSS, and JavaScript.

Workflow

1. User clicks the Get Students button.
2. JavaScript sends a request to the backend API.
3. Backend processes the request.
4. Backend returns student data in JSON format.
5. Frontend dynamically displays the student details.

---

🔄 Data Flow

Frontend (HTML/CSS/JS)

↓

Fetch API Request

↓

Node.js + Express Backend

↓

JSON Response

↓

Dynamic UI Rendering

---

▶️ How to Run the Project

Step 1: Install Dependencies

Navigate to the backend folder and install required packages.

npm install express cors

Step 2: Start Backend Server

node server.js

Expected Output:

Server running on port 5000

Step 3: Test API

Open:

http://localhost:5000/students

You should see JSON data in the browser.

Step 4: Run Frontend

Open:

frontend/index.html

Click Get Students to fetch and display student data.

---

📸 Expected Output

Student List

[Get Students]

Rahul
MERN

Priya
Java

Aman
Python

---

📚 Learning Outcomes

Through this project, I learned:

- How REST APIs work.
- How frontend and backend communicate.
- How to use Fetch API for asynchronous requests.
- How JSON data is transferred between client and server.
- Basic error handling techniques.
- Full-stack application workflow.

---

🎓 Conclusion

This project successfully demonstrates frontend and backend integration using modern web development technologies. The frontend fetches data from the backend API and dynamically displays it to the user, providing a practical understanding of full-stack application architecture.

---

Developed By

surya prakash 

Full Stack Development Internship

Project 4 – Frontend & Backend Integration
