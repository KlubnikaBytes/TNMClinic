import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Doctors from "../components/Doctors";
import Features from "../components/Features";
// import Testimonials from "../components/Testimonials"; // temporarily hidden
import Contact from "../components/Contact";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      {/* Sticky Navigation */}
      <div className="sticky-top shadow-sm z-3">
        <TopBar />
        <Navbar />
      </div>

      {/* Main Content Flow */}
      <main>
        <Hero />
        <div id="about"><Intro /></div>
        <WhyChooseUs />
        <div id="services"><Services /></div>
        
        <div id="doctors"><Doctors /></div>
        <div id="features"><Features /></div>
        
        {/* Reviews section temporarily hidden - will be re-added later */}
        
        {/* Rendered the Contact component here */}
        <div id="contact"><Contact /></div> 
      </main>
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;