const express = require('express');
const app = express();


app.use("/user",(req,res,next)=>{
   // res.send("hello from the florian wirtz")
    next();
}, (req,res,next) => {
   // res.send("hello from the frompng")
    next();
},(req,res,next)=>{
    res.send("hello from milos kerkez")
    next();
})

app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
});