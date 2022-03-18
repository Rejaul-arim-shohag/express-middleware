const express = require('express');
const app=express();
const port = 8080;


//application level middleware
app.use((req, res, next)=>{
    console.log("I am aplication level middleware",Date.now());
    next();
})

//router level middleware 
app.use("/user", (req, res, next)=>{
    console.log("This is router level middleware verified user for")
    next()
})




app.get("/",(req, res)=>{
    res.send("This is simple get home route get ruquest")
})

app.get("/about", (req, res)=>{
    res.send("This is About")
})

app.get("/contact", (req, res)=>{
    res.send("This is contact")
})

app.get("/user", (req, res)=>{
   res.send("This is user route")
})
app.listen(port, ()=>{
    console.log("server running on port 8080")
})
