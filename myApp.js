let express = require('express');
let app = express();
require('dotenv').config()

absolutePath = __dirname + '/views/index.html'
app.use("/public",express.static(__dirname + '/public'))


app.get("/",(req,res)=>{
    res.sendFile(absolutePath)
})

app.get("/json",(req,res)=>{
    console.log(process.env.MESSAGE_STYLE);
    if (process.env.MESSAGE_STYLE == "uppercase") {
        res.json({"message":"Hello JSON"})  
    } else {
        res.json({"message":"Hello json"})  
    }
})





























 module.exports = app;
