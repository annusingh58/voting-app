import USER from "../model/user.js";
import VOTE from "../model/vote.js";



export const voting =async(req,res)=>{

    try {
        const{email,vote,catergory}=req.body;
       if (!email)return res.send("email is required");
       if (!catergory)return res.send("catergory is required");
        const checkuser=await USER.find({email}).exec();
        const checkvoter =await VOTE.find({email}).exec();

        if (!checkuser.length) return res.send("You are not registered for vote");

        if (!checkvoter.length) {

            const newVoter = new VOTE({
                email,
                vote,catergory
            });
            await newVoter.save();
            return res.send(" your Vote added Successfully");
        } else {
            return res.send("you can't vote again");
        }

    } catch (error) {
        return res.send(error);
    }
}


export const adminlogin=async(req,res)=>{
    try {
        const{name,email,password}=req.body;
        if(!name)return res.send("name is required");
        if(!email)return res.send("email is required");
        if(!password)return res.send("password is required");

        const response=await USER.find({}).exec();
        return res.send(response);
        
    } catch (error) {
        return res.send(error)
    }

}
export const getadmin=async(req,res)=>{
    try{
       const response=await USER.find({}).exec();
       return res.send(response);
    }
    catch (error) {
        return res.send(error)
    }
}


        
