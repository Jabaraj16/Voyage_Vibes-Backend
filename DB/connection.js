const mongoose=require('mongoose')
const connectionString=process.env.connection_string

mongoose.connect(connectionString).then(()=>{
    console.log("mongodb connected with PRserver");
}).catch((err)=>{
    console.log("manogb failed",err);
})