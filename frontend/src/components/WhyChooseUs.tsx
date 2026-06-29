import { FaUserMd, FaHome, FaStethoscope, FaVial, FaPills, FaHouseUser } from "react-icons/fa";

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
          <span className="premium-subtitle">
            Our Advantage
          </span>
          <h2 className="display-5 premium-title mb-3">
            Why Choose Us?
          </h2>
          <p
            className="fs-5 mx-auto"
            style={{ maxWidth: "820px", lineHeight: "1.8", color: "#374151" }}
          >
            At The Newtown Multispeciality Clinic, we have designed our services around a single core philosophy:
            healthcare should be <strong>seamless, comprehensive, and patient-centric</strong>. Because our clinic is led by doctors,
            we understand the exact pain points patients face — and we have built our facility to eliminate them.
          </p>
        </div>

        {/* ── Section 1: Expert Clinical Leadership ── */}
        <div
          className="rounded-4 p-4 p-md-5 mb-4"
          style={{
            background: "#ffffff",
            boxShadow: "0 6px 30px rgba(0,0,0,0.05)",
            borderLeft: "5px solid #0072ce",
          }}
        >
          <h4 className="fw-bold mb-4 d-flex align-items-center gap-3" style={{ color: "#003366", fontSize: "1.25rem" }}>
            <span style={{ fontSize: "1.7rem" }}>🩺</span>
            Expert Clinical Leadership &amp; Continuous Care
          </h4>
          <div className="row g-4">
            {/* Card A */}
            <div className="col-md-6">
              <div
                className="h-100 rounded-3 p-4"
                style={{
                  background: "rgba(0,114,206,0.04)",
                  border: "1px solid rgba(0,114,206,0.12)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,114,206,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                    style={{ width: "52px", height: "52px", backgroundColor: "rgba(0,114,206,0.1)", color: "#0072ce" }}
                  >
                    <FaUserMd size={26} />
                  </div>
                  <h5 className="fw-bold mb-0" style={{ color: "#003366", fontSize: "1.05rem" }}>
                    In-House Doctor Availability
                  </h5>
                </div>
                <p className="text-muted mb-0" style={{ lineHeight: "1.8", fontSize: "0.95rem" }}>
                  You are never left without guidance. We have qualified in-house medical professionals available on-site to address immediate clinical needs and coordinate your care.
                </p>
              </div>
            </div>
            {/* Card B */}
            <div className="col-md-6">
              <div
                className="h-100 rounded-3 p-4"
                style={{
                  background: "rgba(0,114,206,0.04)",
                  border: "1px solid rgba(0,114,206,0.12)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,114,206,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                    style={{ width: "52px", height: "52px", backgroundColor: "rgba(0,114,206,0.1)", color: "#0072ce" }}
                  >
                    <FaStethoscope size={26} />
                  </div>
                  <h5 className="fw-bold mb-0" style={{ color: "#003366", fontSize: "1.05rem" }}>
                    Specialist Doctors, Every Day
                  </h5>
                </div>
                <p className="text-muted mb-0" style={{ lineHeight: "1.8", fontSize: "0.95rem" }}>
                  No more waiting weeks for an appointment. Eminent specialists across various medical disciplines are available daily, ensuring you get expert opinions right when you need them.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 2: Ultimate Convenience ── */}
        <div
          className="rounded-4 p-4 p-md-5 mb-4"
          style={{
            background: "#ffffff",
            boxShadow: "0 6px 30px rgba(0,0,0,0.05)",
            borderLeft: "5px solid #b4d333",
          }}
        >
          <h4 className="fw-bold mb-4 d-flex align-items-center gap-3" style={{ color: "#003366", fontSize: "1.25rem" }}>
            <span style={{ fontSize: "1.7rem" }}>🔬</span>
            Ultimate Convenience Under One Roof
          </h4>
          <div className="row g-4">
            {/* Card C */}
            <div className="col-md-6">
              <div
                className="h-100 rounded-3 p-4"
                style={{
                  background: "rgba(180,211,51,0.05)",
                  border: "1px solid rgba(180,211,51,0.2)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 30px rgba(180,211,51,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                    style={{ width: "52px", height: "52px", backgroundColor: "rgba(180,211,51,0.15)", color: "#6a7f00" }}
                  >
                    <FaVial size={26} />
                  </div>
                  <h5 className="fw-bold mb-0" style={{ color: "#003366", fontSize: "1.05rem" }}>
                    Comprehensive Diagnostics with Same-Day Reporting
                  </h5>
                </div>
                <p className="text-muted mb-0" style={{ lineHeight: "1.8", fontSize: "0.95rem" }}>
                  From advanced blood investigations to precision screenings, our in-house diagnostic wing ensures fast, accurate testing. Get tested and receive your reports the very same day for quicker diagnosis and treatment.
                </p>
              </div>
            </div>
            {/* Card D */}
            <div className="col-md-6">
              <div
                className="h-100 rounded-3 p-4"
                style={{
                  background: "rgba(180,211,51,0.05)",
                  border: "1px solid rgba(180,211,51,0.2)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 30px rgba(180,211,51,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                    style={{ width: "52px", height: "52px", backgroundColor: "rgba(180,211,51,0.15)", color: "#6a7f00" }}
                  >
                    <FaPills size={26} />
                  </div>
                  <h5 className="fw-bold mb-0" style={{ color: "#003366", fontSize: "1.05rem" }}>
                    Attached Pharmacy
                  </h5>
                </div>
                <p className="text-muted mb-0" style={{ lineHeight: "1.8", fontSize: "0.95rem" }}>
                  Skip the extra stop. Our fully stocked, on-site pharmacy ensures that you can pick up your prescribed medications immediately following your consultation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 3: Professional Care at Doorstep ── */}
        <div
          className="rounded-4 p-4 p-md-5 mb-5"
          style={{
            background: "#ffffff",
            boxShadow: "0 6px 30px rgba(0,0,0,0.05)",
            borderLeft: "5px solid #0072ce",
          }}
        >
          <h4 className="fw-bold mb-4 d-flex align-items-center gap-3" style={{ color: "#003366", fontSize: "1.25rem" }}>
            <span style={{ fontSize: "1.7rem" }}>🏡</span>
            Professional Care, Right at Your Doorstep
          </h4>
          <div className="row g-4">
            {/* Card E */}
            <div className="col-md-6">
              <div
                className="h-100 rounded-3 p-4"
                style={{
                  background: "rgba(0,114,206,0.04)",
                  border: "1px solid rgba(0,114,206,0.12)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,114,206,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                    style={{ width: "52px", height: "52px", backgroundColor: "rgba(0,114,206,0.1)", color: "#0072ce" }}
                  >
                    <FaHome size={26} />
                  </div>
                  <h5 className="fw-bold mb-0" style={{ color: "#003366", fontSize: "1.05rem" }}>
                    Doctor Home Visits
                  </h5>
                </div>
                <p className="text-muted mb-0" style={{ lineHeight: "1.8", fontSize: "0.95rem" }}>
                  If you or your loved ones are too unwell to travel, we bring the care to you. Our doctors are available for home consults to provide timely medical attention in the comfort of your home.
                </p>
              </div>
            </div>
            {/* Card F */}
            <div className="col-md-6">
              <div
                className="h-100 rounded-3 p-4"
                style={{
                  background: "rgba(0,114,206,0.04)",
                  border: "1px solid rgba(0,114,206,0.12)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,114,206,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                    style={{ width: "52px", height: "52px", backgroundColor: "rgba(0,114,206,0.1)", color: "#0072ce" }}
                  >
                    <FaHouseUser size={26} />
                  </div>
                  <h5 className="fw-bold mb-0" style={{ color: "#003366", fontSize: "1.05rem" }}>
                    Comprehensive Home Care Services
                  </h5>
                </div>
                <p className="text-muted mb-2" style={{ lineHeight: "1.8", fontSize: "0.95rem" }}>
                  Recovery doesn't stop when you leave the clinic. Our trained healthcare professionals provide professional home nursing services, including:
                </p>
                <ul className="mb-0" style={{ color: "#4b5563", fontSize: "0.93rem", lineHeight: "1.9", paddingLeft: "1.2rem" }}>
                  <li>Surgical dressing and wound care</li>
                  <li>Safe and sterile injection administration</li>
                  <li>Post-operative and elderly care management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ── CTA Banner ── */}
        <div
          className="rounded-4 p-4 p-md-5 text-white text-center position-relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #002244 0%, #003d7a 50%, #0072ce 100%)" }}
        >
          {/* Decorative blobs */}
          <div style={{
            position: "absolute", top: "-30px", right: "-30px",
            width: "160px", height: "160px", borderRadius: "50%",
            background: "rgba(180,211,51,0.12)", pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: "-20px", left: "5%",
            width: "100px", height: "100px", borderRadius: "50%",
            background: "rgba(255,255,255,0.06)", pointerEvents: "none",
          }} />
          <div className="position-relative">
            <h3 className="fw-bold mb-3" style={{ fontSize: "1.7rem", letterSpacing: "-0.5px" }}>
              Experience the Difference of Doctor-Led Care
            </h3>
            <p className="mb-0 mx-auto" style={{ maxWidth: "640px", opacity: 0.85, fontSize: "1rem", lineHeight: "1.75" }}>
              We bridge the gap between hospital-grade clinical excellence and warm, neighborhood accessibility.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
