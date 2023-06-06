import post from "../models/post";
import { Request,Response } from "express";

//---------------ADD NEW POST--------------//
 const Addpost = async (req:Request , res:Response) => {
  
  try {
    const newpost = new post(req.body); 
   
      await newpost.save()
    res.status(200).send({ msg: "post added", newpost });
  } catch (error) {
    console.log(error)
    res.status(500).send("couldn't add post");
  }
};
export default Addpost