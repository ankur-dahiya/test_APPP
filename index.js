const express = require("express");
const app = express();
const PORT = 5000;

app.get("/",async (req,res)=>{
    await new Promise((res,rej)=>{
        setTimeout(()=>{res("resolved")},5000);
    });
    return res.status(200).send("<h1>Test App</h1>");
});

app.get("/hello",async (req,res)=>{
    return res.status(200).send("<h1>Hello World</h1>");
});

app.listen(PORT,()=>{
    console.log(`App is running on port: ${PORT}`);
})