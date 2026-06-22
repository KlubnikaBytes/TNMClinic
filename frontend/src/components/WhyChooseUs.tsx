import { FaUserMd, FaClock, FaHome, FaHeartbeat } from "react-icons/fa";

const reasons = [
  {
    icon: <FaClock size={32} />,
    title: "In-House Doctors During Clinic Hours",
    desc: "Our dedicated in-house doctors are present throughout all clinic hours to ensure you receive prompt, personalised attention — no waiting for referrals.",
    accent: "#0072ce",
    bgAccent: "rgba(0, 114, 206, 0.08)",
    tag: "Always Present",
  },
  {
    icon: <FaUserMd size={32} />,
    title: "Specialist Doctors — Everyday, Round the Clock",
    desc: "General Medicine · Paediatrics · Orthopaedics · Gynaecology · General Surgery — every speciality, available every day.",
    accent: "#b4d333",
    bgAccent: "rgba(180, 211, 51, 0.12)",
    tag: "All Specialities",
  },
  {
    icon: <FaHome size={32} />,
    title: "Doctor Home Visit Services",
    desc: "Quality healthcare at your doorstep. Our doctors visit patients at home for those who need medical attention without stepping out.",
    accent: "#0072ce",
    bgAccent: "rgba(0, 114, 206, 0.08)",
    tag: "At Your Doorstep",
  },
  {
    icon: <FaHeartbeat size={32} />,
    title: "Professional Home Care Services",
    desc: "Experienced nurses and paramedics providing home nursing care under the direct supervision of specialist doctors — bringing the clinic to you.",
    accent: "#b4d333",
    bgAccent: "rgba(180, 211, 51, 0.12)",
    tag: "Expert-Led Care",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="py-5"
      style={{ backgroundColor: "#f4f7f9" }}
    >
      <div className="container py-lg-4">

        {/* Header */}
        <div className="text-center mb-5">
          <span
            className="badge rounded-pill bg-white text-primary border border-primary px-3 py-2 mb-3 shadow-sm"
            style={{ letterSpacing: "1px", fontSize: "0.8rem" }}
          >
            OUR ADVANTAGE
          </span>
          <h2
            className="display-5 fw-bold mb-3"
            style={{ color: "#003366", letterSpacing: "-1px" }}
          >
            Why Choose Us?
          </h2>
          <p
            className="text-muted fs-5 mx-auto"
            style={{ maxWidth: "640px", lineHeight: "1.7" }}
          >
            We go beyond a regular clinic — delivering specialist care, round-the-clock availability, and services that come to you.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="row g-4">
          {reasons.map((item, idx) => (
            <div className="col-md-6" key={idx}>
              <div
                className="h-100 rounded-4 p-4 p-md-5 position-relative overflow-hidden"
                style={{
                  background: "#ffffff",
                  boxShadow: "0 6px 30px rgba(0,0,0,0.05)",
                  borderLeft: `5px solid ${item.accent}`,
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = `0 16px 40px rgba(0,0,0,0.1)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 6px 30px rgba(0,0,0,0.05)";
                }}
              >
                {/* Decorative background circle */}
                <div
                  className="position-absolute"
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    backgroundColor: item.bgAccent,
                    top: "-30px",
                    right: "-30px",
                    zIndex: 0,
                  }}
                />

                <div className="position-relative" style={{ zIndex: 1 }}>
                  {/* Icon + Tag row */}
                  <div className="d-flex align-items-start justify-content-between mb-4">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-3"
                      style={{
                        width: "64px",
                        height: "64px",
                        backgroundColor: item.bgAccent,
                        color: item.accent,
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <span
                      className="badge rounded-pill fw-semibold px-3 py-2"
                      style={{
                        backgroundColor: item.bgAccent,
                        color: item.accent === "#b4d333" ? "#5a6e00" : item.accent,
                        fontSize: "0.78rem",
                        letterSpacing: "0.5px",
                      }}
                    >
                      ✓ {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h4
                    className="fw-bold mb-3"
                    style={{ color: "#003366", fontSize: "1.2rem", lineHeight: "1.4" }}
                  >
                    {item.title}
                  </h4>

                  {/* Desc */}
                  <p
                    className="text-muted mb-0"
                    style={{ lineHeight: "1.8", fontSize: "0.97rem" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
