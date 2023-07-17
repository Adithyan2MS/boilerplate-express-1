require('dotenv').config()
let express = require('express');
let app = express();

absolutePath = __dirname + '/views/index.html'
app.use("/public",express.static(__dirname + '/public'))


app.get("/",(req,res)=>{
    res.sendFile(absolutePath)
})
let value = process.env.MESSAGE_STYLE
var message= 'Hello json';
app.get("/json", (req, res) => {
  if ( value == "uppercase") {
      res.json({ "message": message.toUpperCase() });
  }
  else {
    res.json({ "message": message });
  }
});





























 module.exports = app;
