//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url"
import { dirname } from "path";

const __dirname=dirname(fileURLToPath(import.meta.url));
const app=express();
const port=3000;
function verifyPassword(req,res,next){
    req.allowed=false;
    if(req.body["password"]=="ILoveProgramming")
    {
        req.allowed=true;
    }
    next();
}
app.use(bodyParser.urlencoded({extended: "true"}));
app.use(verifyPassword);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
})

app.post("/check",(req,res)=>{
     if(req.allowed)
     {  res.sendFile(__dirname+"/public/secret.html");
     }
     else
     {
        // res.sendFile(__dirname+"/public/index.html");
        res.redirect("/");
     }
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})