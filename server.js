const express = require('express')
const cors = require('cors')
// const bodyParser = require('body-parser')
const app = express()
app.use(express.static("public"))
app.use(cors())
app.use(express.json())
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
const Posts = require('./models/Posts.js')
const connect_db = require('./connect_db')

connect_db()

const posts = require('./routes/apis/posts')
app.use('/apis/posts', posts)





const port = 5000
app.listen(5000, () => {
    console.log(`The server is running at ${port}`)
})