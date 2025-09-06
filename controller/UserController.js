import UserModel from "../model/UserModel.js";

const createUser=async(req,res)=>{
    try{
        const newUser =new UserModel(req.body)
        const email = req.body.email;
        const userexits = await UserModel.findOne({email})

        if(userexits){
            return res.status(400).json({message:"User already exists"})
        }
        else{
            const saveData =await newUser.save();
            return res.status(201).json({data:saveData,message:"User created successfully"})
        }

    }catch(error){
        res.status(500).json({message:error.message})
    }

}

const getUser=async(req,res)=>{
    try{
        const userData = await UserModel.find();

        if(userData){
            res.status(200).json({data:userData,message:"Users fetched successfully"})
        }
        else{
            return res.status(404).json({message:"No users found"})
        }


    }catch(error){
        return res.status(500).json({message:error.message}) 
    }
}

export {createUser,getUser};