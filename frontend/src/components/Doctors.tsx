import { useState } from "react";
import { FaUserMd, FaFilter } from "react-icons/fa";

// ── All approved doctors ─────────────────────────────────────────────────────
import imgAranyak         from "../assets/doctor image/Dr. Aranyak Sarkar.jpeg";
import imgAswini          from "../assets/doctor image/Dr. Aswini Rana.jpg";
import imgPartha          from "../assets/doctor image/Dr. Partha Chakraborty.webp";
import imgIndrashis       from "../assets/doctor image/Dr. Indrashis Podder.jpg";
import imgAniruddha       from "../assets/doctor image/Dr. Aniruddha Chakrabarty.jpg";
import imgAishee          from "../assets/doctor image/Dr. Aishee Bhattacharya.png";
import imgDipankar        from "../assets/doctor image/Dr. Dipankar Pal.jpg";
import imgKrishanko       from "../assets/doctor image/Dr. Krishanko Das.png";
import imgSubhro          from "../assets/doctor image/Dr.Subhro Sekhar Chakraborty.png";
import imgSubhasishDeb    from "../assets/doctor image/Dr.  Subhasish Deb.jpg";
import imgAnirbanRay      from "../assets/doctor image/Dr. Anirban Ray.jpg";
import imgDebasish        from "../assets/doctor image/Dr. Debasish Bhattacharya.jpg";
import imgSilima          from "../assets/doctor image/Dr. Silima S Tarenia.jpg";
import imgArka            from "../assets/doctor image/Dr. Arka Adhvaryu (Retd).avif";
import imgArkaprava       from "../assets/doctor image/Dr. Arkaprava Mahapatra.webp";
import imgAtanu           from "../assets/doctor image/Dr. Atanu Biswas.avif";
import imgSayan           from "../assets/doctor image/Dr. Sayan Mazumder.jpg";
import imgSubrata         from "../assets/doctor image/Dr. Subrata Biswas.webp";
import imgLipika          from "../assets/doctor image/Dr. Lipika Das(Mukhopadhyay).jpg";
import imgSmita           from "../assets/doctor image/Dr. Smita Ghatak.webp";
import imgKhooshboo       from "../assets/doctor image/Dr. Khooshboo Agarwal.jpg";
import imgSunanda         from "../assets/doctor image/Dr. Sunanda De.jpg";
import imgSankarshan      from "../assets/doctor image/Dr. Sankarshan Saha.jpg";
import imgAbhishek        from "../assets/doctor image/Dr.Abhishek Bhaumik.jpg";
import imgSaurav          from "../assets/doctor image/Dr. Saurav Sarkar.jpg";
import imgRitambhar       from "../assets/doctor image/Dr. Ritambhar Mondal.jpg";
import imgIpseet          from "../assets/doctor image/Dr. Ipseet Mishra.jpg";
import imgKaran           from "../assets/doctor image/Dr. Karan Sehgal.jpg";
import imgArijit          from "../assets/doctor image/Dr. Arijit Chakraborty.jpg";
import imgSouryav         from "../assets/doctor image/Dr. Souryav Shankar Mondal.jpg";
import imgTamajit         from "../assets/doctor image/Dr. Tamajit Chakraborty.jpg";
import imgAnurag          from "../assets/doctor image/Dr. Anurag Chatterjee.jpg";
import imgGaurav          from "../assets/doctor image/Dr. Gaurav Aggarwal.jpg";
import imgAviroop         from "../assets/doctor image/Dr. Aviroop Saha Roy.jpg";
import imgTithi           from "../assets/doctor image/Dr. Tithi Debnath.jpg";
import imgGargi           from "../assets/doctor image/Dr. Gargi Nandi.jpg";

// ── SVG placeholder ──────────────────────────────────────────────────────────
const defaultImg =
  "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23e8edf2'/%3E%3Ccircle cx='50' cy='36' r='22' fill='%2394a3b8'/%3E%3Cellipse cx='50' cy='88' rx='32' ry='22' fill='%2394a3b8'/%3E%3C/svg%3E";

