const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ADMIN:w1MrRCDSfEv4eKei@cluster0.xf85mlc.mongodb.net/todo?')
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})