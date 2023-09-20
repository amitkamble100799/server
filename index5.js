const express=require('express')
const jwt=require('jsonwebtoken')
const app=express();

const cors=require('cors')
app.use(cors({
    origin:"*"
}))
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.send("hello")
})
app.get('/forgot',(req,res,next)=>{
    res.render('forgot')
})
app.post('/forgot',(req,res,next)=>{
    res.send("forgot password")
})
app.get('/reset',(req,res,next)=>{
    res.send("reset password")
})
app.post('/reset',(req,res,next)=>{
    res.send("reset password")
})

app.get('/',(req,res)=>{
 res.send("server Rumming on port 3000")
 })
app.listen(3000)