import express from "express";
const app=express();
const port=3000;

app.get("/",(req,res)=>{
    //console.log(req.rawHeaders);
    res.send("<h1>Hello World!</h1>")
});

app.get("/about",(req,res)=>{
    res.send("<p>This is about page :)</p>")
})

app.get("/contact",(req,res)=>{
    res.send("This is contact Page! ;)")
})

app.listen(port,()=>{
    console.log(`Server started listening on ${port} successfully`)
});