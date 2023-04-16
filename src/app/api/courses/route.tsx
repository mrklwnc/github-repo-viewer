// Route for Courses components
import { NextResponse } from "next/server";
import courses from "./data.json";

export async function GET(request: Request) {
  return NextResponse.json(courses);
}

// Do the post request here, 1:06:00 timestamp
