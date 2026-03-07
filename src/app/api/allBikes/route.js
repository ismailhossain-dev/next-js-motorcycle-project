"use server";
import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

//All bike get api
export async function GET(request) {
  const result = await dbConnect("bikeData").find().toArray();
  return Response.json(result);
}

//add form post api

export const addFormServer = async (payload) => {
  // console.log(payload);
  try {
    const result = await dbConnect("bikeData").insertOne(payload);

    return {
      success: true,
      message: "Data sent to MongoDB!",
    };
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false, error: error.message };
  }
};
