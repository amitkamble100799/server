const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const saltround=10
let arr=[];
 const secretkey='Ak123'
const register=  (req,res)=>{
    const details=req.body
    console.log('detail here'.details);
    const find=arr.find((item)=>details.email===item.email)
    if(find){
        return res.send({msg:'You are alredy registerd' })
    }
    // install bcrypt 
   // const hashPassword=bcrypt.hash(originalpassword,saltround)
   const hashPassword= bcrypt.hashSync(details.password,saltround) 
   const temp={
    email:details.email,
    password:hashPassword
   }
   arr.push(temp)
   console.log('temp here',temp)
   const token=jwt.sign({email:details.email},process.env.secretkey,{expiresIn:"24h"})
    res.send({msg:'user  registerd' ,result:arr,token : token})
    
}
const login=async (req,res)=>{
    // res.send({msg:'user is registerd'})
    const details=req.body
const find=arr.find((item)=>details.email==item.email)
if(!find){
    return res.send({msg:"user Not redister"})
}
const validate=await bcrypt.compare(details.password,find.password)
if(!validate){
    return res.send({msg:"user passwrd is wrong"})
}
const token=jwt.sign({email:details.email},process.env.secretkey,{expiresIn:"36h"})
return res.send({msg:"user is loged in",token : token})
}

module.exports={
    register,
    login
}






















// const bcrypt=require('bcrypt')

// const userdata=[

// ];

// function hashPassword(password){
//     const saltRound=10;
//     return bcrypt.hashSync(password,saltRound)
// }

// function checkpassword(password,hash){
// return bcrypt.compareSync(password, hash)
// }
// const Signup=(req,res)=>{
// userifo=req.body;
// userifo.password=hashPassword(userifo.password)
// userdata.push(userifo);
// console.log(userdata);
// res.status(201).json({message:"user creted Succesfully"})
// }

// const login=(req,res)=>{
// const loginifo=req.body;
// let userfound=null;
// for(const eachuser of userdata){
// if(eachuser.mail==loginifo.mail){
//     userfound=eachuser;
// }
// }
// if(userfound==null){
//     return res.status(400).send("user Not registered")
// }
// //vpmpare Hash and password
// const isPasswordcorret=checkpassword(loginifo.password,userfoubd.password);
// if(!isPasswordcorret){
//    return res.status(400).send("Password is not correct")
// }else{
//     return res.send("user Login")
// }

// }
// module.exports={
//     Signup,
// login
// }