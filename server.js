const express= require("express");
const bodyparser=require("body-parser");
const cors=require("cors");
const dotenv=require("dotenv");
const mongoose=require("mongoose");
// ALL AUTH
const authQuestions =require("./routes/questions_routes");

const app=express();
app.use(cors());
app.use(bodyparser.json());
dotenv.config();

// ALL ROUTES
app.use("/API/question",authQuestions);

app.get("/",(req,res)=>{
    res.send("Hello World From Server");
})


mongoose.connect(process.env.MONGO__DB).then(()=>{app.listen(process.env.PORT,()=>{
    console.log((`Node Api Is Connected To ${process.env.PORT}`))
})
    console.log("Connected To MongoDb");
}).catch((error)=>{
    console.log(error);
})
