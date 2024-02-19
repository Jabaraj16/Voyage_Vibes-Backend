const express=require('express')
const userController=require('../Controller/userController')
const jwtMiddleWare = require('../Middleware/jwtMiddleware')
const multerConfig = require('../Middleware/multerMiddleware')
const placeController= require('../Controller/placeController')
const router=express.Router()

router.post('/register',userController.register)
router.post('/login',userController.login)
router.post('/addplace',jwtMiddleWare,multerConfig.single('placeImage'),placeController.addPlace)
router.get("/home-place",placeController.getHomePlace)
router.get("/allplace",jwtMiddleWare,placeController.getAllProject)
router.get("/userplace",jwtMiddleWare,placeController.getUserPlace)
router.put("/place/edit/:pid",jwtMiddleWare,multerConfig.single("placeImage"),placeController.ediitPlace)
router.delete("/place/delete/:pid",jwtMiddleWare,placeController.removePlace)

module.exports=router