// ── Department data ──────────────────────────────────────────────────────────
const departmentsData = [
  {
    department: "Orthopaedics",
    doctors: [
      { name: "Dr. Aranyak Sarkar", degree: "MBBS, MS (Ortho), Fellowship in Arthroscopy", image: imgAranyak },
    ],
  },
  {
    department: "General Medicine / Diabetology",
    doctors: [
      { name: "Dr. Aswini Rana",    degree: "MBBS (Cal), MD (Medicine), IPGMER, CCEBDM (Delhi)", image: imgAswini },
      { name: "Dr. Atanu Biswas",   degree: "MBBS, MD, CCEBDM, CCIGC",                           image: imgAtanu },
      { name: "Dr. Sayan Mazumder", degree: "MD Physician, CCOM, FICD, FICM",                    image: imgSayan },
      { name: "Dr. Subrata Biswas", degree: "MBBS, MD",                                          image: imgSubrata },
    ],
  },
  {
    department: "Paediatrics (Child Specialist)",
    doctors: [
      { name: "Dr. Partha Chakraborty", degree: "MBBS (Cal), DCH (Cal), MRCPCH (UK), PGPN (Boston, USA)", image: imgPartha },
    ],
  },
  {
    department: "Dermatology",
    doctors: [
      { name: "Dr. Indrashis Podder",      degree: "MBBS, MD, DNB, MNAMS — EAACI Research Fellow (Urticaria), Hospital Del Mar, Barcelona, Spain", image: imgIndrashis },
      { name: "Dr. Aniruddha Chakrabarty", degree: "MBBS (Kol), MD (DVL) (W.B.U.H.S)",                                                            image: imgAniruddha },
    ],
  },
  {
    department: "Neurology",
    doctors: [
      { name: "Dr. Aishee Bhattacharya", degree: "MBBS, MD (Medicine), DM (Neurology) — IPGMER & SSKM",                                image: imgAishee },
      { name: "Dr. Dipankar Pal",         degree: "MBBS (Hons), MD (Internal Medicine) Gold Medalist, DM (Neurology) — IPGMER & SSKM", image: imgDipankar },
    ],
  },
  {
    department: "Cardiology",
    doctors: [
      { name: "Dr. Krishanko Das",              degree: "MBBS (Hons), MD (Medicine) Gold Medal — IPGMER & SSKM, DM (Cardiology) — R.G. KAR MCH", image: imgKrishanko },
      { name: "Dr. Subhro Sekhar Chakraborty",  degree: "MD (Med), DM (Cardio) — RML Hospital, New Delhi",                                        image: imgSubhro },
      { name: "Dr. Subhasish Deb",              degree: "MBBS, MD, MRCP (IRE), DM (Delhi, Gold Medalist)",                                         image: imgSubhasishDeb },
    ],
  },
  {
    department: "Pulmonology",
    doctors: [
      { name: "Dr. Anirban Ray",           degree: "MBBS, DTCD (Cal), DNB",     image: imgAnirbanRay },
      { name: "Dr. Debasish Bhattacharya", degree: "MBBS, MD (Chest Medicine)", image: imgDebasish },
    ],
  },
  {
    department: "Endocrinology",
    doctors: [
      { name: "Dr. Silima S Tarenia", degree: "MD, DM (Endocrinology), DrNB (Endocrinology)", image: imgSilima },
    ],
  },
  {
    department: "Psychiatry",
    doctors: [
      { name: "Maj. (Dr.) Arka Adhvaryu (Retd.)", degree: "MBBS (WBUHS), MD Psychiatry (MUHS, AFMC)", image: imgArka },
      { name: "Dr. Arkaprava Mahapatra",           degree: "MBBS (WBUHS), MD Psychiatry",              image: imgArkaprava },
    ],
  },
  {
    department: "Gynaecology & Obstetrics",
    doctors: [
      { name: "Dr. Lipika Das (Mukhopadhyay)", degree: "MS (G&O)",                               image: imgLipika },
      { name: "Dr. Smita Ghatak",              degree: "MBBS, DGO (WBUHS), DNB (NBEMS, Delhi)",  image: imgSmita },
      { name: "Dr. Khooshboo Agarwal",         degree: "MBBS, MS (OB-GYN)",                      image: imgKhooshboo },
    ],
  },
  {
    department: "General Surgery",
    doctors: [
      { name: "Dr. Sunanda De",       degree: "MBBS, MS (General Surgery), FIAGES — Ex Asst. Prof., IPGMER & SSKM",             image: imgSunanda },
      { name: "Dr. Sankarshan Saha",  degree: "MS (General Surgery), FMAS",                                                     image: imgSankarshan },
      { name: "Dr. Abhishek Bhaumik", degree: "MBBS, MS (General Surgery), FNB (Minimal Access Surgery), FALS, EFIAGES, FICRS", image: imgAbhishek },
      { name: "Dr. Saurav Sarkar",    degree: "MBBS (SSKM Hospital), MS (General Surgery)",                                     image: imgSaurav },
      { name: "Dr. Ritambhar Mondal", degree: "MBBS, MS (General Surgery), FMAS, FIAGES",                                       image: imgRitambhar },
    ],
  },
  {
    department: "Surgical Oncology",
    doctors: [
      { name: "Dr. Ipseet Mishra", degree: "MBBS, MS (General Surgery), DrNB Surgical Oncology (Bangalore)",                                    image: imgIpseet },
      { name: "Dr. Karan Sehgal",  degree: "MBBS, MS (General Surgery), Fellowship in Surgical Oncology & GI-HPB Surgery (Tata Medical Centre)", image: imgKaran },
    ],
  },
  {
    department: "Neurosurgery",
    doctors: [
      { name: "Dr. Arijit Chakraborty",      degree: "MBBS, DrNB Neurosurgery (Manipal Bangalore), Fellowship in MIS Spine (Bangalore)", image: imgArijit },
      { name: "Dr. Souryav Shankar Mondal",  degree: "MS (Kol), MCh Neurosurgery (Chennai)",                                            image: imgSouryav },
      { name: "Dr. Tamajit Chakraborty",     degree: "MBBS, DNB (Neurosurgery — Gangaram Hospital)",                                    image: imgTamajit },
    ],
  },
  {
    department: "Urology",
    doctors: [
      { name: "Dr. Anurag Chatterjee", degree: "MS (General Surgery), MCh (Urology)",                                                                             image: imgAnurag },
      { name: "Dr. Gaurav Aggarwal",   degree: "MBBS, MS (General Surgery) Gold Medalist, FAGE, Fellowship (Surgical Oncology) TATA, DNB (Urology)",              image: imgGaurav },
    ],
  },
  {
    department: "ENT",
    doctors: [
      { name: "Dr. Aviroop Saha Roy", degree: "MBBS, MS ENT (Gold Medalist), DNB (ENT), MRCS ENT (England)",        image: imgAviroop },
      { name: "Dr. Tithi Debnath",    degree: "MBBS, MS (ENT), DNB, MRCS ENT (Edinburgh), MNAMS, DAA (CMC Vellore)", image: imgTithi },
    ],
  },
  {
    department: "Pain & Palliative Care",
    doctors: [
      { name: "Dr. Gargi Nandi", degree: "MBBS, MD, DNB (Anaesthesiology), Fellowship in Pain Management (WBUHS), CCEPC", image: imgGargi },
    ],
  },
];

