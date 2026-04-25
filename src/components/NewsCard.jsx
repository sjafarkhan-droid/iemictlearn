import React from "react";

const NewsCard = ({ news }) => {
  return (
    <div className="news-card">
      <img src={news.image} alt={news.title} />
      <div className="news-content">
        <span className="category">{news.category}</span>
        <h3>{news.title}</h3>
        <span className="date">{news.date}</span>
      </div>
    </div>
  );
};

export default NewsCard;