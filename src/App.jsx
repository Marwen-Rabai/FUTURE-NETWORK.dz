import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Services from "./components/Services";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <Services />
      <Marquee />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
