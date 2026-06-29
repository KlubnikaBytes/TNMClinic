import imgAranyak from "../assets/doctor image/Dr. Aranyak Sarkar.jpeg";
import imgAswini  from "../assets/doctor image/Dr. Aswini Rana.jpg";
import imgPartha  from "../assets/doctor image/Dr. Partha Chakraborty.webp";

const doctorCards = [
  {
    name: "Dr. Aranyak Sarkar",
    degree: "MBBS, MS (Ortho), Fellowship in Arthroscopy",
    speciality: "Orthopaedics",
    image: imgAranyak,
    accent: "#0072ce",
    accentDark: "#003366",
    photoPosition: "center 15%",
  },
  {
    name: "Dr. Aswini Rana",
    degree: "MBBS (Cal), MD (Medicine), IPGMER, CCEBDM (Delhi)",
    speciality: "General Medicine & Diabetology",
    image: imgAswini,
    accent: "#b4d333",
    accentDark: "#6a7f00",
    photoPosition: "center 10%",
  },
  {
    name: "Dr. Partha Chakraborty",
    degree: "MBBS (Cal), DCH (Cal), MRCPCH (UK), PGPN (Boston, USA)",
    speciality: "Paediatrics — Child Specialist",
    image: imgPartha,
    accent: "#0072ce",
    accentDark: "#003366",
    photoPosition: "center 20%",
  },
];

const Intro = () => {
  return (
    <section id="about" className="py-5" style={{ backgroundColor: "#f8fafc" }}>
      <div className="container py-lg-5">

        {/* ── Section Header ── */}
        <div className="text-center mb-5">
          <h2
            style={{
              fontSize: "clamp(1.9rem, 4vw, 3rem)",
              fontWeight: "800",
              color: "#002244",
              letterSpacing: "-0.5px",
              lineHeight: "1.2",
            }}
          >
            Welcome to The Newtown Multispeciality Clinic
          </h2>
          <div
            style={{
              width: "60px",
              height: "3px",
              backgroundColor: "#0072ce",
              margin: "14px auto 0",
              borderRadius: "2px",
            }}
          />
        </div>

        {/* ── Board of Directors Message ── */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div
              className="rounded-4 overflow-hidden"
              style={{
                boxShadow: "0 20px 60px rgba(0,51,102,0.1)",
                border: "1px solid rgba(0,114,206,0.12)",
              }}
            >
              {/* Header Banner */}
              <div
                className="py-4 px-5 text-white text-center"
                style={{
                  background: "linear-gradient(135deg, #002244 0%, #003d7a 50%, #0072ce 100%)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{
                  position: "absolute", top: "-30px", right: "-30px",
                  width: "160px", height: "160px", borderRadius: "50%",
                  background: "rgba(180,211,51,0.1)", pointerEvents: "none",
                }} />
                <div style={{
                  position: "absolute", bottom: "-20px", left: "5%",
                  width: "100px", height: "100px", borderRadius: "50%",
                  background: "rgba(255,255,255,0.06)", pointerEvents: "none",
                }} />
                <h2 className="fw-bold mb-1" style={{ fontSize: "1.7rem", letterSpacing: "-0.5px" }}>
                  A Message From Our Board of Directors
                </h2>
              </div>

              {/* Letter Body */}
              <div className="p-4 p-md-5" style={{ backgroundColor: "#fdfeff" }}>
                <div style={{ maxWidth: "780px", margin: "0 auto" }}>

                  <p className="fw-semibold mb-4" style={{ color: "#003366", fontSize: "1.05rem" }}>
                    Dear Patients and Visitors,
                  </p>

                  <p style={{ color: "#374151", lineHeight: "1.85", fontSize: "0.97rem", marginBottom: "1.2rem" }}>
                    Welcome to <strong>The Newtown Multispeciality Clinic</strong>. When we founded this institution, our shared vision was simple yet profound: to create a healthcare space where medical excellence meets genuine compassion.
                  </p>

                  <p style={{ color: "#374151", lineHeight: "1.85", fontSize: "0.97rem", marginBottom: "1.2rem" }}>
                    As a team of practicing doctors and the Directors of this clinic, our perspective on healthcare leadership is deeply rooted in the clinical world. We believe there is a distinct advantage when a healthcare institution is led by medical professionals. Every single day, we are on the front lines — listening to your concerns, diagnosing ailments, and guiding patients through recovery. Because we are doctors ourselves, we intimately understand the exact, nuanced requirements of our patients.
                  </p>

                  <p style={{ color: "#374151", lineHeight: "1.85", fontSize: "0.97rem", marginBottom: "1.2rem" }}>
                    We know that true clinical care goes far beyond writing a prescription. It is about minimal wait times, seamless communication, absolute diagnostic precision, and an environment that feels healing rather than intimidating. We understand your anxieties, your need for clear answers, and your expectation of world-class expertise right here in your community.
                  </p>

                  <p style={{ color: "#374151", lineHeight: "1.85", fontSize: "0.97rem", marginBottom: "1.2rem" }}>
                    Every piece of medical technology we invest in, every specialist who joins our team, and every protocol we implement is designed through the lens of direct patient care. We don't just manage a clinic; we curate a healthcare experience that we would trust for our own families.
                  </p>

                  <p style={{ color: "#374151", lineHeight: "1.85", fontSize: "0.97rem", marginBottom: "2rem" }}>
                    Thank you for placing your trust in us. We are privileged to partner with you on your journey to health and wellness.
                  </p>

                  <p className="fw-semibold mb-5" style={{ color: "#003366", fontSize: "1rem" }}>
                    Warm regards,
                  </p>

                  {/* ── Director Cards — box design, no circle ── */}
                  <div className="row g-3 justify-content-center">
                    {doctorCards.map((doc, idx) => (
                      <div className="col-sm-6 col-md-4" key={idx}>
                        <div
                          className="rounded-3 overflow-hidden bg-white"
                          style={{
                            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                            border: `1px solid rgba(0,0,0,0.06)`,
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-4px)";
                            e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.12)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
                          }}
                        >
                          {/* Photo banner */}
                          <div
                            style={{
                              width: "100%",
                              height: "200px",
                              overflow: "hidden",
                              backgroundColor: "#e8edf4",
                            }}
                          >
                            <img
                              src={doc.image}
                              alt={doc.name}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: doc.photoPosition,
                              }}
                            />
                          </div>

                          {/* Accent bar */}
                          <div style={{ height: "4px", backgroundColor: doc.accent }} />

                          {/* Info */}
                          <div className="p-3 text-center">
                            <div
                              className="fw-bold mb-1"
                              style={{ color: "#003366", fontSize: "0.95rem" }}
                            >
                              {doc.name}
                            </div>
                            <div
                              className="fw-semibold mb-2"
                              style={{
                                color: doc.accent === "#b4d333" ? doc.accentDark : doc.accent,
                                fontSize: "0.78rem",
                                letterSpacing: "0.3px",
                              }}
                            >
                              {doc.speciality}
                            </div>
                            {/* Signature underline */}
                            <div
                              style={{
                                borderBottom: `2px solid ${doc.accent}`,
                                width: "50%",
                                margin: "0 auto 8px",
                              }}
                            />
                            <div style={{ color: "#6b7280", fontSize: "0.73rem", lineHeight: "1.5" }}>
                              {doc.degree}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Intro;