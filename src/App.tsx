import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Contact />

    </>
  );
}

export default App;
