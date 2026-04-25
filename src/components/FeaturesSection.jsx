import React from "react";

const features = [
  { id: 1, title: "پشتیبانی تخصصی", desc: "همراه شما در مسیر یادگیری", icon: "🎧" },
  { id: 2, title: "آپدیت دائمی", desc: "مطابق با آخرین تکنولوژی‌ها", icon: "🔄" },
  { id: 3, title: "پروژه محور", desc: "با متدهای واقعی و عملی", icon: "💻" },
  { id: 4, title: "آموزش‌های کاربردی", desc: "از صفر تا تبدیل به متخصص", icon: "📚" },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-grid">
        {features.map((f) => (
          <div key={f.id} className="feature-card">
            <span className="icon">{f.icon}</span>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;