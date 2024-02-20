const places = require("../Model/placeModel")

//add Place
exports.addPlace=async(req,res)=>{
    const {username,placeName,review,placeLocation,placeRating}=req.body
    const userId=req.payload
    const placeImage=req.file.filename

    try{
        const newPlace=new places({
            username,placeName,review,placeLocation,placeImage,placeRating ,userId
        })
        await newPlace.save()
        res.status(200).json(newPlace)
    }catch(err){
        res.status(401).json(err)
    }

}

//getHome place

exports.getHomePlace=async(req,res)=>{

    try{
        const existingPlace=await places.find().limit(3)
        if(existingPlace){
            res.status(200).json(existingPlace)
        }else{
            res.status(403).json("No Review Yet !!")
        }
       
    }catch(err){
        res.status(401).json(err)
    }
}
// getall project

exports.getAllProject=async(req,res)=>{
   const searchKey=req.query.search
   const query={
    placeName:{ $regex:searchKey, $options:"i"}
   }
    try{
        const allPlace=await places.find(query)
        res.status(200).json(allPlace)
    }catch(err){
        res.status(401).json(err)
    }
}

exports.getUserPlace=async(req,res)=>{
    const userId=req.payload
    try{
        const allPlace=await places.find({userId})
        res.status(200).json(allPlace)
    }catch(err){
        res.status(401).json(err)
    }
}

// edit place

exports.ediitPlace=async(req,res)=>{
    const {username,placeName,review,placeLocation,placeRating,placeImage}=req.body
    const uploadedImage=req.file?req.file.filename:placeImage
    const {pid}=req.params
    const userId=req.payload

    try{
        const updatedPlace=await places.findByIdAndUpdate({_id:pid},{
            username,placeName,review,placeLocation,placeImage:uploadedImage,placeRating ,userId
        },{new:true})
        await updatedPlace.save()
        res.status(200).json(updatedPlace)
    }catch(err){
        res.status(401).json(err)
    }
}

//remove place
exports.removePlace=async(req,res)=>{
    const {pid}=req.params

    try{
        const deletedPlace= await places.findByIdAndDelete({_id:pid})
        res.status(200).json(deletedPlace)
    }catch(err){
        res.status(401).json(err)
    }
}

