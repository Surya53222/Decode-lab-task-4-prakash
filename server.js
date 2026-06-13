const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const students = [
  {
    id: 1,
    name: "Rahul",
    course: "MERN"
  },
  {
    id: 2,
    name: "Priya",
    course: "Java"
  },
  {
    id: 3,
    name: "Aman",
    course: "Python"
  }
];

app.get("/students", (req, res) => {
  res.json(students);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
