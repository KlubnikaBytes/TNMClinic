import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaUserMd } from "react-icons/fa";

// ── ALL available images (exact filenames verified from VSCode explorer) ────
import imgAishee          from "../assets/doctor image/Dr. Aishee Bhattacharya.png";
import imgAnirbanRay      from "../assets/doctor image/Dr. Anirban Ray.jpg";
import imgAniruddha       from "../assets/doctor image/Dr. Aniruddha Chakrabarty.jpg";
import imgAnurag          from "../assets/doctor image/Dr. Anurag Chatterjee.jpg";
import imgAranyak         from "../assets/doctor image/Dr. Aranyak Sarkar.jpeg";
import imgArijit          from "../assets/doctor image/Dr. Arijit Chakraborty.jpg";
import imgArka            from "../assets/doctor image/Dr. Arka Adhvaryu (Retd).avif";
import imgArkaprava       from "../assets/doctor image/Dr. Arkaprava Mahapatra.webp";
import imgAswini          from "../assets/doctor image/Dr. Aswini Rana.jpg";
import imgAtanu           from "../assets/doctor image/Dr. Atanu Biswas.avif";
import imgAviroop         from "../assets/doctor image/Dr. Aviroop Saha Roy.jpg";
import imgDebasish        from "../assets/doctor image/Dr. Debasish Bhattacharya.jpg";
import imgDipankar        from "../assets/doctor image/Dr. Dipankar Pal.jpg";
import imgGargi           from "../assets/doctor image/Dr. Gargi Nandi.jpg";
import imgGaurav          from "../assets/doctor image/Dr. Gaurav Aggarwal.jpg";
import imgIndrashis       from "../assets/doctor image/Dr. Indrashis Podder.jpg";
import imgIpseet          from "../assets/doctor image/Dr. Ipseet Mishra.jpg";
import imgKaran           from "../assets/doctor image/Dr. Karan Sehgal.jpg";
import imgKhooshboo       from "../assets/doctor image/Dr. Khooshboo Agarwal.jpg";
import imgKoustav         from "../assets/doctor image/Dr. Koustav Jana.jpeg";
import imgKrishanko       from "../assets/doctor image/Dr. Krishanko Das.png";
import imgLipika          from "../assets/doctor image/Dr. Lipika Das(Mukhopadhyay).jpg";
import imgPartha          from "../assets/doctor image/Dr. Partha Chakraborty.webp";
import imgRitambhar       from "../assets/doctor image/Dr. Ritambhar Mondal.jpg";
import imgSankarshan      from "../assets/doctor image/Dr. Sankarshan Saha.jpg";
import imgSaurav          from "../assets/doctor image/Dr. Saurav Sarkar.jpg";
import imgSayan           from "../assets/doctor image/Dr. Sayan Mazumder.jpg";
import imgSebabrata       from "../assets/doctor image/Dr. Sebabrata Jana.avif";
import imgSilima          from "../assets/doctor image/Dr. Silima S Tarenia.jpg";
import imgSmita           from "../assets/doctor image/Dr. Smita Ghatak.webp";
import imgSouryav         from "../assets/doctor image/Dr. Souryav Shankar Mondal.jpg";
import imgSubhasishDeb    from "../assets/doctor image/Dr.  Subhasish Deb.jpg";
import imgSubhro          from "../assets/doctor image/Dr.Subhro Sekhar Chakraborty.png";
import imgSubrata         from "../assets/doctor image/Dr. Subrata Biswas.webp";
import imgSudeshna        from "../assets/doctor image/Dr. Sudeshna Mallik.jpg";
import imgSunanda         from "../assets/doctor image/Dr. Sunanda De.jpg";
import imgTK              from "../assets/doctor image/Dr. T. K. Biswas.png";
import imgTamajit         from "../assets/doctor image/Dr. Tamajit Chakraborty.jpg";
import imgTithi           from "../assets/doctor image/Dr. Tithi Debnath.jpg";
import imgAbhishek        from "../assets/doctor image/Dr.Abhishek Bhaumik.jpg";

