const express = require('express');
const app = express();



app.get("/user",(req,res) => {
   res.send( {firstname: "Sohil" , lastName:"jain" })
})

app.post("/test", (req,res)=>{
    res.send("Hello from the server");
})


app.use("/hello", (req,res)=>{
    res.send("Hellooooooooooowwwwwoooo");
})

app.use("/", (req,res)=>{
    res.send("Hello from the ccccc");
})

app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
});