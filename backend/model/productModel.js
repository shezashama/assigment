import mongoose from "mongoose";

const Productschema = new mongoose.Schema({
    productName:{
        type:String,
        required: [true, "name is required"],
    },
    price:{
        type:Number,
        required: [true, "number is required"],
    },
    color:{
        type:String,
        required:[true,"km is requird"]
    },
    quantity:{
        type:String,
        required:true
    },
  
    isActive:{
        type:Boolean,
        required:true,
        default:true
    },

    image:{
        type:String
    }
    
})

const Product=mongoose.model("product",Productschema);
export default Product;