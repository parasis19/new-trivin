// src/components/Home.jsx
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Templates from "./Templates";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Templates />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
