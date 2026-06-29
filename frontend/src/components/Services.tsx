import {
  FaCheckCircle,
  FaClipboardList,
  FaHandshake,
  FaUserMd,
  FaVial,
  FaMicroscope,
  FaXRay,
  FaWaveSquare,
  FaHeartbeat,
  FaBrain,
  FaProcedures,
  FaPhoneAlt,
  FaStar
} from "react-icons/fa";

// --- Data: Core Clinic Services ---
const coreServices = [
  { name: "Doctor Consultation", icon: <FaUserMd size={26} /> },
  { name: "Blood Tests", icon: <FaVial size={26} /> },
  { name: "Pathology", icon: <FaMicroscope size={26} /> },
  { name: "X-Ray", icon: <FaXRay size={26} /> },
  { name: "USG (Ultrasound)", icon: <FaWaveSquare size={26} /> },
  { name: "Colour Doppler", icon: <FaWaveSquare size={26} /> },
  { name: "Echocardiogram (Echo)", icon: <FaHeartbeat size={26} /> },
  { name: "ECG", icon: <FaHeartbeat size={26} /> },
  { name: "Holter Monitor", icon: <FaHeartbeat size={26} /> },
  { name: "EMG, NCV, EEG", icon: <FaBrain size={26} /> },
  { name: "Uroflowmetry", icon: <FaProcedures size={26} /> },
];

// --- Data: Standard Packages (currently hidden) ---
// const standardPackages = [
//   { title: "Vitamin Check Basic", desc: "25-hydroxy Vitamin D (D2+D3), Calcium - Serum, Vitamin B12", popular: false },
//   { title: "AAROGYAM 1.1 WITH UTSH (63 Tests)", desc: "Cardiac Risk Markers, Liver, Toxic Elements, Iron Deficiency, Renal, Lipid, T3 T4 Tsh", popular: false },
//   { title: "AAROGYAM 1.2 WITH UTSH (93 Tests)", desc: "Diabetes, Liver, Complete Hemogram, Toxic Elements, Iron Deficiency, Renal, Lipid, T3 T4 Tsh", popular: false },
//   { title: "AAROGYAM A PLUS PROFILE WITH UTSH", desc: "Diabetes, Electrolytes, Complete Urine Analysis, Liver, Iron Deficiency, Renal, Lipid, T3 T4 Tsh", popular: false },
// ];

