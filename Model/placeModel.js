const mongoose=require('mongoose')

const placeModel=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    placeName:{
        type:String,
        required:true
    },
    review:{
        type:String,
        required:true
    },
    placeLocation:{
        type:String,
        required:true
    },
    placeImage:{
        type:String,
        required:true
    },
    placeRating:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
})

const places=mongoose.model("places",placeModel)

module.exports=places
