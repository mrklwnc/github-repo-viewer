import { NextResponse } from "next/server";
import courses from "../data.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title: any = searchParams.get("title"); // How to fetch parameters from the URL
  const filteredCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(title.toLowerCase());
  });

  return NextResponse.json(filteredCourses);
}
