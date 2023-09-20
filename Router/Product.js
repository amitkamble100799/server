const productroute=require("express").Router()
productroute.get("/api/product",(req,res)=>{
res.send("this is our product page");
});

productroute.get("/api/product:age",(req,res)=>{
    const age=req.params.age;
    if(age>=18){

        res.send("User is Allowed");
    }else{
        res.send("User is Not Allowed");
    }
    
    });

    productroute.get("/api/createuser",(req,res)=>{
        const{age,name,role}=req.query;

        res.send({age,name,role});
        });
module.exports=productroute