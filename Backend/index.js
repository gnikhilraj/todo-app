const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express();

app.use(express.json());


app.post("/todo", async function(req , res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(parsedPayload != success){
        res.status(411).json({
            msg : "you sent the wrong inputs"
        })
        return;
    }
    //put it in mongodb

    await todo.create(
        {

            title : createPayload.title,
            description : createPayload.description,
        }
    )

    res.json({
        msg: "Todo created"
    })

})

app.get("/todos",async function(req , res){

    await todo.find({

    });

    
})

app.put("/completed", async function(req , res){
    const createPayload = req.body;
    const parsedPayload = updateTodo.safeParse(createPayload);

    if(parsedPayload != success){
        res.status(411).json({
            msg : "you sent the wrong inputs"
        })
        return;
    }

    
    
})
