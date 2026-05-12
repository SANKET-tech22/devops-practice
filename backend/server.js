const express = require("express");
const cors = require("cors");


const app = express();

app.use(cors());

app.get("/", (req,res)=>{
    res.json({
        message: "Backend running successfully"
    });
});

app.listen(5000, ()=>{
    console.log("Server is running on port 5000")
});