import heroImage from "../assets/hero-bg.jpg";

function HeroBanner() {
  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-text">
        <h1>
          یادگیری هوشمند
          <br />
          <span>آینده تو</span>
        </h1>

        <h3>
          آموزش برنامه‌نویسی، شبکه، امنیت، فیبر نوری و دوربین‌های مداربسته
          با دوره‌های پروژه‌محور و اخبار به‌روز تکنولوژی
        </h3>

        <div className="hero-buttons">
          <button className="btn-primary">شروع یادگیری</button>
          <button className="btn-secondary">مشاهده دوره‌ها</button>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;