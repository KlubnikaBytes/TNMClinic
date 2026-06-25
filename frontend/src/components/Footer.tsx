import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";
import clinicLogo from "../assets/icon.png";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 90;
      const y = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer style={{ backgroundColor: "#003366", color: "#e0e6ed" }}>
      {/* Main Footer */}
      <div className="container py-5">
        <div className="row gy-5 align-items-start">

          {/* Left Section: Brand & About */}
          <div className="col-lg-4 pe-lg-4">

            {/* Custom Image Logo */}
            <a
              href="#"
              className="text-decoration-none d-inline-block mb-4"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            >
              <img
                src={clinicLogo}
                alt="The Newtown Multispeciality Clinic"
                style={{ height: "70px", transition: "transform 0.3s ease" }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              />
            </a>

            <p style={{ fontSize: "0.95rem", lineHeight: "1.8", color: "#aab7c4", marginBottom: "25px" }}>
              Currently, The Newtown Multispeciality Clinic is a progressive medical facility in Newtown. Every day, more than 150 patients trust our skilled doctors with their healthcare needs.
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-3">
              {[FaFacebookF, FaTwitter, FaWhatsapp].map((Icon, idx) => (
                <div
                  key={idx}
                  className="d-flex align-items-center justify-content-center rounded-circle transition-hover"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    cursor: "pointer",
                    color: "#ffffff",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#b4d333";
                    e.currentTarget.style.color = "#003366";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.color = "#ffffff";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Center Section: Quick Links */}
          <div className="col-lg-2 offset-lg-1">
            <h4 style={{ color: "#ffffff", fontSize: "1.2rem", fontWeight: "700", marginBottom: "25px" }}>
              Quick Links
            </h4>
            <ul className="list-unstyled d-flex flex-column gap-3 mb-0" style={{ fontSize: "0.95rem" }}>
              {['Home', 'About', 'Services', 'Contact Us'].map((link, idx) => {
                const sectionId = link === 'Home' ? '' : link.toLowerCase().replace(' us', '');
                return (
                  <li key={idx}>
                    <a
                      href={link === 'Home' ? '#' : `#${sectionId}`}
                      className="text-decoration-none transition-hover"
                      style={{ color: "#aab7c4", transition: "color 0.2s ease" }}
                      onClick={(e) => {
                        e.preventDefault();
                        link === 'Home' ? window.scrollTo({ top: 0, behavior: "smooth" }) : scrollToSection(sectionId);
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "#b4d333"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "#aab7c4"}
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Section: Contact Info — all clickable */}
          <div className="col-lg-3">
            <h4 style={{ color: "#ffffff", fontSize: "1.2rem", fontWeight: "700", marginBottom: "25px" }}>
              Get In Touch
            </h4>

            <div className="d-flex flex-column gap-3" style={{ color: "#aab7c4", fontSize: "0.95rem" }}>
              {/* Email */}
              <div className="d-flex align-items-start gap-3">
                <FaEnvelope className="mt-1 flex-shrink-0" style={{ color: "#0072ce" }} />
                <a
                  href="mailto:thenmc2026@gmail.com"
                  className="text-decoration-none"
                  style={{ color: "#aab7c4", transition: "color 0.2s" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#b4d333"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#aab7c4"}
                >
                  thenmc2026@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="d-flex align-items-start gap-3">
                <FaPhoneAlt className="mt-1 flex-shrink-0" style={{ color: "#0072ce" }} />
                <a
                  href="tel:+918100650033"
                  className="text-decoration-none"
                  style={{ color: "#aab7c4", transition: "color 0.2s" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#b4d333"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#aab7c4"}
                >
                  +91 81006 50033
                </a>
              </div>

              {/* Address */}
              <div className="d-flex align-items-start gap-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" style={{ color: "#0072ce" }} />
                <span style={{ lineHeight: "1.6" }}>
                  CE 29, Street Number 247, CE Block(Newtown), Action Area I, Newtown, Kolkata, New Town, West Bengal 700156
                </span>
              </div>
            </div>
          </div>

          {/* Right Section: Map */}
          <div className="col-lg-2 text-lg-end mt-4 mt-lg-0">
            <div className="rounded-3 overflow-hidden shadow-sm" style={{ border: "2px solid rgba(255,255,255,0.1)" }}>
              <iframe
                title="Clinic Location Map"
                width="100%"
                height="180"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                src="https://maps.google.com/maps?q=CE%2029,%20CE%20Block,%20Action%20Area%20I,%20Newtown,%20Kolkata,%20West%20Bengal%20700156&t=&z=14&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div
        style={{
          backgroundColor: "#002244",
          color: "#8a9bac",
          textAlign: "center",
          padding: "20px 15px",
          fontSize: "0.9rem",
          fontWeight: "500"
        }}
      >
        © {new Date().getFullYear()} The Newtown Multispeciality Clinic. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;