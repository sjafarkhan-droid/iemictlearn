import React from "react";
import NewsCard from "./NewsCard";
import { newsData } from "../data/news";

const NewsSection = () => {
  return (
    <section className="news-section">
      <h2>آخرین اخبار تکنولوژی</h2>
      <div className="news-grid">
        {newsData.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;