// --- Data: Premium TNMC Packages (with pricing) ---
const tnmcPackages = [
  {
    title: "TNMC Silver Blood Test Package",
    parameters: "40 Parameters",
    originalPrice: "₹2,835",
    offerPrice: "₹899",
    headerBg: "linear-gradient(135deg, #e8e8e8 0%, #c8c8c8 100%)",
    headerText: "#222",
    priceBg: "#28a745",
    popular: false,
    tests: [
      { category: "General Tests", list: "Haemogram(CBC)" },
      { category: "Diabetes", list: "Blood Sugar - Fasting" },
      { category: "Liver", list: "Bilirubin Total, Bilirubin Direct, Bilirubin Indirect, Total-Proteins, SGPT, SGOT" },
      { category: "Kidney", list: "S.creatinine, Blood Urea Nitrogen(BUN), Uric Acid" },
      { category: "Heart", list: "Cholesterol Total, Triglycerides, HDL, LDL, VLDL Cholesterol" },
      { category: "Thyroid", list: "TSH" },
    ],
  },
  {
    title: "TNMC Gold Blood Test Package",
    parameters: "49 Parameters",
    originalPrice: "₹4,140",
    offerPrice: "₹1,199",
    headerBg: "linear-gradient(135deg, #f5d060 0%, #c8a020 100%)",
    headerText: "#fff",
    priceBg: "#28a745",
    popular: false,
    tests: [
      { category: "General Tests", list: "Haemogram(CBC)" },
      { category: "Diabetes", list: "Blood Sugar - Fasting" },
      { category: "Liver", list: "Bilirubin Total, Bilirubin Direct, Bilirubin Indirect, Total-Proteins, SGPT, SGOT, Alkaline Phosphatase, Gamma GT" },
      { category: "Kidney", list: "S.creatinine, Blood Urea Nitrogen(BUN), Uric Acid, Potassium, Sodium" },
      { category: "Heart", list: "Cholesterol Total, Triglycerides, HDL, LDL, VLDL Cholesterol, Non HDL, VLDL Ratios" },
      { category: "Thyroid", list: "TSH, Free T3, Free T4" },
    ],
  },
  {
    title: "TNMC Platinum Blood Test Package",
    parameters: "56 Parameters",
    originalPrice: "₹6,430",
    offerPrice: "₹1,699",
    headerBg: "linear-gradient(135deg, #a8bdd4 0%, #6e8ea8 100%)",
    headerText: "#fff",
    priceBg: "#28a745",
    popular: true,
    tests: [
      { category: "General Tests", list: "Haemogram(CBC)" },
      { category: "Diabetes", list: "Blood Sugar - Fasting, HbA1C" },
      { category: "Liver", list: "Bilirubin Total, Bilirubin Direct, Bilirubin Indirect, Total-Proteins, SGPT, SGOT, Alkaline Phosphatase, Gamma GT, Albumin, Globulin, A/G Ratio" },
      { category: "Kidney", list: "S.creatinine, Blood Urea Nitrogen(BUN), Uric Acid, Potassium, Sodium" },
      { category: "Heart", list: "Cholesterol Total, Triglycerides, HDL, LDL, VLDL Cholesterol, Non HDL, VLDL Ratios" },
      { category: "Thyroid", list: "TSH, Free T3, Free T4" },
      { category: "Bone", list: "Calcium, Vit D" },
    ],
  },
  {
    title: "TNMC Diamond Blood Test Package",
    parameters: "61 Parameters",
    originalPrice: "₹8,255",
    offerPrice: "₹2,499",
    headerBg: "linear-gradient(135deg, #5bc8c0 0%, #2e9e96 100%)",
    headerText: "#fff",
    priceBg: "#28a745",
    popular: false,
    tests: [
      { category: "General Tests", list: "Haemogram(CBC), Iron Studies, Vit B12" },
      { category: "Diabetes", list: "Blood Sugar - Fasting, HbA1C" },
      { category: "Liver", list: "Bilirubin Total, Bilirubin Direct, Bilirubin Indirect, Total-Proteins, SGPT, SGOT, Alkaline Phosphatase, Gamma GT, Albumin, Globulin, A/G Ratio" },
      { category: "Kidney", list: "S.creatinine, Blood Urea Nitrogen(BUN), Uric Acid, Potassium, Sodium, Chloride, Phosphorus" },
      { category: "Heart", list: "Cholesterol Total, Triglycerides, HDL, LDL, VLDL Cholesterol, Non HDL, VLDL Ratios" },
      { category: "Thyroid", list: "TSH, Free T3, Free T4" },
      { category: "Bone", list: "Calcium, Vit D" },
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-5" style={{ backgroundColor: "#f4f7f9" }}>
      <style>{`
        @keyframes sameDayPulse {
          0%   { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.55); }
          70%  { box-shadow: 0 0 0 12px rgba(40, 167, 69, 0); }
          100% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0); }
        }
      `}</style>
      <div className="container py-lg-5">

        {/* Highlighted Header Section */}
        <div className="text-center mb-5">
          <span className="premium-subtitle">
            World-Class Diagnostics
          </span>
          <h2 className="display-4 premium-title mb-3">
            Our Services &amp; Diagnostics
          </h2>
          <p className="text-muted fs-5 mx-auto mb-5" style={{ maxWidth: "800px", lineHeight: "1.6" }}>
            Equipped with state-of-the-art technology, we offer highly accurate, NABL accredited pathological tests and complete health profiles under one roof.
          </p>

          {/* Trust Badges */}
          <div className="d-flex flex-wrap justify-content-center gap-4 gap-lg-5 mb-5 p-4 bg-white rounded-4 shadow-sm">
            <div className="d-flex align-items-center gap-3">
              <FaCheckCircle size={32} style={{ color: "#b4d333" }} />
              <span className="fw-bold" style={{ color: "#003366", fontSize: "1.1rem" }}>NABL/CAP Accredited</span>
            </div>
            <div className="d-flex align-items-center gap-3">
              <FaClipboardList size={32} style={{ color: "#b4d333" }} />
              <span className="fw-bold" style={{ color: "#003366", fontSize: "1.1rem" }}>4000+ Tests &amp; Profiles</span>
            </div>
            <div className="d-flex align-items-center gap-3">
              <FaHandshake size={36} style={{ color: "#b4d333" }} />
              <span className="fw-bold" style={{ color: "#003366", fontSize: "1.1rem" }}>Trusted By Leading Doctors</span>
            </div>
          </div>
        </div>


        {/* ── SAME DAY REPORTS BANNER ── */}
        <div className="mb-5">
          <div
            className="rounded-4 p-4 p-md-5 position-relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #002244 0%, #003d7a 50%, #0072ce 100%)",
              boxShadow: "0 20px 60px rgba(0,34,68,0.25)",
            }}
          >
            {/* Decorative blobs */}
            <div style={{
              position: "absolute", top: "-40px", right: "-40px",
              width: "200px", height: "200px", borderRadius: "50%",
              background: "rgba(180,211,51,0.12)", pointerEvents: "none",
            }} />
            <div style={{
              position: "absolute", bottom: "-30px", left: "10%",
              width: "140px", height: "140px", borderRadius: "50%",
              background: "rgba(0,114,206,0.25)", pointerEvents: "none",
            }} />

            <div className="position-relative text-center text-white">
              {/* Animated pulse badge */}
              <div
                className="d-inline-flex align-items-center gap-2 rounded-pill px-4 py-2 mb-4"
                style={{
                  backgroundColor: "#28a745",
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  letterSpacing: "1.5px",
                  animation: "sameDayPulse 2s infinite",
                }}
              >
                <span style={{ fontSize: "0.9rem" }}>⚡</span>
                SAME DAY REPORTS AVAILABLE
              </div>

              <h3 className="fw-bold mb-3" style={{ fontSize: "1.9rem", letterSpacing: "-0.5px" }}>
                Get Your Results — The Same Day
              </h3>
              <p className="mb-0 mx-auto" style={{ maxWidth: "600px", opacity: 0.85, fontSize: "1rem", lineHeight: "1.75" }}>
                No more waiting days for your reports. Our state-of-the-art diagnostics deliver
                fast, accurate results — often within a few hours of your test.
              </p>
            </div>
          </div>
        </div>

        {/* --- CORE CLINIC FACILITIES --- */}

        <div className="mb-5 pb-5">
          <h3 className="fw-bold mb-4 text-center" style={{ color: "#003366", fontSize: "2rem" }}>Core Clinic Facilities</h3>
          <div className="row g-4 justify-content-center">
            {coreServices.map((service, index) => (
              <div className="col-6 col-md-4 col-lg-3" key={index}>
                <div
                  className="d-flex flex-column align-items-center text-center gap-3 p-4 bg-white rounded-4 border-0 h-100 position-relative overflow-hidden"
                  style={{
                    boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                    cursor: "default",
                    transition: "all 0.3s ease",
                    borderBottom: "4px solid #0072ce",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 114, 206, 0.1)";
                    e.currentTarget.style.borderBottom = "4px solid #b4d333";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.04)";
                    e.currentTarget.style.borderBottom = "4px solid #0072ce";
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{ width: "65px", height: "65px", backgroundColor: "rgba(0, 114, 206, 0.08)", color: "#0072ce" }}
                  >
                    {service.icon}
                  </div>
                  <span className="fw-bold" style={{ color: "#003366", fontSize: "1.05rem" }}>
                    {service.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- PREMIUM TNMC PACKAGES --- */}
        <div className="mb-5 pb-5">
          <h3 className="fw-bold mb-2 text-center" style={{ color: "#003366", fontSize: "2rem" }}>
            Premium TNMC Blood Test Packages
          </h3>
          <p className="text-center text-muted mb-5" style={{ fontSize: "0.95rem" }}>
            * Prices are indicative. Contact us for current offers.
          </p>
          <div className="row g-4">
            {tnmcPackages.map((pkg, index) => (
              <div className="col-lg-6" key={index}>
                <div
                  className="card h-100 border-0 rounded-4 overflow-hidden bg-white position-relative"
                  style={{
                    boxShadow: pkg.popular ? "0 15px 40px rgba(180, 211, 51, 0.2)" : "0 8px 25px rgba(0,0,0,0.06)",
                    transition: "transform 0.3s ease",
                    transform: pkg.popular ? "scale(1.02)" : "scale(1)",
                    zIndex: pkg.popular ? 2 : 1,
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = pkg.popular ? "scale(1.03) translateY(-5px)" : "translateY(-5px)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = pkg.popular ? "scale(1.02)" : "scale(1)"}
                >
                  {/* Popular Ribbon */}
                  {pkg.popular && (
                    <div
                      className="position-absolute top-0 end-0 px-4 py-1 text-white fw-bold shadow-sm"
                      style={{ backgroundColor: "#b4d333", color: "#003366 !important", borderBottomLeftRadius: "15px", zIndex: 3, letterSpacing: "1px", fontSize: "0.85rem" }}
                    >
                      <FaStar className="me-2 mb-1" style={{ color: "#003366" }} />
                      <span style={{ color: "#003366" }}>MOST POPULAR</span>
                    </div>
                  )}

                  {/* Coloured Header with pricing */}
                  <div
                    className="p-4 text-center"
                    style={{ background: pkg.headerBg, color: pkg.headerText }}
                  >
                    <h4 className="fw-bold mb-3 mt-2" style={{ fontSize: "1.5rem" }}>{pkg.title}</h4>

                    {/* Pricing row */}
                    <div className="d-flex align-items-center justify-content-center gap-3 flex-wrap mb-3">
                      <span
                        style={{
                          fontSize: "1.15rem",
                          fontWeight: "600",
                          textDecoration: "line-through",
                          opacity: 0.75,
                          color: pkg.headerText,
                        }}
                      >
                        {pkg.originalPrice}
                      </span>
                      <span
                        className="d-inline-flex align-items-center px-3 py-1 rounded-pill fw-bold shadow"
                        style={{
                          backgroundColor: pkg.priceBg,
                          color: "#fff",
                          fontSize: "1.3rem",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {pkg.offerPrice}*
                      </span>
                    </div>

                    <span className="fw-bold bg-white text-dark px-3 py-1 rounded-pill shadow-sm d-inline-block" style={{ fontSize: "0.85rem" }}>
                      {pkg.parameters}
                    </span>
                  </div>

                  {/* Test List Body */}
                  <div className="card-body p-4 p-md-5">
                    {pkg.tests.map((test, idx) => (
                      <div className="row mb-3 pb-3 border-bottom border-light" key={idx}>
                        <div className="col-4 col-md-4">
                          <span className="fw-bold" style={{ color: "#0072ce", fontSize: "0.95rem" }}>
                            {test.category}
                          </span>
                        </div>
                        <div className="col-8 col-md-8">
                          <span className="text-muted fw-medium" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
                            {test.list}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- STANDARD PACKAGES (General Diagnostic Profiles) — commented out, re-enable when needed ---
        <div className="mb-5">
          <h3 className="fw-bold mb-4 text-center" style={{ color: "#003366", fontSize: "2rem" }}>General Diagnostic Profiles</h3>
          <div className="row g-4">
            {standardPackages.map((item, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                ...
              </div>
            ))}
          </div>
        </div>
        --- */}

        {/* --- CTA BANNER --- */}
        <div
          className="rounded-4 p-5 text-center text-white mt-5 position-relative overflow-hidden shadow-lg"
          style={{ background: "linear-gradient(135deg, #003366 0%, #0072ce 100%)" }}
        >
          <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 150%, #ffffff 15%, transparent 20%), radial-gradient(circle at 80% -50%, #ffffff 15%, transparent 20%)" }}></div>
          <div className="position-relative z-1">
            <h2 className="fw-bold mb-3 display-6">Need to book a test or check pricing?</h2>
            <p className="fs-5 mb-4 opacity-75" style={{ maxWidth: "700px", margin: "0 auto" }}>
              Call us directly to schedule your diagnostics, book a home sample collection, or consult with our experts.
            </p>
            <a
              href="tel:+918100650033"
              className="btn btn-lg rounded-pill fw-bold px-5 py-3 shadow-lg d-inline-flex align-items-center gap-2 transition-hover"
              style={{ backgroundColor: "#b4d333", color: "#003366", letterSpacing: "1px" }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              <FaPhoneAlt /> Call +91 81006 50033
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;