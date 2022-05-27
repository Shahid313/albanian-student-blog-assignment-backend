const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    content:{
        type:String
    },
})

const Posts = mongoose.model('Posts', userSchema)

module.exports = Posts