import mongoose from "mongoose";
import { Schema } from "mongoose";
const vote=new Schema({
    name:String,
    email:String,
    password:String,
    catergory:String,
    number:Number
});

export default mongoose.model("VOTE",vote);