const express = require('express')
const app = express()
app.use(express.json())
const jwt = require('jsonwebtoken')
const {createTodo,updateTodo} = require('./types')
const {todo} = require("./db")
const cors = require('cors')
app.use(cors())
// app.post('/signup',(req,res)=>{

// })
// app.post('/signin',(req,res)=>{

// })
app.post('/todo',async(req,res)=>{
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload.success){
         res.status(411).json({
            msg : 'invalid input'
        })
        return
    }
    await todo.create({
        title : createPayload.title,
        description : createPayload.description
    })
    res.json({
        msg : 'todo created'
    })
})
app.get('/todos',async(req,res)=>{
    const todos = await todo.find({})
    if(todos){     
        res.json({
            todos
        })  
    }
})
app.put('/completed',async(req,res)=>{
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg : 'requires valid input'
        })
        return
    }
await todo.updateOne({
    _id:updatePayload.id
} ,{
        completed : true
    })
    res.json({
        msg :'todo marked as completed'
    })
})




app.listen(3000)