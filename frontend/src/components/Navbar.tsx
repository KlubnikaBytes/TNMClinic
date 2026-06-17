import { FaArrowRight } from "react-icons/fa";
// 1. Import your custom logo from the assets folder
import clinicLogo from "../assets/icon.png";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 90;
      const y = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'doctors', label: 'Doctors' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <nav 
      className="navbar navbar-expand-lg sticky-top py-3 transition-all" 
      style={{ 
        backgroundColor: "rgba(255, 255, 255, 0.85)", 
        backdropFilter: "blur(12px)",                 
        WebkitBackdropFilter: "blur(12px)",           
        borderBottom: "1px solid rgba(255, 255, 255, 0.4)", 
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.05)"   
      }}
    >
      <div className="container">
        
        {/* 2. Custom Image Logo */}
        <a 
          className="navbar-brand d-flex align-items-center text-decoration-none" 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <img 
            src={clinicLogo} 
            alt="The Newtown Multispeciality Clinic" 
            style={{ 
              height: "90px", // perfectly sized for the navbar
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
                style={{ color: "#003366" }}
                href="#" 
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              >
                Home
              </a>
            </li>

            {navLinks.map((item) => (
              <li className="nav-item" key={item.id}>
                <a 
                  className="nav-link px-0 transition-hover" 
                  style={{ color: "#003366" }}
                  href={`#${item.id}`} 
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            
            {/* CTA Button */}
            <li className="nav-item ms-lg-4 mt-3 mt-lg-0 mb-2 mb-lg-0">
              <button 
                className="btn rounded-pill px-4 py-2 d-flex align-items-center gap-2 text-white border-0 shadow-sm" 
                style={{ 
                  backgroundColor: "#0072ce", 
                  fontWeight: "600", 
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap" 
                }} 
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#b4d333"; // Lime green hover
                  e.currentTarget.style.color = "#003366";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#0072ce";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                onClick={() => scrollToSection("contact")}
              >
                Book Appointment <FaArrowRight fontSize="14px" />
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;