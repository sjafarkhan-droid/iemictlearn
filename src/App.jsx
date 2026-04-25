import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import NewsSection from "./components/NewsSection";
import CoursesSection from "./components/CoursesSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";

import "./styles/main.scss";

function App() {
  return (
    <div className="page-shell" dir="rtl">
      <Header />

      <main className="content-wrapper">
        <HeroBanner />

        <div className="dashboard-row">
          <NewsSection />
          <CoursesSection />
        </div>

        <FeaturesSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;