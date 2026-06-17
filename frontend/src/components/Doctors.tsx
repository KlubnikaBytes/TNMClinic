import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaUserMd } from "react-icons/fa";

// 1. Import ALL local doctor images with exact extensions from your assets folder
import imgAditya from "../assets/doctor image/Dr. Aditya Ghosh Roy.webp";
import imgAishee from "../assets/doctor image/Dr. Aishee Bhattacharya.png";
import imgAniruddha from "../assets/doctor image/Dr. Aniruddha Chakrabarty.jpg";
import imgAranyak from "../assets/doctor image/Dr. Aranyak Sarkar.jpeg";
import imgArka from "../assets/doctor image/Dr. Arka Adhvaryu (Retd).avif";
import imgArkaprava from "../assets/doctor image/Dr. Arkaprava Mahapatra.jpg";
import imgAswini from "../assets/doctor image/Dr. Aswini Rana.jpg";
import imgAtanu from "../assets/doctor image/Dr. Atanu Biswas.webp";
import imgAviroop from "../assets/doctor image/Dr. Aviroop Saha Roy.avif";
import imgGargi from "../assets/doctor image/Dr. Gargi Nandi.jpg";
import imgIndrashis from "../assets/doctor image/Dr. Indrashis Podder.png";
import imgIpseet from "../assets/doctor image/Dr. Ipseet Mishra.jpg";
import imgKaran from "../assets/doctor image/Dr. Karan Sehgal.avif";
import imgKavita from "../assets/doctor image/Dr. Kavita Mandal.jpg";
import imgKoustav from "../assets/doctor image/Dr. Koustav Jana.jpeg";
import imgKrishanko from "../assets/doctor image/Dr. Krishanko Das.png";
import imgLipika from "../assets/doctor image/Dr. Lipika Das (Mukhopadhyay).webp";
import imgPartha from "../assets/doctor image/Dr. Partha Chakraborty.webp";
import imgPritha from "../assets/doctor image/Dr. Pritha Chakraborty.jpg";
import imgRahul from "../assets/doctor image/Dr. Rahul Bhattacharya.jpg";
import imgRohan from "../assets/doctor image/Dr. Rohan Sinha.jpg";
import imgSaurav from "../assets/doctor image/Dr. Saurav Sarkar.jpg";
import imgSayan from "../assets/doctor image/Dr. Sayan Mazumder.jpg";
import imgSayantan from "../assets/doctor image/Dr. Sayantan Saha.webp";
import imgSebabrata from "../assets/doctor image/Dr. Sebabrata Jana.avif";
import imgSilima from "../assets/doctor image/Dr. Silima S Tarenia.jpg";
import imgSouryav from "../assets/doctor image/Dr. Souryav Sankar Mondal.jpg";
import imgSudeshna from "../assets/doctor image/Dr. Sudeshna Mallik.jpg";
import imgTK from "../assets/doctor image/Dr. T. K. Biswas.png";
import imgTamajit from "../assets/doctor image/Dr. Tamajit Chakraborty.jpg";
import imgTaniya from "../assets/doctor image/Dr. Taniya Bhuiya.jpg";
import imgPurbasha from "../assets/doctor image/Purbasha Ghosh.jpg";

// Bulletproof SVG Placeholder for any missing images
const defaultDoctorImage = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Crect%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22%23f1f5f9%22%2F%3E%3Cpath%20d%3D%22M12%2012c2.21%200%204-1.79%204-4s-1.79-4-4-4-4%201.79-4%204%201.79%204%204%204zm0%202c-2.67%200-8%201.34-8%204v2h16v-2c0-2.66-5.33-4-8-4z%22%20fill%3D%22%2394a3b8%22%2F%3E%3C%2Fsvg%3E";

