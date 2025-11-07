import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import GlobalEffects from "./components/GlobalEffects";
import { StarsCanvas } from "./components/canvas";
import HireMe from "./components/HireMe";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="relative z-0 bg-primary transition-colors duration-300">
          <GlobalEffects />
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Certifications />
          <div className="relative z-0">
            <Contact />
            {/* <StarsCanvas /> */}
          </div>
          <HireMe />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
