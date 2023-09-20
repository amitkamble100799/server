const express=require('express')
const route=require("./Router/usrt")
const productroute=require("./Router/Product")
const Url=require('./Url')
const cors=require("cors")
const app=express();
const port=4300;
app.use(cors({
    origin:"*"
}))
app.use("/user",route)
app.use("/products",productroute)
app.use('/url',Url)
app.listen(port,()=>{
   try{
        console.log(`Server Creation done posrt ${port}`)
    }
    catch(err){
        console.log(`Server Creation done ${err}`)
    }
})