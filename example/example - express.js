const express = require('express');
const port = 80;
const app = express();

app.get("/", (req,res) =>{
    res.send("Express app");
})
app.get("/shop", (req,res) =>{
    res.send("Shopping page of Express app");
})

app.listen(port, ()=>{
    console.log(`listening on http://localhost/`);
})