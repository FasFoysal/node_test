const express = require("express");
const app = express();
const about = require("./about");
var cors = require('cors');

let PORT = process.env.PORT || 8000;

app.use(cors({
    origin:"https://glittery-lamington-740e8d.netlify.app", // client server
    methods:["GET","POST"]
 }))

app.get('/home/api/data',about,(req,res)=>{
    res.status(200).json(req.data)
 }) 


app.listen(PORT,()=>{
    console.log(`app listen port is ${PORT}`)
})