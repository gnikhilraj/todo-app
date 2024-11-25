const express = require('express');
const { createTodo } = require('./types');
const app = express();

app.use(express.json());


app.post("/todo",function(req , res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
})

app.get("/todos",function(req , res){
    
})

app.put("/completed",function(req , res){
    
})
