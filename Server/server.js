const express = require('express');
const connectDB = require('./config/db');
const cors=require('cors');

const app = express();
app.use(cors());

connectDB();

app.use(express.json({extended:false}));
app.use("/api",require("./routes/api"));
app.get("/",(req,res)=>{
    res.send("Hi...");
});
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Server Started...");
});