const express=require('express')
const app=express();
const midleware=require("./Midlle")
const cors=require("cors")
// app.use(midleware)
app.use(cors({
    origin:"*"
}))
const dum=require('./Dum')
const arr=[]
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("welcome to Home page")
})
app.get('/About',midleware,(req,res)=>{
    res.send("Welcome to our site")
})
app.post('/login',(req,res)=>{
    const data=req.body
    console.log(data)
    arr.push(data)
    res.send(arr)
})

app.get('/fetchjson',(req,res)=>{
    res.send(dum)
})
app.get('/Post',(req,res)=>{
    res.send("you are in Get")
})
app.post('/Post',(req,res)=>{
    res.send("you are in post")
})
app.listen(4300,()=>{
    console.log('Server Creation done')
})