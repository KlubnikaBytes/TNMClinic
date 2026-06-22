import { FaHandshake, FaStethoscope, FaLaptopMedical, FaUserCheck, FaCheckCircle, FaHospital, FaPills, FaHome } from "react-icons/fa";

const Features = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#ffffff" }}>
      <div className="container py-4">

        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="badge rounded-pill bg-white text-primary border border-primary px-3 py-2 mb-3 shadow-sm" style={{ letterSpacing: "1px" }}>
            WHAT WE OFFER
          </span>
          <h2 className="fw-bold display-5 mb-3" style={{ color: "#003366", letterSpacing: "-1px" }}>
            Complete Healthcare Under One Roof
          </h2>
          <p className="text-muted fs-5 mx-auto" style={{ maxWidth: "700px", lineHeight: "1.6" }}>
            From in-clinic consultations to home-care services and a fully stocked pharmacy — everything you need is right here.
          </p>
        </div>

        <div className="row g-4">

          {/* Card 1: Clinic Facility */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-4 transition-hover text-center" style={{ backgroundColor: "#f8f9fa" }}>
              <div className="mb-4 mx-auto d-flex align-items-center justify-content-center rounded-circle" style={{ width: "60px", height: "60px", backgroundColor: "rgba(0, 114, 206, 0.1)", color: "#0072ce" }}>
                <FaHospital size={28} />
              </div>
              <h4 className="fw-bold mb-3" style={{ color: "#003366", fontSize: "1.2rem" }}>Clinic Facility</h4>
              <p className="text-muted mb-0" style={{ lineHeight: "1.8", fontSize: "0.95rem" }}>
                Modern, well-equipped consultation rooms, diagnostic labs, and imaging centres — all under one roof in the heart of Newtown.
              </p>
            </div>
          </div>

          {/* Card 2: Pharmacy */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-4 transition-hover text-center" style={{ backgroundColor: "#f8f9fa" }}>
              <div className="mb-4 mx-auto d-flex align-items-center justify-content-center rounded-circle" style={{ width: "60px", height: "60px", backgroundColor: "rgba(180, 211, 51, 0.2)", color: "#8a9e1e" }}>
                <FaPills size={28} />
              </div>
              <h4 className="fw-bold mb-3" style={{ color: "#003366", fontSize: "1.2rem" }}>Pharmacy</h4>
              <p className="text-muted mb-0" style={{ lineHeight: "1.8", fontSize: "0.95rem" }}>
                Our on-site pharmacy is stocked with a wide range of medicines and health products so you can pick up prescriptions right after your visit.
              </p>
            </div>
          </div>

          {/* Card 3: Homecare */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-4 transition-hover text-center" style={{ backgroundColor: "#f8f9fa" }}>
              <div className="mb-4 mx-auto d-flex align-items-center justify-content-center rounded-circle" style={{ width: "60px", height: "60px", backgroundColor: "rgba(0, 114, 206, 0.1)", color: "#0072ce" }}>
                <FaHome size={28} />
              </div>
              <h4 className="fw-bold mb-3" style={{ color: "#003366", fontSize: "1.2rem" }}>Homecare</h4>
              <p className="text-muted mb-0" style={{ lineHeight: "1.8", fontSize: "0.95rem" }}>
                Can't visit us? Our trained healthcare professionals come to you — offering home sample collection, nursing care, and doctor consultations at your doorstep.
              </p>
            </div>
          </div>

          {/* Card 4: Partner Services */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-4 transition-hover text-center" style={{ backgroundColor: "#f8f9fa" }}>
              <div className="mb-4 mx-auto d-flex align-items-center justify-content-center rounded-circle" style={{ width: "60px", height: "60px", backgroundColor: "rgba(0, 114, 206, 0.1)", color: "#0072ce" }}>
                <FaHandshake size={28} />
              </div>
              <h4 className="fw-bold mb-4" style={{ color: "#003366", fontSize: "1.2rem" }}>Partner Services</h4>
              <ul className="list-unstyled text-start mx-auto d-inline-block" style={{ color: "#6c757d", fontSize: "0.95rem", lineHeight: "2" }}>
                {['Digital X-ray', 'ECG - 12 Channel', 'Holter Monitoring', 'PFT', 'EEG Study', 'NVC Study'].map((item, i) => (
                  <li key={i}><FaCheckCircle className="me-2" style={{ color: "#b4d333" }}/> {item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 5: Specialized Doctors */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-4 transition-hover text-center" style={{ backgroundColor: "#f8f9fa" }}>
              <div className="mb-4 mx-auto d-flex align-items-center justify-content-center rounded-circle" style={{ width: "60px", height: "60px", backgroundColor: "rgba(0, 114, 206, 0.1)", color: "#0072ce" }}>
                <FaStethoscope size={28} />
              </div>
              <h4 className="fw-bold mb-4" style={{ color: "#003366", fontSize: "1.2rem" }}>Specialize Doctors</h4>
              <ul className="list-unstyled text-start mx-auto d-inline-block" style={{ color: "#6c757d", fontSize: "0.95rem", lineHeight: "2" }}>
                {['Neuro Surgery', 'Gastroenterology', 'Nephrology', 'Surgical Oncology', 'Neurology', 'Endocrinologist'].map((item, i) => (
                  <li key={i}><FaCheckCircle className="me-2" style={{ color: "#b4d333" }}/> {item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 6: Advanced Treatment */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-4 transition-hover text-center" style={{ backgroundColor: "#f8f9fa" }}>
              <div className="mb-4 mx-auto d-flex align-items-center justify-content-center rounded-circle" style={{ width: "60px", height: "60px", backgroundColor: "rgba(0, 114, 206, 0.1)", color: "#0072ce" }}>
                <FaLaptopMedical size={28} />
              </div>
              <h4 className="fw-bold mb-3" style={{ color: "#003366", fontSize: "1.2rem" }}>Advance Treatment</h4>
              <p className="text-muted" style={{ lineHeight: "1.8", fontSize: "0.95rem" }}>
                All the doctors we have here are associated with various renowned institutions in Kolkata, providing access to top-tier medical technology and care.
              </p>
            </div>
          </div>

          {/* Card 7: Experienced Doctors */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm rounded-4 p-4 transition-hover text-center" style={{ backgroundColor: "#f8f9fa" }}>
              <div className="mb-4 mx-auto d-flex align-items-center justify-content-center rounded-circle" style={{ width: "60px", height: "60px", backgroundColor: "rgba(0, 114, 206, 0.1)", color: "#0072ce" }}>
                <FaUserCheck size={28} />
              </div>
              <h4 className="fw-bold mb-3" style={{ color: "#003366", fontSize: "1.2rem" }}>Experienced Doctors</h4>
              <p className="text-muted" style={{ lineHeight: "1.8", fontSize: "0.95rem" }}>
                All the doctors who sit for consultations at our clinic are highly experienced and skilled, ensuring you receive the best possible medical advice.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;