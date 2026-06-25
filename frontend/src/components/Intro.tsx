import imgAranyak from "../assets/doctor image/Dr. Aranyak Sarkar.jpeg";
import imgAswini  from "../assets/doctor image/Dr. Aswini Rana.jpg";
import imgPartha  from "../assets/doctor image/Dr. Partha Chakraborty.webp";

const doctorMessages = [
  {
    name: "Dr. Aranyak Sarkar",
    degree: "MBBS, MS (Ortho), Fellowship in Arthroscopy",
    speciality: "Orthopaedics",
    image: imgAranyak,
    accent: "#0072ce",
    message:
      "At TNMC, our goal is to restore mobility and eliminate pain so every patient can live life to the fullest. We combine the latest orthopaedic techniques with compassionate care to ensure the best outcome for each individual.",
  },
  {
    name: "Dr. Aswini Rana",
    degree: "MBBS (Cal), MD (Medicine), IPGMER, CCEBDM (Delhi)",
    speciality: "General Medicine & Diabetology",
    image: imgAswini,
    accent: "#b4d333",
    message:
      "Managing chronic conditions like diabetes requires a trusted partner. I believe in educating patients, empowering them with the knowledge to take control of their health, and providing evidence-based care every step of the way.",
  },
  {
    name: "Dr. Partha Chakraborty",
    degree: "MBBS (Cal), DCH (Cal), MRCPCH (UK), PGPN (Boston, USA)",
    speciality: "Paediatrics — Child Specialist",
    image: imgPartha,
    accent: "#0072ce",
    message:
      "Children deserve specialised, gentle care. Our paediatric team at TNMC is dedicated to nurturing the health of every child with the most current global standards — because a healthy child is a healthy future.",
  },
];

const Intro = () => {
  return (
    <section id="about" className="py-5" style={{ backgroundColor: "#ffffff" }}>
      <div className="container py-lg-5">

        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="premium-subtitle">
            About Us
          </span>
          <h2 className="display-5 premium-title mb-3">
            Welcome to The Newtown Multispeciality Clinic
          </h2>
          <p
            className="text-muted fs-5 mx-auto"
            style={{ maxWidth: "700px", lineHeight: "1.7" }}
          >
            Every day, more than 150 patients trust our skilled doctors and modern diagnostic
            facilities. Here's a word from some of our leading specialists.
          </p>
        </div>

        {/* Doctor Message Cards */}
        <div className="row g-4 justify-content-center">
          {doctorMessages.map((doc, idx) => (
            <div className="col-md-6 col-lg-4" key={idx}>
              <div
                className="h-100 rounded-4 overflow-hidden bg-white position-relative"
                style={{
                  boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                  border: `1px solid rgba(0,0,0,0.06)`,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.12)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)";
                }}
              >
                {/* Coloured top accent bar */}
                <div
                  style={{
                    height: "5px",
                    background: `linear-gradient(90deg, ${doc.accent}, ${doc.accent === "#0072ce" ? "#003366" : "#8a9e1e"})`,
                  }}
                />

                {/* Doctor Image + Name */}
                <div
                  className="d-flex flex-column align-items-center text-center pt-4 pb-3 px-4"
                  style={{ borderBottom: "1px solid #f0f4f8" }}
                >
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      border: `3px solid ${doc.accent}`,
                      overflow: "hidden",
                      boxShadow: `0 4px 18px ${doc.accent}40`,
                      marginBottom: "14px",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={doc.image}
                      alt={doc.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top center",
                      }}
                    />
                  </div>
                  <h5 className="fw-bold mb-1" style={{ color: "#003366", fontSize: "1.1rem" }}>
                    {doc.name}
                  </h5>
                  <span
                    className="badge rounded-pill fw-semibold px-3 py-1 mb-2"
                    style={{
                      backgroundColor: `${doc.accent}18`,
                      color: doc.accent === "#b4d333" ? "#5a6e00" : doc.accent,
                      fontSize: "0.75rem",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {doc.speciality}
                  </span>
                  <p
                    className="text-muted mb-0"
                    style={{ fontSize: "0.78rem", lineHeight: "1.5" }}
                  >
                    {doc.degree}
                  </p>
                </div>

                {/* Message */}
                <div className="p-4">
                  {/* Quote icon */}
                  <div
                    className="mb-3"
                    style={{ color: doc.accent, fontSize: "2rem", lineHeight: 1 }}
                  >
                    ❝
                  </div>
                  <p
                    className="text-muted mb-0"
                    style={{ fontSize: "0.93rem", lineHeight: "1.75", fontStyle: "italic" }}
                  >
                    {doc.message}
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

export default Intro;