import { FaArrowRight } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import clinicLogo from "../assets/icon.png";

// Scrolling ticker — test names only
const tickerTests = [
  "Blood Tests",
  "Pathology",
  "Digital X-Ray",
  "Echocardiogram (Echo)",
  "ECG",
  "USG (Ultrasound)",
  "Colour Doppler",
  "Holter Monitor",
  "EEG",
  "EMG & NCV",
  "Uroflowmetry",
  "Doctor Consultation",
  "Hormone Tests",
  "Vitamin & Mineral Panels",
  "Pulmonary Function Test",
  "Bone Density Scan",
  "Culture & Sensitivity",
  "HbA1c",
  "Lipid Profile",
  "Liver Function Test",
  "Kidney Function Test",
  "Thyroid Profile",
  "CBC (Complete Blood Count)",
  "Urine Analysis",
  "Stool Examination",
  "Blood Sugar (Fasting / PP)",
  "Serum Electrolytes",
  "Calcium & Vitamin D",
  "Iron Studies",
  "Cardiac Enzymes",
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const y = section.getBoundingClientRect().top + window.pageYOffset - 90;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        const y = section.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'doctors', label: 'Doctors' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const tickerContent = [...tickerTests, ...tickerTests]; // duplicate for seamless loop

  return (
    <>
      <nav
        className="navbar navbar-expand-lg py-3 transition-all"
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.03)"
        }}
      >
        <div className="container">

          {/* Custom Image Logo */}
          <a
            className="navbar-brand d-flex align-items-center text-decoration-none"
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <img
              src={clinicLogo}
              alt="The Newtown Multispeciality Clinic"
              style={{
                height: "90px",
                transition: "transform 0.3s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            />
          </a>

          {/* Toggler for Mobile */}
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-center gap-3 gap-lg-4 fw-semibold mt-3 mt-lg-0">

              <li className="nav-item">
                <a
                  className="nav-link px-0 transition-hover"
                  style={{ color: "#003366", cursor: "pointer" }}
                  onClick={(e) => { 
                    e.preventDefault(); 
                    if (location.pathname !== "/") {
                      navigate("/");
                    }
                    window.scrollTo({ top: 0, behavior: "smooth" }); 
                  }}
                >
                  Home
                </a>
              </li>

              {navLinks.map((item) => (
                <li className="nav-item" key={item.id}>
                  <a
                    className="nav-link px-0 transition-hover"
                    style={{ color: "#003366", cursor: "pointer" }}
                    onClick={(e) => handleNavClick(e, item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              <li className="nav-item">
                <a
                  className="nav-link px-0 transition-hover"
                  style={{ color: "#003366", cursor: "pointer" }}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/gallery");
                  }}
                >
                  Gallery
                </a>
              </li>

              {/* CTA Button */}
              <li className="nav-item ms-lg-4 mt-3 mt-lg-0 mb-2 mb-lg-0">
                <button
                  className="btn rounded-pill px-4 py-2 d-flex align-items-center gap-2 text-white border-0 shadow-sm"
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                    fontWeight: "700",
                    transition: "all 0.3s ease",
                    whiteSpace: "nowrap"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(16, 185, 129, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.05)";
                  }}
                  onClick={(e) => handleNavClick(e, "contact")}
                >
                  Book Appointment <FaArrowRight size={14} />
                </button>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* ── Scrolling Test Ticker Strip ── */}
      <div
        style={{
          backgroundColor: "#003366",
          overflow: "hidden",
          borderBottom: "2px solid #0072ce",
          position: "relative",
        }}
      >
        {/* Fade edges */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: "80px", zIndex: 2,
          background: "linear-gradient(to right, #003366, transparent)",
          pointerEvents: "none"
        }} />
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: "80px", zIndex: 2,
          background: "linear-gradient(to left, #003366, transparent)",
          pointerEvents: "none"
        }} />

        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "tickerScroll 45s linear infinite",
            padding: "8px 0",
          }}
        >
          {tickerContent.map((test, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                whiteSpace: "nowrap",
                color: "#ffffff",
                fontSize: "0.82rem",
                fontWeight: "600",
                letterSpacing: "0.4px",
                padding: "0 24px",
              }}
            >
              {test}
              <span style={{ color: "#b4d333", marginLeft: "24px", fontSize: "0.7rem" }}>✦</span>
            </span>
          ))}
        </div>

        <style>{`
          @keyframes tickerScroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </>
  );
};

export default Navbar;