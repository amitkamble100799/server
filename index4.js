const express=require('express')
const app=express();
const Url=require('./Jsononwebtoken/Url')
const dotnev=require("dotenv")
const midleware=require("./Midlle")
dotnev.config()
const port=process.env.port
const cors=require("cors")
app.use(cors({
    origin:"*"
}))
app.use(express.json())

app.use('/url',Url)
app.get('/',(req,res)=>{
    res.send("welcome to Home page")
})

app.listen(port,()=>{
    console.log(`port number ${port}runinng`)
})