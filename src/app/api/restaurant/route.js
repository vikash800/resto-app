import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr,{useNewUrlParser:true});
    const data= await restaurantSchema.find()
    console.log(data); 
      
    return NextResponse.json({result:data})
}

export async function POST(){
    return NextResponse.json({result:true})
}