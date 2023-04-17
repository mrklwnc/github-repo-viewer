// Route for Courses components
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import courses from "./data.json";

export async function GET(request: Request) {
  return NextResponse.json(courses);
}

interface Course {
  id: string;
  title: string;
  description: string;
  level: string;
  link: string;
}

export async function POST(request: Request) {
  // const course = await request.json();
  // courses.push(course);
  // return NextResponse.json(course);

  const { title, description, level, link } = await request.json();

  const newCourse: Course = {
    id: uuidv4(),
    title,
    description,
    level,
    link,
  };

  courses.push(newCourse);

  return NextResponse.json(courses);
}
