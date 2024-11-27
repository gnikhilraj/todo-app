// index.js
const express = require('express');
const Todo = require('./db'); // Importing Todo model from db.js
const { createTodo, updateTodo } = require('./types'); // Importing Zod validation schemas

const app = express();
app.use(express.json());

// Route to create a todo
app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  
  // Validate the request body with Zod
  const parsedPayload = createTodo.safeParse(createPayload);
  
  if (!parsedPayload.success) {
    return res.status(411).json({
      msg: "You sent the wrong inputs",
    });
  }
  
  // If validation passes, create the todo in the database
  await Todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo created",
  });
});

// Route to get all todos
app.get("/todos", async function (req, res) {
  const todos = await Todo.find(); // Fetching todos from MongoDB
  res.json(todos);
});

// Route to mark a todo as completed
app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  
  // Validate the request body with Zod
  const parsedPayload = updateTodo.safeParse(updatePayload);
  
  if (!parsedPayload.success) {
    return res.status(411).json({
      msg: "You sent the wrong inputs",
    });
  }

  // Mark the todo as completed using updateOne
  await Todo.updateOne(
    { _id: updatePayload.id }, // Find the todo by ID
    { $set: { completed: true } } // Update the completed status
  );

  res.json({
    msg: "Todo marked as completed",
  });
});

// Start the server
app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
