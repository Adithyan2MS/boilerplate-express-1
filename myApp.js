let express = require('express');
let app = express();

absolutePath = __dirname + '/views/index.html'
app.use("/public",express.static(__dirname + '/public'))

const obj={
    "message":"Hello json"
}

app.get("/",(req,res)=>{
    res.sendFile(absolutePath)
})

app.get("/json",(req,res)=>{
    res.json(obj)
})





























 module.exports = app;
