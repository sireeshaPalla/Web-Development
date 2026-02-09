import express from "express";

const app=new express();
const port=3000;

app.get("/",(req,res)=>{
    const date=new Date();
    const day=date.getDay();

    let type="weekday"
    let msg="it's time to work hard"

    if(day===0 || day===6)
    {
        type="weekend"
        msg="it's time to chill"
    }
    res.render("index.ejs",{
        "day": type,
        "message": msg
    })
})


app.listen(port,()=>{
    `Server listening on ${port} `
})