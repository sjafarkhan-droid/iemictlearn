import heroImage from "../assets/hero-bg.jpg";

const HeroBanner = () => {
  return (
    <section
      className="hero-banner"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-text">
        <h1>یادگیری تکنولوژی</h1>
      </div>
    </section>
  );

};
<section className="hero-banner glass-hero"></section>

export default HeroBanner;