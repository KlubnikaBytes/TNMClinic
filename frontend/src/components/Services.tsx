import { 
  FaHandHoldingMedical, 
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
  { name: "Uroflowmetry", icon: <FaProcedures size={26} /> }
];

// --- Data: Standard Packages ---
const standardPackages = [
  { title: "Vitamin Check Basic", desc: "25-hydroxy Vitamin D (D2+D3), Calcium - Serum, Vitamin B12", popular: false },
  { title: "AAROGYAM 1.1 WITH UTSH (63 Tests)", desc: "Cardiac Risk Markers, Liver, Toxic Elements, Iron Deficiency, Renal, Lipid, T3 T4 Tsh", popular: false },
  { title: "AAROGYAM 1.2 WITH UTSH (93 Tests)", desc: "Diabetes, Liver, Complete Hemogram, Toxic Elements, Iron Deficiency, Renal, Lipid, T3 T4 Tsh", popular: false },
  { title: "AAROGYAM A PLUS PROFILE WITH UTSH", desc: "Diabetes, Electrolytes, Complete Urine Analysis, Liver, Iron Deficiency, Renal, Lipid, T3 T4 Tsh", popular: false },
];

// --- Data: Premium TruHealth Packages (Structured) ---
const truHealthPackages = [
  {
    title: "TruHealth Silver",
    parameters: "40 Parameters",
    headerBg: "linear-gradient(135deg, #e0e0e0 0%, #bdbdbd 100%)", // Silver
    headerText: "#333",
    popular: false,
    tests: [
      { category: "General Tests", list: "Haemogram(CBC)" },
      { category: "Diabetes", list: "Blood Sugar - Fasting" },
      { category: "Liver", list: "Bilirubin Total, Bilirubin Direct, Bilirubin Indirect, Total-Proteins, SGPT, SGOT" },
      { category: "Kidney", list: "S.creatinine, Blood Urea Nitrogen(BUN), Uric Acid" },
      { category: "Heart", list: "Cholesterol Total, Triglycerides, HDL, LDL, VLDL Cholesterol" },
      { category: "Thyroid", list: "TSH" }
    ]
  },
  {
    title: "TruHealth Gold",
    parameters: "49 Parameters",
    headerBg: "linear-gradient(135deg, #f3d060 0%, #d4af37 100%)", // Gold
    headerText: "#fff",
    popular: false,
    tests: [
      { category: "General Tests", list: "Haemogram(CBC)" },
      { category: "Diabetes", list: "Blood Sugar - Fasting" },
      { category: "Liver", list: "Bilirubin Total, Bilirubin Direct, Bilirubin Indirect, Total-Proteins, SGPT, SGOT, Alkaline Phosphatase, Gamma GT" },
      { category: "Kidney", list: "S.creatinine, Blood Urea Nitrogen(BUN), Uric Acid, Potassium, Sodium" },
      { category: "Heart", list: "Cholesterol Total, Triglycerides, HDL, LDL, VLDL Cholesterol, Non HDL, VLDL Ratios" },
      { category: "Thyroid", list: "TSH, Free T3, Free T4" }
    ]
  },
  {
    title: "TruHealth Platinum",
    parameters: "56 Parameters",
    headerBg: "linear-gradient(135deg, #a0b2c6 0%, #768a9e 100%)", // Platinum
    headerText: "#fff",
    popular: true, // Tagged as popular
    tests: [
      { category: "General Tests", list: "Haemogram(CBC)" },
      { category: "Diabetes", list: "Blood Sugar - Fasting, HbA1C" },
      { category: "Liver", list: "Bilirubin Total, Bilirubin Direct, Bilirubin Indirect, Total-Proteins, SGPT, SGOT, Alkaline Phosphatase, Gamma GT, Albumin, Globulin, A/G Ratio" },
      { category: "Kidney", list: "S.creatinine, Blood Urea Nitrogen(BUN), Uric Acid, Potassium, Sodium" },
      { category: "Heart", list: "Cholesterol Total, Triglycerides, HDL, LDL, VLDL Cholesterol, Non HDL, VLDL Ratios" },
      { category: "Thyroid", list: "TSH, Free T3, Free T4" },
      { category: "Bone", list: "Calcium, Vit D" }
    ]
  },
  {
    title: "TruHealth Diamond",
    parameters: "61 Parameters",
    headerBg: "linear-gradient(135deg, #70c1b3 0%, #4da394 100%)", // Diamond
    headerText: "#fff",
    popular: false,
    tests: [
      { category: "General Tests", list: "Haemogram(CBC), Iron Studies, Vit B12" },
      { category: "Diabetes", list: "Blood Sugar - Fasting, HbA1C" },
      { category: "Liver", list: "Bilirubin Total, Bilirubin Direct, Bilirubin Indirect, Total-Proteins, SGPT, SGOT, Alkaline Phosphatase, Gamma GT, Albumin, Globulin, A/G Ratio" },
      { category: "Kidney", list: "S.creatinine, Blood Urea Nitrogen(BUN), Uric Acid, Potassium, Sodium, Chloride, Phosphorus" },
      { category: "Heart", list: "Cholesterol Total, Triglycerides, HDL, LDL, VLDL Cholesterol, Non HDL, VLDL Ratios" },
      { category: "Thyroid", list: "TSH, Free T3, Free T4" },
      { category: "Bone", list: "Calcium, Vit D" }
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-5" style={{ backgroundColor: "#f4f7f9" }}>
      <div className="container py-lg-5">
        
        {/* Highlighted Header Section */}
        <div className="text-center mb-5">
          <span className="badge rounded-pill bg-white text-primary border border-primary px-3 py-2 mb-3 shadow-sm" style={{ letterSpacing: "1px" }}>
            WORLD-CLASS DIAGNOSTICS
          </span>
          <h2 className="display-4 fw-bold mb-3" style={{ color: "#003366", letterSpacing: "-1px" }}>
            Our Services & Diagnostics
          </h2>
          <p className="text-muted fs-5 mx-auto mb-5" style={{ maxWidth: "800px", lineHeight: "1.6" }}>
            Equipped with state-of-the-art technology, we offer highly accurate, NABL accredited pathological tests and complete health profiles under one roof.
          </p>

          {/* Trust Badges - Enhanced */}
          <div className="d-flex flex-wrap justify-content-center gap-4 gap-lg-5 mb-5 p-4 bg-white rounded-4 shadow-sm">
            <div className="d-flex align-items-center gap-3">
              <FaCheckCircle size={32} style={{ color: "#b4d333" }} />
              <span className="fw-bold" style={{ color: "#003366", fontSize: "1.1rem" }}>NABL/CAP Accredited</span>
            </div>
            <div className="d-flex align-items-center gap-3">
              <FaClipboardList size={32} style={{ color: "#b4d333" }} />
              <span className="fw-bold" style={{ color: "#003366", fontSize: "1.1rem" }}>4000+ Tests & Profiles</span>
            </div>
            <div className="d-flex align-items-center gap-3">
              <FaHandshake size={36} style={{ color: "#b4d333" }} />
              <span className="fw-bold" style={{ color: "#003366", fontSize: "1.1rem" }}>Trusted By Leading Doctors</span>
            </div>
          </div>
        </div>

        {/* --- CORE CLINIC FACILITIES (Upgraded Grid) --- */}
        <div className="mb-5 pb-5">
          <h3 className="fw-bold mb-4 text-center" style={{ color: "#003366", fontSize: "2rem" }}>Core Clinic Facilities</h3>
          <div className="row g-4 justify-content-center">
            {coreServices.map((service, index) => (
              <div className="col-6 col-md-4 col-lg-3" key={index}>
                <div 
                  className="d-flex flex-column align-items-center text-center gap-3 p-4 bg-white rounded-4 border-0 transition-hover h-100"
                  style={{ 
                    boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                    cursor: "default",
                    transition: "all 0.3s ease",
                    borderBottom: "4px solid #0072ce"
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

        {/* --- TRUHEALTH PREMIUM PACKAGES --- */}
        <div className="mb-5 pb-5">
          <h3 className="fw-bold mb-4 text-center" style={{ color: "#003366", fontSize: "2rem" }}>Premium TruHealth Packages</h3>
          <div className="row g-4">
            {truHealthPackages.map((pkg, index) => (
              <div className="col-lg-6" key={index}>
                <div 
                  className="card h-100 border-0 rounded-4 overflow-hidden bg-white position-relative"
                  style={{ 
                    boxShadow: pkg.popular ? "0 15px 40px rgba(180, 211, 51, 0.2)" : "0 8px 25px rgba(0,0,0,0.06)",
                    transition: "transform 0.3s ease",
                    transform: pkg.popular ? "scale(1.02)" : "scale(1)",
                    zIndex: pkg.popular ? 2 : 1
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = pkg.popular ? "scale(1.03) translateY(-5px)" : "translateY(-5px)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = pkg.popular ? "scale(1.02)" : "scale(1)"}
                >
                  {/* Popular Ribbon */}
                  {pkg.popular && (
                    <div 
                      className="position-absolute top-0 end-0 px-4 py-1 text-white fw-bold shadow-sm"
                      style={{ backgroundColor: "#b4d333", borderBottomLeftRadius: "15px", zIndex: 3, letterSpacing: "1px", fontSize: "0.85rem" }}
                    >
                      <FaStar className="me-2 mb-1" /> MOST POPULAR
                    </div>
                  )}

                  {/* Colored Header */}
                  <div 
                    className="p-4 text-center" 
                    style={{ background: pkg.headerBg, color: pkg.headerText }}
                  >
                    <h4 className="fw-bold mb-1 mt-2" style={{ fontSize: "1.5rem" }}>{pkg.title}</h4>
                    <span className="fw-bold bg-white text-dark px-3 py-1 rounded-pill shadow-sm mt-2 d-inline-block" style={{ fontSize: "0.85rem" }}>
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

        {/* --- STANDARD PACKAGES --- */}
        <div className="mb-5">
          <h3 className="fw-bold mb-4 text-center" style={{ color: "#003366", fontSize: "2rem" }}>General Diagnostic Profiles</h3>
          <div className="row g-4">
            {standardPackages.map((item, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div 
                  className="card h-100 border-0 rounded-4 p-4 bg-white position-relative overflow-hidden"
                  style={{ 
                    boxShadow: "0 6px 20px rgba(0,0,0,0.04)",
                    transition: "all 0.3s ease",
                    borderTop: item.popular ? "4px solid #b4d333" : "4px solid transparent",
                    cursor: "default" 
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 114, 206, 0.1)";
                    if(!item.popular) e.currentTarget.style.borderTop = "4px solid #0072ce";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.04)";
                    if(!item.popular) e.currentTarget.style.borderTop = "4px solid transparent";
                  }}
                >
                  {item.popular && (
                    <span className="badge bg-danger position-absolute top-0 end-0 m-3 shadow-sm">
                      Recommended
                    </span>
                  )}

                  <div className="d-flex gap-3 h-100 align-items-start mt-2">
                    <div 
                      className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle" 
                      style={{ 
                        width: "55px", 
                        height: "55px", 
                        backgroundColor: item.popular ? "rgba(180, 211, 51, 0.15)" : "rgba(0, 114, 206, 0.1)",
                        color: item.popular ? "#003366" : "#0072ce" 
                      }}
                    >
                      <FaHandHoldingMedical size={26} />
                    </div>
                    
                    <div>
                      <h5 className="fw-bold mb-2" style={{ color: "#003366", fontSize: "1.15rem" }}>
                        {item.title}
                      </h5>
                      <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- HIGH-CONVERSION CTA BANNER --- */}
        <div 
          className="rounded-4 p-5 text-center text-white mt-5 position-relative overflow-hidden shadow-lg"
          style={{ background: "linear-gradient(135deg, #003366 0%, #0072ce 100%)" }}
        >
          {/* Decorative background shapes */}
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