// 3. Complete Departments and Doctors Data Mapped to Local Images
const departmentsData = [
  {
    department: "General Medicine",
    doctors: [
      { name: "Dr. Aswini Rana", degree: "MBBS (Cal), MD (Medicine), IPGMER CCEBDM", image: imgAswini },
      { name: "Dr. T. K. Biswas", degree: "MBBS, D.T.M. & H, Tropical Medicine (MD)", image: imgTK },
      { name: "Dr. Atanu Biswas", degree: "MBBS, MD, CCEBDM, CCIGC", image: imgAtanu },
      { name: "Dr. Sayan Mazumder", degree: "MD Physician & Diabetes Specialist", image: imgSayan }
    ]
  },
  {
    department: "Orthopaedics",
    doctors: [
      { name: "Dr. Aranyak Sarkar", degree: "MBBS, MS (Ortho), Fellowship in Arthroscopy", image: imgAranyak }
    ]
  },
  {
    department: "Neurology",
    doctors: [
      { name: "Dr. Aishee Bhattacharya", degree: "MBBS, MD Medicine, DM Neurology", image: imgAishee },
      { name: "Dr. Koustav Jana", degree: "MBBS, DNB (Medicine), DM (Neurology)", image: imgKoustav }
    ]
  },
  {
    department: "Cardiology",
    doctors: [
      { name: "Dr. Krishanko Das", degree: "MBBS (Hons), MD (Medicine), DM (Cardiology)", image: imgKrishanko },
      { name: "Dr. Sebabrata Jana", degree: "MBBS (Hons), MD (Medicine), DM (Cardiology)", image: imgSebabrata }
    ]
  },
  {
    department: "Paediatrics",
    doctors: [
      { name: "Dr. Partha Chakraborty", degree: "MBBS (Cal), DCH, MRCPCH (UK), PGPN", image: imgPartha },
      { name: "Dr. Sudeshna Mallik", degree: "MBBS, MD (Paediatrics)", image: imgSudeshna }
    ]
  },
  {
    department: "Neuro Surgeon",
    doctors: [
      { name: "Dr. Tamajit Chakraborty", degree: "MBBS, DNB (Neurosurgery)", image: imgTamajit },
      { name: "Dr. Souryav Sankar Mondal", degree: "MS (Kol), MCh (Chennai), Consultant Neurosurgeon", image: imgSouryav }
    ]
  },
  {
    department: "General Surgeon",
    doctors: [
      { name: "Dr. Sunanda De", degree: "MBBS, MS, FIAGES", image: defaultDoctorImage }, // Not in screenshots, using fallback
      { name: "Dr. Rohan Sinha", degree: "MBBS, MS, FMAS", image: imgRohan },
      { name: "Dr. Saurav Sarkar", degree: "MBBS, MS General Surgery (Gold Medallist)", image: imgSaurav }
    ]
  },
  {
    department: "Surgical Oncologist",
    doctors: [
      { name: "Dr. Ipseet Mishra", degree: "MBBS, MS (General Surgery), DrNB Surgical Oncology", image: imgIpseet },
      { name: "Dr. Karan Sehgal", degree: "MBBS, MS, Fellowship in Surgical Oncology & GI-HPB", image: imgKaran }
    ]
  },
  {
    department: "Gynaecologist & Obstetrician",
    doctors: [
      { name: "Dr. Lipika Das (Mukhopadhyay)", degree: "MS (G&O) Consultant Gynaecologist", image: imgLipika },
      { name: "Dr. Pritha Chakraborty", degree: "MBBS, MS (Gynae & Obs)", image: imgPritha },
      { name: "Dr. Kavita Mandal", degree: "MBBS, MD (Obst. & Gynae), AIIMS", image: imgKavita }
    ]
  },
  {
    department: "Endocrinologist",
    doctors: [
      { name: "Dr. Silima S Tarenia", degree: "MD, DM (Endocrinology), DrNB (Endocrinology)", image: imgSilima }
    ]
  },
  {
    department: "Geriatrician",
    doctors: [
      { name: "Dr. Rahul Bhattacharya", degree: "MBBS, DNB (Gen Medicine), MRCP (UK)", image: imgRahul }
    ]
  },
  {
    department: "Pulmonologist",
    doctors: [
      { name: "Dr. Sayantan Saha", degree: "MBBS, MD, DNB, FNB (Critical Care)", image: imgSayantan }
    ]
  },
  {
    department: "ENT",
    doctors: [
      { name: "Dr. Aviroop Saha Roy", degree: "MBBS, MS ENT (Gold Medalist), DNB, MRCS", image: imgAviroop },
      { name: "Dr. Aditya Ghosh Roy", degree: "MBBS, MS (ENT)", image: imgAditya }
    ]
  },
  {
    department: "Pain & Palliative",
    doctors: [
      { name: "Dr. Gargi Nandi", degree: "MBBS, MD, DNB (Anesthesiology)", image: imgGargi }
    ]
  },
  {
    department: "Nephrologist",
    doctors: [
      { name: "Dr. Taniya Bhuiya", degree: "MBBS, MD (Gen Medicine), DM Nephrology", image: imgTaniya }
    ]
  },
  {
    department: "Dermatologist",
    doctors: [
      { name: "Dr. Indrashis Podder", degree: "MD, DNB, MNAMS", image: imgIndrashis },
      { name: "Dr. Aniruddha Chakrabarty", degree: "MBBS (Kol), MD (DVL)", image: imgAniruddha }
    ]
  },
  {
    department: "Psychiatrist",
    doctors: [
      { name: "Maj. (Dr) Arka Adhvaryu (Retd)", degree: "MBBS (WBUHS), MD Psychiatry", image: imgArka },
      { name: "Dr. Arkaprava Mahapatra", degree: "MBBS, MD Psychiatry", image: imgArkaprava }
    ]
  },
  {
    department: "Psychologist",
    doctors: [
      { name: "Purbasha Ghosh", degree: "Consultant Psychologist & Special Educator", image: imgPurbasha }
    ]
  }
];

