import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import PostProcessingSection from "./components/PostProcessingSection";
import Services from "./components/Services";
import Marquee from "./components/Marquee";
import Innovation from "./components/Innovation";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden mobile-smooth-scroll">
      <NavBar />
      <Hero />
      <PostProcessingSection />
      <Services />
      <Marquee />
      <Innovation />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
