import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <div className="h-[97dvh] w-full">
        <Navbar />
        <Hero />
      </div>

      <div className="h-[97dvh] w-full bg-amber-100">
        <About />
      </div>

      <div className="h-[97dvh] w-full bg-amber-100">
        <Projects />
      </div>
      <Contact />
    </div>
  );
}

export default App;
