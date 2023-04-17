"use client";
import Link from "next/link";

interface Courses {
  id: string;
  title: string;
  description: string;
  link: string;
  level: string;
}

// * Server-side Rendering (SSR)
// async function fetchCourses() {
//   const res = await fetch(`http://localhost:3000/api/courses`);

//   const courses = res.json();
//   return courses;
// }

// * Named Export
// const Courses: any = async () => {
//   const courses: Courses[] = await fetchCourses();

//   return (
//     <div className="courses">
//       {courses.map((course: any) => (
//         <div key={course.id} className="card">
//           <h2>{course.title}</h2>
//           <small>Level: {course.level}</small>
//           <p>{course.description}</p>
//           <Link href={course.link} target="_blank" className="btn">
//             Go to Course
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Courses;

// *Default Export
// export default async function Courses() {
//   const courses: Courses[] = await fetchCourses();

//   return (
//     <div className="courses">
//       {courses.map((course: any) => (
//         <div key={course.id} className="card">
//           <h2>{course.title}</h2>
//           <small>Level: {course.level}</small>
//           <p>{course.description}</p>
//           <Link href={course.link} target="_blank" className="btn">
//             Go to Course
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// * Client-side Rendering (CSR)
const Courses = ({ courses }: any) => {
  return (
    <div className="courses">
      {courses.map((course: any) => (
        <div key={course.id} className="card">
          <h2>{course.title}</h2>
          <small>Level: {course.level}</small>
          <p>{course.description}</p>
          <Link href={course.link} target="_blank" className="btn">
            Go to Course
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