const Doctors = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // --- DATA CHUNKING LOGIC ---
  const MAX_DOCTORS_PER_COLUMN = 4;
  const groupedColumns: { departments: typeof departmentsData; docCount: number }[] = [];
  let currentColumn = { departments: [] as typeof departmentsData, docCount: 0 };

  departmentsData.forEach((dept) => {
    if (currentColumn.docCount + dept.doctors.length > MAX_DOCTORS_PER_COLUMN && currentColumn.docCount > 0) {
      groupedColumns.push(currentColumn);
      currentColumn = { departments: [], docCount: 0 };
    }
    currentColumn.departments.push(dept);
    currentColumn.docCount += dept.doctors.length;
  });
  if (currentColumn.docCount > 0) {
    groupedColumns.push(currentColumn);
  }

  // --- SCROLL CONTROLS ---
  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 370; 
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; 
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="doctors" className="py-5" style={{ backgroundColor: "#f0f4f8" }}>
      <div className="container py-4">
        
        {/* Header & Controls */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5 gap-3">
          <div>
            <h2 className="display-6 fw-bold mb-2" style={{ color: "#003366", letterSpacing: "-1px" }}>
              Our Specialists
            </h2>
            <p className="text-muted fs-5 mb-0">
              Explore our comprehensive list of specialized doctors and their qualifications.
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

        {/* Drag-to-Scroll Container */}
        <div 
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="d-flex gap-4 pb-4 align-items-start"
          style={{
            overflowX: "auto",
            scrollSnapType: isDown ? "none" : "x mandatory", 
            scrollbarWidth: "none", 
            msOverflowStyle: "none", 
            cursor: isDown ? "grabbing" : "grab",
            userSelect: "none" 
          }}
        >
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>

          {/* Map through columns */}
          {groupedColumns.map((col, colIndex) => (
            <div 
              key={colIndex} 
              className="d-flex flex-column gap-4 flex-shrink-0"
              style={{ 
                width: "350px", 
                scrollSnapAlign: "start",
                pointerEvents: isDown ? "none" : "auto",
              }}
            >
              {/* Map through the departments nested inside this column */}
              {col.departments.map((dept, deptIdx) => (
                
                <div 
                  key={deptIdx} 
                  className="card border-0 rounded-4 overflow-hidden bg-white"
                  style={{ boxShadow: "0 4px 15px rgba(0,0,0,0.06)" }}
                >
                  
                  {/* Department Header */}
                  <div 
                    className="py-3 px-2 text-center text-white" 
                    style={{ 
                      background: "linear-gradient(135deg, #003366 0%, #00509e 100%)", 
                      fontWeight: "700", 
                      letterSpacing: "1px", 
                      textTransform: "uppercase",
                      fontSize: "0.95rem" 
                    }}
                  >
                    {dept.department}
                  </div>
                  
                  {/* Doctors List for this specific department */}
                  <div className="card-body p-0 bg-white d-flex flex-column">
                    {dept.doctors.map((doc, docIdx) => {
                      return (
                        <div 
                          key={docIdx} 
                          className={`p-4 d-flex flex-column align-items-center text-center transition-all ${docIdx !== dept.doctors.length - 1 ? 'border-bottom border-light' : ''}`}
                          style={{ transition: "background-color 0.2s ease" }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f8fafc"}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                        >
                          <img 
                            src={doc.image} 
                            alt={doc.name} 
                            draggable="false"
                            className="rounded-circle mb-3 shadow"
                            style={{ 
                              width: "85px", 
                              height: "85px", 
                              objectFit: "cover", 
                              border: "3px solid #ffffff",
                              userSelect: "none",
                              backgroundColor: "#f1f5f9"
                            }}
                          />
                          
                          <h5 className="fw-bold mb-2" style={{ color: "#0072ce", fontSize: "1.1rem" }}>{doc.name}</h5>
                          
                          <div className="text-muted d-flex align-items-start justify-content-center gap-2 px-2" style={{ fontSize: "0.85rem", lineHeight: "1.5" }}>
                            <FaUserMd style={{ color: "#b4d333", flexShrink: 0, marginTop: "3px" }} />
                            <span>{doc.degree}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Doctors;