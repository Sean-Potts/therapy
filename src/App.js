import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Narbar/Nav";
import Hero from "./Pages/Hero/Hero";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Experience from "./Pages/Experience/Experience";
import Papers from "./Pages/Papers/Papers";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Papers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
