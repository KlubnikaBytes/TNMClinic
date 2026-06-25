import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaMap, FaPaperPlane, FaWhatsapp, FaRegClock } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="position-relative py-5" style={{ backgroundColor: "#f8f9fa" }}>

      {/* ── Floating Action Buttons: WhatsApp + Call ── */}
      <div
        className="position-fixed d-flex flex-column gap-3"
        style={{ bottom: "30px", right: "30px", zIndex: 1000 }}
      >
        {/* Call Button */}
        <a
          href="tel:+918100650033"
          className="d-flex align-items-center justify-content-center rounded-circle shadow-lg"
          title="Call Us"
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: "#0072ce",
            color: "#ffffff",
            textDecoration: "none",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,114,206,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "";
          }}
        >
          <FaPhoneAlt size={26} />
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918100650033"
          target="_blank"
          rel="noreferrer"
          className="d-flex align-items-center justify-content-center rounded-circle shadow-lg"
          title="WhatsApp Us"
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: "#25D366",
            color: "#ffffff",
            textDecoration: "none",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(37,211,102,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "";
          }}
        >
          <FaWhatsapp size={32} />
        </a>
      </div>

      <div className="container py-lg-4">

        {/* Header Section */}
        <div className="text-center mb-5">
          <span className="premium-subtitle">Contact Info</span>
          <h2 className="display-5 premium-title mb-3">
            How to Find Us
          </h2>
          <p className="text-muted fs-5 mx-auto mb-4" style={{ maxWidth: "600px", lineHeight: "1.6" }}>
            Fill up the form and ask your queries. Our team will get back to you promptly.
          </p>
          <a
            href="https://maps.google.com/maps?q=CE%2029,%20CE%20Block,%20Action%20Area%20I,%20Newtown,%20Kolkata,%20West%20Bengal%20700156"
            target="_blank"
            rel="noreferrer"
            className="btn text-white rounded-pill px-4 py-2 shadow-sm border-0 d-inline-flex align-items-center"
            style={{ backgroundColor: "#0072ce", fontWeight: "600", transition: "all 0.3s ease" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#b4d333";
              e.currentTarget.style.color = "#003366";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#0072ce";
              e.currentTarget.style.color = "#ffffff";
            }}
          >
            <FaMap className="me-2" /> View On Google Map
          </a>
        </div>

        {/* Main Contact Card */}
        <div className="card shadow-lg border-0 rounded-4 overflow-hidden bg-white">

          {/* Top Info Bar */}
          <div className="row g-0 text-white" style={{ backgroundColor: "#0072ce" }}>

            {/* Address */}
            <div className="col-sm-6 col-lg-3 p-4 d-flex align-items-start gap-3 border-end border-light border-opacity-25">
              <div className="mt-1 flex-shrink-0"><FaMapMarkerAlt size={22} /></div>
              <div>
                <h6 className="fw-bold mb-2">Address</h6>
                <p className="mb-0 opacity-75" style={{ fontSize: "0.85rem", lineHeight: "1.6" }}>
                  CE 29, Street Number 247,<br />CE Block(Newtown), Action Area I,<br />Newtown, Kolkata,<br />New Town, West Bengal 700156
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="col-sm-6 col-lg-3 p-4 d-flex align-items-start gap-3 border-end border-light border-opacity-25">
              <div className="mt-1 flex-shrink-0"><FaRegClock size={22} /></div>
              <div>
                <h6 className="fw-bold mb-2">Hours</h6>
                <p className="mb-0 opacity-75" style={{ fontSize: "0.85rem", lineHeight: "1.6" }}>
                  Open Daily<br />7 AM – 10 PM
                </p>
              </div>
            </div>

            {/* Phone — clickable */}
            <div className="col-sm-6 col-lg-3 p-4 d-flex align-items-start gap-3 border-end border-light border-opacity-25">
              <div className="mt-1 flex-shrink-0"><FaPhoneAlt size={20} /></div>
              <div>
                <h6 className="fw-bold mb-2">Phone</h6>
                <a
                  href="tel:+918100650033"
                  className="d-block text-white text-decoration-none"
                  style={{ fontSize: "0.85rem", lineHeight: "1.6", opacity: 0.85, transition: "opacity 0.2s" }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = "0.85"}
                >
                  +91 81006 50033
                </a>
              </div>
            </div>

            {/* Email — clickable */}
            <div className="col-sm-6 col-lg-3 p-4 d-flex align-items-start gap-3">
              <div className="mt-1 flex-shrink-0"><FaEnvelope size={20} /></div>
              <div>
                <h6 className="fw-bold mb-2">Email</h6>
                <a
                  href="mailto:thenmc2026@gmail.com"
                  className="d-block text-white text-decoration-none"
                  style={{ fontSize: "0.85rem", lineHeight: "1.6", opacity: 0.85, wordBreak: "break-all", transition: "opacity 0.2s" }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = "0.85"}
                >
                  thenmc2026@gmail.com
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Split Section: Form & Map */}
          <div className="row g-0">

            {/* Left: Form */}
            <div className="col-lg-6 p-4 p-md-5">
              <h4 className="fw-bold mb-4" style={{ color: "#003366" }}>Book Your Appointment</h4>

              <form>
                <div className="mb-3">
                  <label className="form-label text-muted fw-semibold" style={{ fontSize: "0.9rem" }}>Name</label>
                  <input type="text" className="form-control px-3 py-2 bg-light border-0 shadow-none" placeholder="Your full name" style={{ borderRadius: "8px" }} />
                </div>

                <div className="mb-3">
                  <label className="form-label text-muted fw-semibold" style={{ fontSize: "0.9rem" }}>Contact Number</label>
                  <input type="tel" className="form-control px-3 py-2 bg-light border-0 shadow-none" placeholder="+91 XXXXX XXXXX" style={{ borderRadius: "8px" }} />
                </div>

                <div className="mb-3">
                  <label className="form-label text-muted fw-semibold" style={{ fontSize: "0.9rem" }}>Email</label>
                  <input type="email" className="form-control px-3 py-2 bg-light border-0 shadow-none" placeholder="yourname@email.com" style={{ borderRadius: "8px" }} />
                </div>

                <div className="mb-4">
                  <label className="form-label text-muted fw-semibold" style={{ fontSize: "0.9rem" }}>Message</label>
                  <textarea className="form-control px-3 py-2 bg-light border-0 shadow-none" rows={4} placeholder="How can we help you?" style={{ borderRadius: "8px", resize: "none" }}></textarea>
                </div>

                <button
                  type="submit"
                  className="btn w-100 text-white py-3 border-0 d-flex justify-content-center align-items-center gap-2 transition-hover"
                  style={{ backgroundColor: "#0072ce", borderRadius: "8px", fontWeight: "600", fontSize: "1.05rem" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#b4d333";
                    e.currentTarget.style.color = "#003366";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#0072ce";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                >
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            </div>

            {/* Right: Real Google Map Embed */}
            <div className="col-lg-6" style={{ minHeight: "400px" }}>
              <iframe
                title="Clinic Location"
                src="https://maps.google.com/maps?q=CE%2029,%20CE%20Block,%20Action%20Area%20I,%20Newtown,%20Kolkata,%20West%20Bengal%20700156&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;