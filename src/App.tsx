import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <nav className="justify-center">
        <Navbar />
      </nav>

      <div className="h-[97dvh] w-full">
        
        <Hero />
      </div>

      <div className="h-[97dvh] w-full ">
        <About />
      </div>

      <div className="h-[97dvh] w-full ">
        <Projects />
      </div>

      <Contact />
    </div>
  );
}

export default App;
