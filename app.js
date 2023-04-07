const express = require('express');
const port = 80;
const app = express();

// For serving static files
app.use('/static', express.static('static'));

app.get("/", (req,res) =>{
    res.send("<h1>Express app</h1>");
})
app.get("/shop", (req,res) =>{
    res.send("Shopping page of Express app");
})

app.listen(port, ()=>{
    console.log(`listening on http://localhost/`);
})