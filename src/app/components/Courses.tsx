import Link from "next/link";

interface Courses {
  id: number;
  title: string;
  description: string;
  link: string;
  level: string;
}

async function fetchCourses() {
  const res = await fetch(`http://localhost:3000/api/courses`);

  const courses = res.json();
  return courses;
}
const Courses = async () => {
  const courses: Courses[] = await fetchCourses();

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
