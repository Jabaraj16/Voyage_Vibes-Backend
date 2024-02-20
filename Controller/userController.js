const users = require("../Model/userModel");
const jwt=require('jsonwebtoken')

exports.register=async(req,res)=>{
    const {username,email,password}=req.body
    console.log(username,email,password);

    try{
        const existingUser=await  users.findOne({email})
    console.log(existingUser);
    if(existingUser){
        res.status(406).json("user already exist")
    }else{
        const newUser=new users({
            username,email,password
        })
        await newUser.save()
        console.log(newUser);
        res.status(200).json(newUser)
    }
    
    }catch(err){
        res.status(401).json(err)
    }
}

exports.login=async(req,res)=>{
    const {email,password}=req.body

    try{
        const existingUser=await users.findOne({email,password})
        if(existingUser){
            //generate token to verify user
            const token=jwt.sign({userId:existingUser._id},process.env.secreteKey)
            res.status(200).json({existingUser,token})
        }else{
            res.status(406).json("invalid email/password")
        }
    }catch(err){
        res.status(401).json(err)
    }
}
exports.deleteAccount=async(req,res)=>{
    const userId=req.payload

   try{
    const deleted=await users.findByIdAndDelete({_id:userId})
    res.status(200).json(deleted)
   }catch(err){
    res.status(401).json(err)
   }
}