const express = require('express');
const app = express();
const connectDB = require('./config/db');

const port = process.env.PORT || 3000
connectDB();
app.use(express.json({extended:false}));
app.use("/api",require("./routes/api"));
app.get("/",(req,res)=>{
    res.send("Hi...");
});

app.listen(port, ()=>{
    console.log("Server Started...");
});