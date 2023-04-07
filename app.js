const express = require('express');
const port = 80;
const app = express();

// For serving static files
app.use('/static', express.static('static'));

app.get("/", (req,res) =>{
    res.send("<h1>Express app</h1><a href='/shop'>click here</a>");
})
app.get("/shop", (req,res) =>{
    res.send("<h1>Shopping page of Express app</h1><a href='./'>click here</a>");
})

app.listen(port, ()=>{
    console.log(`listening on http://localhost/`);
})