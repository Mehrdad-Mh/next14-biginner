import { Post } from "@/lib/models"
import { connectToDb } from "@/lib/utils"
import { NextResponse } from "next/server";


export const GET = async (request) =>{

  try{

    connectToDb()
    console.log(connectToDb,"connected to db by api")

    const posts = await Post.find();
    console.log(posts,"posts in api");
    return NextResponse.json(posts)
  
  }catch(err){
    console.log(err)
    throw new Error("error in geting posts with api")
  }

}