import React from "react";
import CourseCard from "./CourseCard";
import { coursesData } from "../data/courses";

const CoursesSection = () => {
  return (
    <section className="courses-section">
      <h2>محبوب‌ترین دوره‌های آموزشی</h2>
      <div className="courses-grid">
        {coursesData.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;