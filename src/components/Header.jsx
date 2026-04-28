function Header() {
  return (
    <header className="header">
      <div className="header-actions">
        <button className="icon-btn">🔍</button>
        <button className="icon-btn">☀️</button>
        <button className="login-btn">ورود / ثبت‌نام</button>
      </div>

      <nav className="nav">
        <a className="active" href="#">خانه</a>
        <a href="#">اخبار</a>
        <a href="#">آموزش</a>
        <a href="#">دوره‌ها</a>
        <a href="#">درباره ما</a>
        <a href="#">تماس با ما</a>
      </nav>

      <div className="brand">
        <div className="brand-text">
          <strong>چشم هوشمند آموزش</strong>
        </div>

        <div className="brand-logo">
        <img src="/src/assets/brand-logo.png" alt="Logo" />
        </div>
      </div>
    </header>
  );
}

export default Header;