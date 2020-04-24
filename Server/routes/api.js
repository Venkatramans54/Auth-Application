const express = require('express');
const bcrypt=require('bcrypt');

const User=require("../models/user")

const routes =express.Router();

let products=[
    {
    'name':'Shampoo',
    'quantity':5,
    'price':'Rs. 50'
    },
    {
    'name':'Soap',
    'quantity':7,
    'price':'Rs. 30'
    },
    {
    'name':'Detergent',
    'quantity':5,
    'price':'Rs. 65'
    },
    {
    'name':'Perfume',
    'quantity':2,
    'price':'Rs. 150'
    },
    {
    'name':'FaceWash',
    'quantity':15,
    'price':'Rs. 45'
    },
    {
    'name':'Shampoo',
    'price':'Rs. 50'
    }
]

routes.get('/',(req,res)=>{
    res.send('Hi from api');
});

routes.get('/products',(req,res)=>{
    res.send(products)
})

routes.post('/register',async (req,res)=>{
    let userData=req.body;
    const salt=await bcrypt.genSalt()
    const hashedPswd=await bcrypt.hash(userData.password,salt)
    let user=new User({email:userData.email, password:hashedPswd})
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