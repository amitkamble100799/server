const jwt=require('jsonwebtoken')
const Authmidlle=(req,res,next)=>{

const barrier=req.headers["authorization"];

if(barrier==undefined){
    return res.send({msg:"No tokens"})
}

const token=barrier.split(" ")[1];
console.log("token here",token)
if(token==undefined){
    return res.send({msg:"user not authorized expired r session time out"})
}
const verifys= jwt.verify(token, process.env.secretkey);
if(verifys){
   return next()
}
return res.send({msg:"not authorized particular resource"})
}

module.exports=Authmidlle;
