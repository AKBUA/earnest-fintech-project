const express=require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config()
const cors = require('cors');
const connection = require('./db');
const router = require('./routes/Task');
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(router)
connection()
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})
