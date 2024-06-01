import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
 
  email: {
    type: String,
    required: [true, "please enter your email"],
  },
  phoneNo: {
    type: Number,
    required: [true, "please enter your number"],
  },

  password: {
    type: String,
    required: [true, "please enter password"],
   
    // select:false
  },
  
  isActive: {
    type: Boolean,
    default: true,
    // select:false
  },
  role: {
    type: String,
    
  },
});

const User = mongoose.model("user", userSchema);
export default User;
