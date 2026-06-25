import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Gallery = () => {
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    const savedImages = localStorage.getItem('clinic_gallery');
    if (savedImages) {
      try {
        setImages(JSON.parse(savedImages));
      } catch (e) {
        console.error("Failed to parse gallery images");
      }
    }
  }, []);

  return (
    <>
      <Navbar />
      
      <main style={{ minHeight: "80vh", backgroundColor: "#fbfdff", paddingTop: "100px" }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <span className="premium-subtitle">Our Clinic</span>
            <h1 className="display-4 premium-title mb-3">Photo Gallery</h1>
            <p className="text-muted fs-5 mx-auto" style={{ maxWidth: "600px" }}>
              Take a look inside our state-of-the-art facilities and meet our dedicated healthcare team.
            </p>
          </div>

          {images.length === 0 ? (
            <div className="text-center py-5">
              <div className="p-5 rounded-4" style={{ backgroundColor: "#f8fafc", border: "1px dashed #cbd5e1" }}>
                <p className="text-muted fs-5 mb-0">No photos have been added to the gallery yet.</p>
              </div>
            </div>
          ) : (
            <div className="row g-4">
              {images.map((src, idx) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
                  <div 
                    className="rounded-4 overflow-hidden shadow-sm"
                    style={{ 
                      cursor: "pointer",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 .125rem .25rem rgba(0,0,0,.075)";
                    }}
                    onClick={() => setSelectedImage(src)}
                  >
                    <img 
                      src={src} 
                      alt={`Clinic Facility ${idx}`} 
                      className="w-100" 
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ backgroundColor: "rgba(0,0,0,0.85)", zIndex: 1050, backdropFilter: "blur(5px)" }}
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="position-absolute btn btn-link text-white" 
            style={{ top: "20px", right: "20px", fontSize: "2rem", textDecoration: "none" }}
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <img 
            src={selectedImage} 
            alt="Fullscreen View" 
            style={{ maxHeight: "90vh", maxWidth: "90vw", objectFit: "contain", borderRadius: "8px" }}
            onClick={(e) => e.stopPropagation()} // Prevent click from closing immediately if clicking on image
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
