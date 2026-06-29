import { useState, useEffect } from "react";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import clinicLogo from "../assets/icon.png";

const ROW1 = [
  "Doctor Consultation",
  "Pharmacy",
  "Pathology",
  "ECG (Advanced 12 Channel)",
  "Advanced Physiotherapy",
  "X-Ray (Advanced DR System)",
];
const ROW2 = [
  "USG (Advanced AI System)",
  "Colour Doppler Test",
  "Pulmonary Function Test (Spirometry)",
  "NCV, EMG Test",
  "Echocardiography",
  "Holter Monitor",
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // Hysteresis: collapse at 120px, auto-reopen only when back below 40px
      // This prevents oscillation when the strip itself causes page height to change
      if (y > 120) {
        setScrolled(true);
      } else if (y < 40) {
        setScrolled(false);
        setServicesOpen(false);
      }
      // Between 40–120px: keep current state, no change
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "doctors", label: "Doctors" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <>
      {/* ─── Main Navbar ─── */}
      <nav
        className="navbar navbar-expand-lg py-3"
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.03)",
        }}
      >
        <div className="container">
          {/* Logo */}
          <a
            className="navbar-brand d-flex align-items-center text-decoration-none"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src={clinicLogo}
              alt="The Newtown Multispeciality Clinic"
              style={{ height: "90px", transition: "transform 0.3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </a>

          {/* Toggler */}
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-center gap-3 gap-lg-4 fw-semibold mt-3 mt-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link px-0"
                  style={{ color: "#003366", cursor: "pointer" }}
                  onClick={(e) => {
                    e.preventDefault();
                    if (location.pathname !== "/") navigate("/");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Home
                </a>
              </li>

              {navLinks.map((item) => (
                <li className="nav-item" key={item.id}>
                  <a
                    className="nav-link px-0"
                    style={{ color: "#003366", cursor: "pointer" }}
                    onClick={(e) => handleNavClick(e, item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              <li className="nav-item">
                <a
                  className="nav-link px-0"
                  style={{ color: "#003366", cursor: "pointer" }}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/gallery");
                  }}
                >
                  Gallery
                </a>
              </li>

              {/* Book Appointment CTA */}
              <li className="nav-item ms-lg-4 mt-3 mt-lg-0 mb-2 mb-lg-0">
                <button
                  className="btn rounded-pill px-4 py-2 d-flex align-items-center gap-2 text-white border-0 shadow-sm"
                  style={{
                    background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                    fontWeight: "700",
                    transition: "all 0.3s ease",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(16,185,129,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";
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

      {/* ─── Services Strip ─── */}
      <div
        style={{
          backgroundColor: "#003366",
          borderBottom: "2px solid #0072ce",
          overflow: "hidden",
          maxHeight: scrolled && !servicesOpen ? "0px" : "120px",
          transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* "OUR SERVICES" label — only show when NOT scrolled (at top of page) */}
        {!scrolled && (
          <div style={{ textAlign: "center", padding: "6px 0 2px" }}>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#0072ce",
                color: "#ffffff",
                fontWeight: "800",
                fontSize: "0.78rem",
                letterSpacing: "2px",
                padding: "3px 18px",
                borderRadius: "0 0 8px 8px",
                textTransform: "uppercase",
              }}
            >
              OUR SERVICES
            </span>
          </div>
        )}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            padding: "5px 16px 2px",
          }}
        >
          {ROW1.map((service, i, arr) => (
            <span
              key={i}
              style={{
                color: "#ffffff",
                fontSize: "0.8rem",
                fontWeight: "600",
                letterSpacing: "0.3px",
                padding: "2px 14px",
                borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.25)" : "none",
                whiteSpace: "nowrap",
              }}
            >
              ➤ {service}
            </span>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            padding: "2px 16px 7px",
          }}
        >
          {ROW2.map((service, i, arr) => (
            <span
              key={i}
              style={{
                color: "#ffffff",
                fontSize: "0.8rem",
                fontWeight: "600",
                letterSpacing: "0.3px",
                padding: "2px 14px",
                borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.25)" : "none",
                whiteSpace: "nowrap",
              }}
            >
              ➤ {service}
            </span>
          ))}
        </div>
      </div>

      {/* ─── Full-width toggle button — only visible when scrolled ─── */}
      {scrolled && (
        <button
          onClick={() => setServicesOpen((o) => !o)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            width: "100%",
            padding: "8px 0",
            backgroundColor: "#0072ce",
            border: "none",
            borderBottom: "2px solid #005bb5",
            color: "#ffffff",
            fontWeight: "700",
            fontSize: "0.82rem",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "background-color 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#005bb5")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0072ce")}
        >
          {servicesOpen ? "▲  Close Services" : "▼  Our Services"}
        </button>
      )}
    </>
  );
};

export default Navbar;