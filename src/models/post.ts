import mongoose from "mongoose";
const post= new mongoose.Schema({
     
    
      title:{
        type:String
          },

    body:{
        type:String,
        required:true,
    },
     createdAt:{
        type:Date,
        default:Date.now
      }
      
   
    
})
export default mongoose.model('post',post)
