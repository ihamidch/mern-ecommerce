import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type: Number,
        default:0 // 0->user 
    }
    },{
        timestamps:true
    }
)
const User = mongoose.model('User',userSchema)

export default User