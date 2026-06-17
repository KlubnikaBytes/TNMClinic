import { FaArrowDown } from "react-icons/fa";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";

const Hero = () => {
  return (
    <section 
      className="position-relative d-flex align-items-center justify-content-center text-center text-white min-vh-100 overflow-hidden"
      style={{
        textRendering: "optimizeLegibility",
        WebkitFontSmoothing: "antialiased",
        backgroundColor: "#00121a" 
      }}
    >
      {/* 1. Animated Background Slideshow (Pure Crossfade, No Zoom) */}
      <div 
        className="position-absolute w-100 h-100 start-0 top-0 slideshow-layer image-1"
        style={{ 
          zIndex: 0,
          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
          // Anchors the image to the top so the clinic signboard is fully visible
          backgroundPosition: "center top", 
        }}
      ></div>
      
      <div 
        className="position-absolute w-100 h-100 start-0 top-0 slideshow-layer image-2"
        style={{ 
          zIndex: 0,
          backgroundImage: `url(${image2})`,
          backgroundSize: "cover",
          backgroundPosition: "center center", 
        }}
      ></div>

      {/* 2. Professional Vignette Overlay */}
      <div 
        className="position-absolute w-100 h-100 top-0 start-0" 
        style={{ 
          background: "linear-gradient(to bottom, rgba(0, 15, 30, 0.75) 0%, rgba(0, 15, 30, 0.35) 50%, rgba(0, 15, 30, 0.85) 100%)",
          zIndex: 1
        }}
      ></div>

      {/* 3. Main Content (z-index: 2) */}
      <div className="position-relative container px-4 py-5 z-2">
        <h1 
          className="display-3 fw-bold mb-4"
          style={{ 
            lineHeight: "1.2", 
            letterSpacing: "-1.5px",
            textShadow: "0px 4px 12px rgba(0,0,0,0.5)" 
          }}
        >
          A Better Life Starts with a<br className="d-none d-md-block"/> Beautiful Smile
        </h1>
        <p 
          className="lead mx-auto mb-5 text-white" 
          style={{ 
            maxWidth: "800px", 
            lineHeight: "1.8",
            letterSpacing: "0.2px",
            textShadow: "0px 2px 8px rgba(0,0,0,0.4)"
          }}
        >
          You Can Book An Appointment With The Doctor Of Your Choice By Clicking The Button Below.
        </p>
        
        {/* Professional Blue Button */}
        {/* Professional Blue Button */}
        <button 
          className="btn btn-lg text-white rounded-pill px-5 py-3 shadow-lg border-0 transition-hover" 
          style={{ 
            backgroundColor: "#0072ce", 
            fontWeight: "700",
            fontSize: "1.1rem",
            letterSpacing: "0.5px",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#b4d333"; 
            e.currentTarget.style.color = "#003366"; 
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(180, 211, 51, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#0072ce";
            e.currentTarget.style.color = "#ffffff";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.15)";
          }}
          onClick={() => {
            const section = document.getElementById('doctors');
            if (section) {
              const headerHeight = 90; // Adjust if your navbar height is different
              const y = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
        >
          View Our Specialists
        </button>
      </div>

      {/* 4. Decorative Bottom Curve (z-index: 2) */}
      <div 
        className="position-absolute bottom-0 start-0 w-100" 
        style={{ 
          height: "60px", 
          backgroundColor: "#ffffff", 
          borderTopLeftRadius: "50%", 
          borderTopRightRadius: "50%",
          boxShadow: "0 -5px 15px rgba(0,0,0,0.05)",
          zIndex: 2
        }}
      ></div>

      {/* Embedded CSS for Pure Crossfade Animation (No Zooming) */}
      <style>{`
        .slideshow-layer {
          opacity: 0;
          animation: pureCrossfade 16s infinite ease-in-out; 
        }

        .slideshow-layer.image-1 {
          animation-delay: 0s;
        }

        .slideshow-layer.image-2 {
          animation-delay: 8s;
        }

        @keyframes pureCrossfade {
          0% {
            opacity: 1;
          }
          35% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;