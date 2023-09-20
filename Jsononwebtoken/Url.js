const Router=require("express").Router();
const {login,register}=require('./Controler')
const {profile , dashboard}=require('./dash')
const Authmidlle=require('./Auth')
Router.post('/login',login)
Router.post('/register',register)
Router.get('/login',login)
Router.get('/profile',Authmidlle,profile)
Router.get("/Fetch",Authmidlle,dashboard)

module.exports=Router
