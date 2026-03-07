import { dbConnect } from "@/lib/dbConnect";

export async function GET(request) {
  const result = await dbConnect("bikeData").find().limit(8).toArray();
  return Response.json(result);
}

//single data for home page
