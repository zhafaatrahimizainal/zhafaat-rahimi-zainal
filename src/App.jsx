import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { AdminProvider } from "./context/AdminContext";
import { ResumeProvider } from "./context/ResumeContext";
import { SiteProvider } from "./context/SiteContext";

function App() {
  return (
    <SiteProvider>
      <AdminProvider>
        <ResumeProvider>
          <div className="hero-wrapper">
            <Navbar />
            <section id="home">
              <Home />
            </section>
          </div>
          <section id="about" className="page">
            <About />
          </section>
          <section id="portfolio" className="page">
            <Portfolio />
          </section>
          <section id="contact" className="page">
            <Contact />
          </section>
          <Footer />
        </ResumeProvider>
      </AdminProvider>
    </SiteProvider>
  );
}

export default App;
