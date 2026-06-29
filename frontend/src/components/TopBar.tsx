import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="d-none d-lg-flex justify-content-between align-items-center px-5 py-2 text-white" style={{ backgroundColor: "#0f172a", fontSize: "14px" }}>
      <div className="d-flex align-items-center gap-4">
        <a
          href="tel:+918100650033"
          className="d-flex align-items-center gap-2 text-white text-decoration-none"
          style={{ transition: "opacity 0.2s" }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = "0.8"}
          onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
        >
          <FaPhoneAlt /> +91 81006 50033
        </a>
        <a
          href="mailto:thenmc2026@gmail.com"
          className="d-flex align-items-center gap-2 text-white text-decoration-none"
          style={{ transition: "opacity 0.2s" }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = "0.8"}
          onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
        >
          <FaEnvelope /> thenmc2026@gmail.com
        </a>
        <span className="d-flex align-items-center gap-2">
          <FaMapMarkerAlt /> CE 20 &amp; CE 36, Street No 247, Newtown, Action Area 1, Kolkata, West Bengal 700156
        </span>
      </div>
      <div className="d-flex align-items-center gap-3">
        <FaTwitter className="cursor-pointer hover-opacity" />
        <FaLinkedinIn className="cursor-pointer hover-opacity" />
        <FaFacebookF className="cursor-pointer hover-opacity" />
      </div>
    </div>
  );
};

export default TopBar;