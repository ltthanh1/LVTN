import express from "express";
require('dotenv').config()
import cors from 'cors'
import initRoutes from './src/routes/index'
import connectDB from "./src/config/connectDB";



const app = express();
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", "GET", "PUT", "DELETE"]
}))

app.use(express.json())

app.use(express.urlencoded({ extends: true }))

initRoutes(app)
connectDB()

app.use('/', (req, res) => {
    res.send('server is running')
})

const port = process.env.PORT || 8080
const listener = app.listen(port, () => {
    console.log(`server is running on port ${listener.address().port} `)
})