// ── SVG placeholder for truly missing photos ──────────────────────────────
const defaultImg =
  "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23e8edf2'/%3E%3Ccircle cx='50' cy='36' r='22' fill='%2394a3b8'/%3E%3Cellipse cx='50' cy='88' rx='32' ry='22' fill='%2394a3b8'/%3E%3C/svg%3E";

// ── Departments ordered for even column packing (max 5 per column) ────────
// Column layout:
//  Col 1 → Orthopaedics(1) + Paediatrics(1) + Endocrinology(1) + Pain & Palliative(1) = 4
//  Col 2 → Psychiatry(2) + Dermatology(2) = 4
//  Col 3 → Pulmonology(2) + Neurology(2) = 4
//  Col 4 → General Medicine/Diabetology(5) = 5
//  Col 5 → Cardiology(3) + ENT(2) = 5
//  Col 6 → Gynaecology & Obstetrics(3) + Urology(2) = 5
//  Col 7 → Surgical Oncology(2) + Neurosurgery(3) = 5
//  Col 8 → General Surgery(5) = 5
const departmentsData = [
  // ── Col 1 ────────────────────────────────────────────────────────────────
  {
    department: "Orthopaedics",
    doctors: [
      { name: "Dr. Aranyak Sarkar",   degree: "MBBS, MS (Ortho), Fellowship in Arthroscopy", image: imgAranyak },
    ],
  },
  {
    department: "Paediatrics (Child Specialist)",
    doctors: [
      { name: "Dr. Partha Chakraborty", degree: "MBBS (Cal), DCH (Cal), MRCPCH (UK), PGPN (Boston, USA)", image: imgPartha },
      { name: "Dr. Sudeshna Mallik",    degree: "MBBS, MD (Paediatrics)", image: imgSudeshna },
    ],
  },
  {
    department: "Endocrinology",
    doctors: [
      { name: "Dr. Silima S Tarenia", degree: "MD, DM (Endocrinology), DrNB (Endocrinology)", image: imgSilima },
    ],
  },
  {
    department: "Pain & Palliative Care",
    doctors: [
      { name: "Dr. Gargi Nandi", degree: "MBBS, MD, DNB (Anaesthesiology), Fellowship in Pain Management (WBUHS), CCEPC", image: imgGargi },
    ],
  },
  // ── Col 2 ────────────────────────────────────────────────────────────────
  {
    department: "Psychiatry",
    doctors: [
      { name: "Maj. (Dr.) Arka Adhvaryu (Retd.)", degree: "MBBS (WBUHS), MD Psychiatry (MUHS, AFMC)", image: imgArka },
      { name: "Dr. Arkaprava Mahapatra",           degree: "MBBS (WBUHS), MD Psychiatry",               image: imgArkaprava },
    ],
  },
  {
    department: "Dermatology",
    doctors: [
      { name: "Dr. Indrashis Podder",    degree: "MBBS, MD, DNB, MNAMS — EAACI Research Fellow (Urticaria), Hospital Del Mar, Barcelona, Spain", image: imgIndrashis },
      { name: "Dr. Aniruddha Chakrabarty", degree: "MBBS (Kol), MD (DVL) (W.B.U.H.S)", image: imgAniruddha },
    ],
  },
  // ── Col 3 ────────────────────────────────────────────────────────────────
  {
    department: "Pulmonology",
    doctors: [
      { name: "Dr. Anirban Ray",          degree: "MBBS, DTCD (Cal), DNB",          image: imgAnirbanRay },
      { name: "Dr. Debasish Bhattacharya", degree: "MBBS, MD (Chest Medicine)",      image: imgDebasish },
    ],
  },
  {
    department: "Neurology",
    doctors: [
      { name: "Dr. Aishee Bhattacharya", degree: "MBBS, MD (Medicine), DM (Neurology) — IPGMER & SSKM",                                         image: imgAishee },
      { name: "Dr. Dipankar Pal",         degree: "MBBS (Hons), MD (Internal Medicine) Gold Medalist, DM (Neurology) — IPGMER & SSKM",           image: imgDipankar },
    ],
  },
  // ── Col 4 ────────────────────────────────────────────────────────────────
  {
    department: "General Medicine / Diabetology",
    doctors: [
      { name: "Dr. Aswini Rana",    degree: "MBBS (Cal), MD (Medicine), IPGMER, CCEBDM (Delhi)", image: imgAswini },
      { name: "Dr. Atanu Biswas",   degree: "MBBS, MD, CCEBDM, CCIGC",                           image: imgAtanu },
      { name: "Dr. Sayan Mazumder", degree: "MD Physician, CCOM, FICD, FICM",                    image: imgSayan },
      { name: "Dr. Subrata Biswas", degree: "MBBS, MD",                                          image: imgSubrata },
      { name: "Dr. T. K. Biswas",   degree: "MBBS, D.T.M. & H, Tropical Medicine (MD)",         image: imgTK },
    ],
  },
  // ── Col 5 ────────────────────────────────────────────────────────────────
  {
    department: "Cardiology",
    doctors: [
      { name: "Dr. Krishanko Das",            degree: "MBBS (Hons), MD (Medicine) Gold Medal — IPGMER & SSKM, DM (Cardiology) — R.G. KAR MCH", image: imgKrishanko },
      { name: "Dr. Subhro Sekhar Chakraborty", degree: "MD (Med), DM (Cardio) — RML Hospital, New Delhi",                                      image: imgSubhro },
      { name: "Dr. Subhasish Deb",             degree: "MBBS, MD, MRCP (IRE), DM (Delhi, Gold Medalist)",                                      image: imgSubhasishDeb },
    ],
  },
  {
    department: "ENT",
    doctors: [
      { name: "Dr. Aviroop Saha Roy", degree: "MBBS, MS ENT (Gold Medalist), DNB (ENT), MRCS ENT (England)",      image: imgAviroop },
      { name: "Dr. Tithi Debnath",    degree: "MBBS, MS (ENT), DNB, MRCS ENT (Edinburgh), MNAMS, DAA (CMC Vellore)", image: imgTithi },
    ],
  },
  // ── Col 6 ────────────────────────────────────────────────────────────────
  {
    department: "Gynaecology & Obstetrics",
    doctors: [
      { name: "Dr. Lipika Das (Mukhopadhyay)", degree: "MS (G&O)",                            image: imgLipika },
      { name: "Dr. Smita Ghatak",              degree: "MBBS, DGO (WBUHS), DNB (NBEMS, Delhi)", image: imgSmita },
      { name: "Dr. Khooshboo Agarwal",         degree: "MBBS, MS (OB-GYN)",                  image: imgKhooshboo },
    ],
  },
  {
    department: "Urology",
    doctors: [
      { name: "Dr. Anurag Chatterjee", degree: "MS (General Surgery), MCh (Urology)",                                                                              image: imgAnurag },
      { name: "Dr. Gaurav Aggarwal",   degree: "MBBS, MS (General Surgery) Gold Medalist, FAGE, Fellowship (Surgical Oncology) TATA, DNB (Urology)", image: imgGaurav },
    ],
  },
  // ── Col 7 ────────────────────────────────────────────────────────────────
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
      { name: "Dr. Arijit Chakraborty",    degree: "MBBS, DrNB Neurosurgery (Manipal Bangalore), Fellowship in MIS Spine (Bangalore)", image: imgArijit },
      { name: "Dr. Souryav Shankar Mondal", degree: "MS (Kol), MCh Neurosurgery (Chennai)",                                            image: imgSouryav },
      { name: "Dr. Tamajit Chakraborty",    degree: "MBBS, DNB (Neurosurgery — Gangaram Hospital)",                                    image: imgTamajit },
    ],
  },
  // ── Col 8 ────────────────────────────────────────────────────────────────
  {
    department: "General Surgery",
    doctors: [
      { name: "Dr. Sunanda De",      degree: "MBBS, MS (General Surgery), FIAGES — Ex Asst. Prof., IPGMER & SSKM",                       image: imgSunanda },
      { name: "Dr. Sankarshan Saha", degree: "MS (General Surgery), FMAS",                                                               image: imgSankarshan },
      { name: "Dr. Abhishek Bhaumik", degree: "MBBS, MS (General Surgery), FNB (Minimal Access Surgery), FALS, EFIAGES, FICRS",          image: imgAbhishek },
      { name: "Dr. Saurav Sarkar",   degree: "MBBS (SSKM Hospital), MS (General Surgery)",                                               image: imgSaurav },
      { name: "Dr. Ritambhar Mondal", degree: "MBBS, MS (General Surgery), FMAS, FIAGES",                                               image: imgRitambhar },
    ],
  },
];

