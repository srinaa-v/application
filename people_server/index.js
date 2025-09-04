//1.load the packages
const express =require("express");
const mongoose=require("mongoose");
const cors=require("cors");
//2.create the express app
const app=express();
//tell the app:if any req has json data,pls understand 
app.use (express.json());
//tell the app:allow other url's to interact and share
app.use(cors());

//3.connect to mongodb
mongoose.connect("mongodb://localhost:27017/bit")
//if connection works
.then(()=>console.log("Mongodb connected"))
//if connection fail
.catch(err=>console.log("mongodb error",err));
//4.define models
const Person=mongoose.model("student_details",new mongoose.Schema({name:String,age:Number,course:String,email:String,phone:Number},"student_details"));
//5.define crud routes get/post/put/delete
//read-get req
//when users goes to server url with get method-->fetch all people from mongodb
//sort name and get sent back as json to browser
app.get("/",async(_req,res)=>{
    try{
        const student_details=await Person.find().sort({name:1});
         res.json(student_details);
    } catch(e){
        res.status(500).json({error: e.message});

    }
});


app.post("/",async(_req,res)=>{
    try{
        const people=await Person.create({
            name:req.body.name,
            age:Number(req.body.age)
        });
        res.status(201).json(people);
    } catch(e){
        res.status(500).json({error: e.message});

    }
});
setPeople([...people,res.data]);
setForm({name:"",age:""});


//6.start the server 
//tell express to start listening on port 4000
app.listen(4000,()=>console.log("express api server is runing in 4000 port "))