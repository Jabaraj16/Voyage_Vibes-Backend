const multer=require('multer')

const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        const fileName=`img-${Date.now()}-${file.originalname}`
        callback(null,fileName)
    }
})


const fileFilter=(req,file,callback)=>{

    if(file.mimetype==="image/jpg" || file.mimetype==="image/jpeg" || file.mimetype==="image/img" || file.mimetype==="image/png" ){
        callback(null,true)
    }else{
        callback(null,false)
        return callback(new Error("please upload file in given format !!!"))
    }
}
const multerConfig=multer({
    storage,fileFilter
})

module.exports=multerConfig