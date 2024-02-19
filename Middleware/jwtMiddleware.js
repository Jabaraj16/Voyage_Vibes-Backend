const jwt=require('jsonwebtoken')

 const jwtMiddleWare=(req,res,next)=>{
    
    try{
        const token=req.headers['authorization'].split(' ')[1]
        if(token){
            const jwtresponse=jwt.verify(token,process.env.secreteKey)
            req.payload=jwtresponse.userId
            next()

            
        }else{
            res.status(401).json("Login error")
        }
    }catch(err){
        res.status(403).json("Login")
    }
}

module.exports=jwtMiddleWare