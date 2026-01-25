const fs= require("fs")

// Writing to a file
// fs.writeFile("message.txt","Yes,you can!",(err)=>{
//   if (err) throw err;
//   console.log("file saved successfully");
// });

// Reading a file
fs.readFile("message.txt","utf-8",(err,content)=>{
    if(err) throw err;
    console.log("file read successfully")
    console.log(content)
})