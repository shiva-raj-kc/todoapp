const express = require('express')
const app = express()
app.use(express.json())
const jwt = require('jsonwebtoken')
const {createTodo,updateTodo} = require('./types')
// app.post('/signup',(req,res)=>{

// })
// app.post('/signin',(req,res)=>{

// })
app.post('/todo',(req,res)=>{
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        return res.status(411).json({
            msg : 'invalid input'
        })
    }
    return

})
app.get('/todos',(req,res)=>{

})
app.put('/completed',(req,res)=>{
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg : 'requires valid input'
        })
    }
    return
})




app.listen(3000)