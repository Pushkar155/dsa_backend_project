const mongoose=require("mongoose");

const questionsSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        link:{
            type: String,
            required:true
        },
        difficulty:{
            type : String,
            required:true
        },
        sheets:{
            type:[String],
            required:true
        },
        topics:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model("dsa_questions",questionsSchema);
