"use client";

import { useState } from "react";

const CourseSearch: any = ({ getSearchResults }: any) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch(`/api/courses/search?title=${query}`);

    const courses = await res.json();

    // Gets return to the parent page >> app/page.tsx
    getSearchResults(courses);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input text-black"
        placeholder="Search Courses..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default CourseSearch;
