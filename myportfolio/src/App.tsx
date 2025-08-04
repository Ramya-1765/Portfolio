import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-black text-white scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <footer className="text-center text-sm text-gray-500 py-4 bg-black">
        © {new Date().getFullYear()} S Ramyabharathi. Built with 💙 using React
        + Tailwind.
      </footer>
      ;
    </div>
  );
}

export default App;
