import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 space-y-24">
        <About />
        <Services />
        <Showcase />
        <Testimonials />
        <Contact />
        {/* <Footer /> */}
      </div>
    </>
  );
}