// ── Component ──────────────────────────────────────────────────────────────
const Doctors = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  // Group departments into columns — max 5 doctors per column
  const MAX_PER_COL = 5;
  const groupedColumns: { departments: typeof departmentsData; docCount: number }[] = [];
  let currentCol = { departments: [] as typeof departmentsData, docCount: 0 };

  departmentsData.forEach((dept) => {
    if (currentCol.docCount + dept.doctors.length > MAX_PER_COL && currentCol.docCount > 0) {
      groupedColumns.push(currentCol);
      currentCol = { departments: [], docCount: 0 };
    }
    currentCol.departments.push(dept);
    currentCol.docCount += dept.doctors.length;
  });
  if (currentCol.docCount > 0) groupedColumns.push(currentCol);

  const scroll = (dir: "left" | "right") => {
    sliderRef.current?.scrollBy({ left: dir === "left" ? -370 : 370, behavior: "smooth" });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeftState(sliderRef.current.scrollLeft);
  };
  const stop = () => setIsDown(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    sliderRef.current.scrollLeft = scrollLeftState - (e.pageX - sliderRef.current.offsetLeft - startX) * 1.5;
  };

  const totalDocs = departmentsData.reduce((s, d) => s + d.doctors.length, 0);

  return (
    <section id="doctors" className="py-5" style={{ backgroundColor: "#f0f4f8" }}>
      <div className="container py-4">

        {/* Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 gap-3">
          <div>
            <span
              className="badge rounded-pill bg-white text-primary border border-primary px-3 py-2 mb-3 shadow-sm"
              style={{ letterSpacing: "1px", fontSize: "0.8rem" }}
            >
              MEET THE TEAM
            </span>
            <h2 className="display-6 fw-bold mb-2" style={{ color: "#003366", letterSpacing: "-1px" }}>
              Our Specialists
            </h2>
            <p className="text-muted fs-5 mb-0">
              {totalDocs}+ experienced doctors across {departmentsData.length} specialities — all under one roof.
            </p>
          </div>

          <div className="d-flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="btn rounded-circle d-flex align-items-center justify-content-center shadow-sm"
              style={{ width: "45px", height: "45px", backgroundColor: "#fff", color: "#0072ce", border: "none" }}
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="btn rounded-circle d-flex align-items-center justify-content-center shadow-sm text-white"
              style={{ width: "45px", height: "45px", backgroundColor: "#0072ce", border: "none" }}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Drag-to-Scroll Slider */}
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={stop}
          onMouseUp={stop}
          onMouseMove={handleMouseMove}
          className="d-flex gap-4 pb-4 align-items-start"
          style={{
            overflowX: "auto",
            scrollSnapType: isDown ? "none" : "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            cursor: isDown ? "grabbing" : "grab",
            userSelect: "none",
          }}
        >
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>

          {groupedColumns.map((col, colIdx) => (
            <div
              key={colIdx}
              className="d-flex flex-column gap-4 flex-shrink-0"
              style={{
                width: "350px",
                scrollSnapAlign: "start",
                pointerEvents: isDown ? "none" : "auto",
              }}
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
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = defaultImg;
                          }}
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
          ))}
        </div>

        <p className="text-center text-muted mt-3" style={{ fontSize: "0.85rem" }}>
          ← Drag or use the arrows to explore all specialists →
        </p>
      </div>
    </section>
  );
};

export default Doctors;