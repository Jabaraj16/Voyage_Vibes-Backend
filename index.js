require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router = require('./Routes/routes')
require('./DB/connection')

const PRserevr=express()

PRserevr.use(cors())
PRserevr.use(express.json())
PRserevr.use(router)
PRserevr.use('/uploads',express.static('./uploads'))
const PORT=3000

PRserevr.listen(PORT,()=>{
    console.log("PRserver Started at "+PORT);
})

PRserevr.get('/',(req,res)=>{
    res.status(200).send("<h5>PRserver Started </h5>")
})