// All unique departments for filter
const allDepartments = ["All", ...departmentsData.map((d) => d.department)];

// Group departments into columns — max 5 doctors per column
const MAX_PER_COL = 5;
function buildColumns(departments: typeof departmentsData) {
  const cols: { departments: typeof departmentsData; docCount: number }[] = [];
  let current = { departments: [] as typeof departmentsData, docCount: 0 };
  departments.forEach((dept) => {
    if (current.docCount + dept.doctors.length > MAX_PER_COL && current.docCount > 0) {
      cols.push(current);
      current = { departments: [], docCount: 0 };
    }
    current.departments.push(dept);
    current.docCount += dept.doctors.length;
  });
  if (current.docCount > 0) cols.push(current);
  return cols;
}

// ── Single column card renderer ───────────────────────────────────────────────
const ColumnCard = ({ col }: { col: ReturnType<typeof buildColumns>[0] }) => (
  <div
    className="d-flex flex-column gap-4 flex-shrink-0"
    style={{ width: "340px" }}
  >
    {col.departments.map((dept, deptIdx) => (
      <div
        key={deptIdx}
        className="card border-0 rounded-4 overflow-hidden bg-white"
        style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}
      >
        {/* Department Header */}
        <div
          className="py-3 px-3 text-center text-white"
          style={{
            background: "linear-gradient(135deg, #003366 0%, #0072ce 100%)",
            fontWeight: "700",
            letterSpacing: "0.8px",
            textTransform: "uppercase",
            fontSize: "0.88rem",
          }}
        >
          {dept.department}
        </div>

        {/* Doctors */}
        <div className="card-body p-0 d-flex flex-column">
          {dept.doctors.map((doc, docIdx) => (
            <div
              key={docIdx}
              className={`p-4 d-flex flex-column align-items-center text-center${
                docIdx !== dept.doctors.length - 1 ? " border-bottom border-light" : ""
              }`}
              style={{ transition: "background-color 0.2s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f8fafc")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <img
                src={doc.image}
                alt={doc.name}
                draggable="false"
                className="rounded-circle mb-3"
                style={{
                  width: "90px",
                  height: "90px",
                  objectFit: "cover",
                  objectPosition: "top center",
                  border: "3px solid #e8edf4",
                  backgroundColor: "#e8edf4",
                  userSelect: "none",
                  boxShadow: "0 4px 12px rgba(0,114,206,0.12)",
                }}
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = defaultImg; }}
              />
              <h5 className="fw-bold mb-2" style={{ color: "#0072ce", fontSize: "1.05rem" }}>
                {doc.name}
              </h5>
              <div
                className="text-muted d-flex align-items-start justify-content-center gap-2 px-1"
                style={{ fontSize: "0.82rem", lineHeight: "1.55" }}
              >
                <FaUserMd style={{ color: "#b4d333", flexShrink: 0, marginTop: "3px" }} />
                <span>{doc.degree}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

// ── Component ─────────────────────────────────────────────────────────────────
const Doctors = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filterOpen, setFilterOpen] = useState(false);

  // Filtered departments
  const filteredDepts =
    activeFilter === "All"
      ? departmentsData
      : departmentsData.filter((d) => d.department === activeFilter);

  const groupedColumns = buildColumns(filteredDepts);

  // When filtered to 1 department, no need to loop; otherwise duplicate for seamless loop
  const isFiltered = activeFilter !== "All";
  // Duplicate columns for seamless CSS marquee (same trick as ticker)
  const displayColumns = isFiltered ? groupedColumns : [...groupedColumns, ...groupedColumns];

  // Each column is 340px wide + 16px gap = 356px
  // Animation duration scales with number of original columns so speed feels consistent
  const animDuration = `${groupedColumns.length * 8}s`;

  return (
    <section id="doctors" className="py-5" style={{ backgroundColor: "#f0f4f8" }}>
      <div className="container py-4">

        {/* Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 gap-3">
          <div>
            <span className="premium-subtitle">
              Meet The Team
            </span>
            <h2 className="display-6 premium-title mb-2">
              Our Specialists
            </h2>
          </div>

          {/* Specialisation Filter */}
          <div className="position-relative">
            <button
              className="btn d-flex align-items-center gap-2 rounded-pill px-4 py-2 fw-semibold shadow-sm border-0"
              style={{
                backgroundColor: activeFilter === "All" ? "#003366" : "#0072ce",
                color: "#fff",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
              }}
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <FaFilter size={12} />
              {activeFilter === "All" ? "View by Specialisation" : activeFilter}
              <span style={{ marginLeft: "2px", opacity: 0.7, fontSize: "0.72rem" }}>
                {filterOpen ? "▲" : "▼"}
              </span>
            </button>

            {filterOpen && (
              <div
                className="position-absolute end-0 mt-2 bg-white rounded-4 shadow-lg py-2"
                style={{
                  minWidth: "260px",
                  zIndex: 200,
                  border: "1px solid rgba(0,0,0,0.08)",
                  maxHeight: "340px",
                  overflowY: "auto",
                }}
              >
                {allDepartments.map((dept) => (
                  <button
                    key={dept}
                    className="d-block w-100 text-start px-4 py-2 border-0 bg-transparent fw-medium"
                    style={{
                      color: activeFilter === dept ? "#0072ce" : "#003366",
                      backgroundColor: activeFilter === dept ? "rgba(0,114,206,0.06)" : "transparent",
                      fontSize: "0.88rem",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      if (activeFilter !== dept) e.currentTarget.style.backgroundColor = "#f5f7fa";
                    }}
                    onMouseLeave={(e) => {
                      if (activeFilter !== dept) e.currentTarget.style.backgroundColor = "transparent";
                    }}
                    onClick={() => {
                      setActiveFilter(dept);
                      setFilterOpen(false);
                    }}
                  >
                    {dept === "All" ? "✦ All Specialisations" : dept}
                    {activeFilter === dept && <span className="ms-2" style={{ color: "#0072ce" }}>✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Active filter badge */}
        {activeFilter !== "All" && (
          <div className="mb-4 d-flex align-items-center gap-3">
            <span className="text-muted" style={{ fontSize: "0.88rem" }}>Showing:</span>
            <span
              className="badge rounded-pill px-3 py-2 fw-semibold"
              style={{ backgroundColor: "#0072ce", color: "#fff", fontSize: "0.82rem" }}
            >
              {activeFilter}
            </span>
            <button
              className="btn btn-sm rounded-pill border-0"
              style={{ backgroundColor: "rgba(0,0,0,0.06)", color: "#555", fontSize: "0.78rem" }}
              onClick={() => setActiveFilter("All")}
            >
              Clear ✕
            </button>
          </div>
        )}

        {/* ── CSS Marquee Slider (same as ticker) ── */}
        <div
          style={{
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Fade edges */}
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: "60px", zIndex: 2,
            background: "linear-gradient(to right, #f0f4f8, transparent)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", right: 0, top: 0, bottom: 0, width: "60px", zIndex: 2,
            background: "linear-gradient(to left, #f0f4f8, transparent)",
            pointerEvents: "none",
          }} />

          {/* Animated row */}
          <div
            className="d-flex gap-4 pb-4 align-items-start"
            style={{
              width: "max-content",
              animation: isFiltered ? "none" : `doctorScroll ${animDuration} linear infinite`,
              paddingTop: "4px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.animationPlayState = "running";
            }}
          >
            {displayColumns.map((col, colIdx) => (
              <ColumnCard key={colIdx} col={col} />
            ))}
          </div>
        </div>

      </div>

      {/* CSS keyframes */}
      <style>{`
        @keyframes doctorScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Click-outside to close dropdown */}
      {filterOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{ zIndex: 199 }}
          onClick={() => setFilterOpen(false)}
        />
      )}
    </section>
  );
};

export default Doctors;