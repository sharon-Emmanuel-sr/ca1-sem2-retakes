const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Server is running...");
})

app.post('/details',(req,res)=>{
    const {userName,email,password,dateOfBirth}=req.body;

    if(!userName){
        return res.status(404).json({error : "Username cannot be empty"});
    }
    if(!email){
        return res.status(404).json({error : "Email cannot be empty"});
    }
    if(!password){
        return res.status(404).json({error : "Password cannot be empty"});
    }else if(password.length < 8 || password.length >= 16){
        return res.status(400).json({error: "Password length must be greater than 8 or less than or equal to 16"})
    }
    res.json({
        message : "Login Successful",
        data : {
            "userName": userName,
            "email":email,
            
            "DOB": dateOfBirth
        }
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

// 1 st cloning using
// npm install express dotenv nodemon
// echo "node_modules" > .gitignore