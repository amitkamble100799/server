const http = require('http');
// const cors =require("cors")

const jsonobj=[
    {
"name":"Amit",
"age":23,
"Role":"FSWD"
},
{
    "name":"Smith",
    "age":23,
    "Role":"FSWD"
    },
    {
        "name":"david",
        "age":23,
        "Role":"FSWD"
        }

]
const App=http.createServer((req,res)=>{
if(req.url=='/About'){
res.write("<html>");
res.write("<Body>")
res.write("<h1>About us</h1>")
res.write("<p>you find the all details here</p>")
res.write("</Body>")
res.write("</html>");
res.end()
}
if(req.url=='/'){
    res.write("<p>Welcome to Home Page</p>")
    res.end()
}
if(req.url=='/jsonfetch'){
    const data=JSON.stringify(jsonobj)
    res.write(data);
    res.end()
}
})

// App.use(cors(
//     {
//         origin:"https://localhosts/4000"
//     }
// ))
App.listen(4000,()=>{
    console.log("hello")
})