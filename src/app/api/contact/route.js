"use server";
import { dbConnect } from "@/lib/dbConnect";

export const ContactUser = async (payload) => {
  try {
    const result = await dbConnect("contact").insertOne(payload);

    return {
      success: true,
      message: "Data sent to MongoDB!",
    };
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false, error: error.message };
  }
};
