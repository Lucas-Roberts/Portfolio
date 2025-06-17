import { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  useEffect(() => {

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div>
      <nav className="justify-center">
        <Navbar />
      </nav>

      <section id="Home" className="h-[97dvh] w-full">
        <Hero />
      </section>

      <section id="About" className="h-[97dvh] w-full">
        <About />
      </section>

      <section id="Projects" className="h-[97dvh] w-full">
        <Projects />
      </section>

      <footer id="Contact">
        <Contact />
      </footer>
    </div>
  );
}

export default App;
