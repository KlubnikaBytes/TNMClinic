import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Doctors from "../components/Doctors";
// import Features from "../components/Features"; // "WHAT WE OFFER" section — temporarily hidden, re-enable when needed
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

        {/* About */}
        <div id="about"><Intro /></div>

        {/* Doctors — directly below About */}
        <div id="doctors"><Doctors /></div>

        {/* Services */}
        <div id="services"><Services /></div>

        {/* "WHAT WE OFFER / Complete Healthcare Under One Roof" — commented out, re-add when needed */}
        {/* <div id="features"><Features /></div> */}

        {/* Why Choose Us — just above Contact/Find Us */}
        <WhyChooseUs />

        {/* Reviews section temporarily hidden - will be re-added later */}

        {/* Contact / Find Us */}
        <div id="contact"><Contact /></div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;