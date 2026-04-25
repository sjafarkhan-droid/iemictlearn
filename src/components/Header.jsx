function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <button className="search-btn">⌕</button>
        <button className="theme-btn">☼</button>
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
        <div>
          <h1>چشم هوشمند آموزش</h1>
          <span>iemictlearn</span>
        </div>

        <div className="brand-eye">
          👁️
        </div>
      </div>
    </header>
  );
}

export default Header;