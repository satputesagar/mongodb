const express =require('express')

const app =express();
const port =4000;

const bodyParser =require('body-parser');

app.use(bodyParser.urlencoded({extended:false});


app.use(express.json());

const path =require("path");
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+ "./index.html"))
});
// GET ,POST ,PUT ,DELETE
// create,update,insert,delete)
app.post("/",(req,res)=>{
      
     
})

// API
// api/v1/userdata 
// res.json({data})





app.listen(port,()=>{
    console.log(`server is working on port :${port}`);
});


