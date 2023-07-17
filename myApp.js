let express = require('express');
let app = express();
require('dotenv').config()

absolutePath = __dirname + '/views/index.html'
app.use("/public",express.static(__dirname + '/public'))


app.get("/",(req,res)=>{
    res.sendFile(absolutePath)
})

app.get("/json",(req,res)=>{
    if (process.env.MESSAGE_STYLE === "uppercase") {
        var response = "Hello json".toUpperCase() 
    } else {
        var response = "Hello json"
    }
    res.json({"message":response})  
})





























 module.exports = app;
