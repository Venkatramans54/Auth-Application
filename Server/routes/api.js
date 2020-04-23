const express = require('express');
const bcrypt=require('bcrypt');

const User=require("../models/user")

const routes =express.Router();

routes.get('/',(req,res)=>{
    res.send('Hi from api');
});

routes.post('/register',async (req,res)=>{
    let userData=req.body;
    const salt=await bcrypt.genSalt()
    const hashedPswd=await bcrypt.hash(userData.password,salt)
    let user=new User({email:userData.email, password:hashedPswd})
    console.log(user)
    user.save((err,doc)=>{
        if(err){
            console.error(err);
        }
        else{
            res.status(200).send(doc);
        }
    })
})

routes.post('/login',(req,res)=>{
    let userData=req.body;
    
    User.findOne({email:userData.email},async (err,user)=>{
        
        if(err){
            console.log(err);
        }
        else{
            console.log(userData)
            if(!user){
                res.status(401).send("Invalid Email")
            }
            else{
                if(await bcrypt.compare(userData.password,user.password)){
                    res.status(200).send(user)   
                }
                else{
                    res.status(401).send("Invalid Password")
                }
            }
        }
    })
})

module.exports=routes;