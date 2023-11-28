const mongoose = require("mongoose")
const userShema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please add the user name"]
    },
    email:{
        type:String,
        required:[true, "Please add the user email"],
        unique:[true,"This email is already taken"]
    },
    password:{
        type:String,
        require:[true,"Please add your pasword"]
    }
},
{
    timestamps:true
})




module.exports=mongoose.model("Users",userShema);