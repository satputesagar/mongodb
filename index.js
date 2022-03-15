const mongoose =require('mongoose');


mongoose.connect("mongodb://localhost:27017/Sample",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("connect to mongodb successfully")
})
.catch(err=>{
    console.log(err);
})


const student =new mongoose.Schema({
    name:String,
    workout:Boolean,
    height:Number,
    
})

const Student =new mongoose.model("Student",student);


const add = async()=>{
    const ss = await Student.find();
    console.log(ss);
}

add();