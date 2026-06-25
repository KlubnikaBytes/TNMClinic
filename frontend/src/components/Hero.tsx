import { FaUserMd, FaVial, FaHospital, FaPills, FaXRay } from "react-icons/fa";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
// 1. Import the PDF file so Vite bundles it correctly
import doctorListPDF from "../assets/Doctor list.pdf";

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
          Complete Healthcare<br className="d-none d-md-block" /> Under One Roof
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
          Quality Healthcare, Close to Home
        </p>

        {/* Dual Call-To-Action Buttons */}
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-2">

          {/* Doctors List Download Button */}
          <a
            href={doctorListPDF}
            download="The_Newtown_Clinic_Doctor_List.pdf"
            className="btn btn-lg text-white rounded-pill px-5 py-3 shadow-lg border-0 transition-hover text-decoration-none"
            style={{
              backgroundColor: "#0072ce",
              fontWeight: "700",
              fontSize: "1.1rem",
              letterSpacing: "0.5px",
              transition: "all 0.3s ease",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center"
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
          >
            <FaUserMd className="me-2" fontSize="1.2rem" />
            Download Doctors List
          </a>

          {/* Blood Test List Button */}
          <button
            className="btn btn-lg rounded-pill px-5 py-3 shadow-lg border-0 transition-hover"
            style={{
              backgroundColor: "#b4d333",
              color: "#003366",
              fontWeight: "700",
              fontSize: "1.1rem",
              letterSpacing: "0.5px",
              transition: "all 0.3s ease",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.color = "#0072ce";
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(255, 255, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#b4d333";
              e.currentTarget.style.color = "#003366";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.15)";
            }}
            onClick={() => {
              const section = document.getElementById('services');
              if (section) {
                const headerHeight = 90;
                const y = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          >
            <FaVial className="me-2" fontSize="1.1rem" />
            Blood Test List
          </button>

        </div>

        {/* Service Highlight Cards */}
        <div className="row g-3 justify-content-center mt-5" style={{ maxWidth: "900px", margin: "0 auto", marginTop: "3rem" }}>

          {/* Clinic Facility */}
          <div className="col-12 col-md-4">
            <div
              className="d-flex align-items-center gap-3 rounded-4 px-4 py-3 text-white text-start"
              style={{
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.25)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,114,206,0.45)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                style={{ width: "52px", height: "52px", backgroundColor: "rgba(0,114,206,0.6)", color: "#ffffff" }}
              >
                <FaHospital size={24} />
              </div>
              <div>
                <div className="fw-bold" style={{ fontSize: "1.05rem", letterSpacing: "0.3px" }}>Clinic Facility</div>
                <div style={{ fontSize: "0.82rem", opacity: 0.8, lineHeight: "1.4" }}>Modern, fully-equipped OPD</div>
              </div>
            </div>
          </div>

          {/* Pharmacy */}
          <div className="col-12 col-md-4">
            <div
              className="d-flex align-items-center gap-3 rounded-4 px-4 py-3 text-white text-start"
              style={{
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.25)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(180,211,51,0.45)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                style={{ width: "52px", height: "52px", backgroundColor: "rgba(180,211,51,0.6)", color: "#003366" }}
              >
                <FaPills size={24} />
              </div>
              <div>
                <div className="fw-bold" style={{ fontSize: "1.05rem", letterSpacing: "0.3px" }}>Pharmacy</div>
                <div style={{ fontSize: "0.82rem", opacity: 0.8, lineHeight: "1.4" }}>On-site medicines &amp; prescriptions</div>
              </div>
            </div>
          </div>

          {/* Radiology — replaces Homecare */}
          <div className="col-12 col-md-4">
            <div
              className="d-flex align-items-center gap-3 rounded-4 px-4 py-3 text-white text-start"
              style={{
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.25)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,114,206,0.45)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                style={{ width: "52px", height: "52px", backgroundColor: "rgba(0,114,206,0.6)", color: "#ffffff" }}
              >
                <FaXRay size={24} />
              </div>
              <div>
                <div className="fw-bold" style={{ fontSize: "1.05rem", letterSpacing: "0.3px" }}>Radiology</div>
                <div style={{ fontSize: "0.82rem", opacity: 0.8, lineHeight: "1.4" }}>X-Ray · USG · Echo · ECG</div>
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* Embedded CSS for Pure Crossfade Animation */}
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
          0%   { opacity: 1; }
          35%  { opacity: 1; }
          50%  { opacity: 0; }
          100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;