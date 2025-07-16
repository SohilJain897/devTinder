const express = require('express');
const app = express();


app.use("/admin", (req,res,next) =>{
    const token = "xyz";
    const authValid = token === "xyzwwww";
    if (!authValid){
        res.status(401).send("Unauthorized");
    }
    else{
        next();
    }
    
});

app.use("/admin/getapp", (req,res,next)=>{
    res.send("getaapppp");
    next();
})

app.use("/admin/getIsak", (req,res,next)=>{
    res.send("get ISak");
    next();
})
app.use("/admin/ssss", (req,res)=>{
    res.send("getaappsssssssspp");

})
app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
});