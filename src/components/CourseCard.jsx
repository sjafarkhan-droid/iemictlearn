import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <img src={course.icon} alt={course.title} />
      <div className="course-content">
        <span className="category">{course.category}</span>
        <h3>{course.title}</h3>
        <div className="rating">
          <span>⭐ {course.rating}</span>
          <span>({course.students} دانشجو)</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;