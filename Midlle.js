 midleware=(req,res,next)=>{
    if(!req.query.age){
        res.send("Please provide the age")
    }else if(req.query.age<18){
        res.send("Not able to access its 18+ sites")
    }else{
        next()
    }
}
module.exports=midleware