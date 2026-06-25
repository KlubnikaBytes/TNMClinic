import React, { useState, useEffect } from 'react';

const GalleryAdmin = () => {
  const [images, setImages] = useState<string[]>([]);
  const [isCompressing, setIsCompressing] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const savedImages = localStorage.getItem('clinic_gallery');
    if (savedImages) {
      try {
        setImages(JSON.parse(savedImages));
      } catch (e) {
        console.error("Failed to parse gallery images");
      }
    }
  }, []);

  // Save to local storage whenever images array changes
  useEffect(() => {
    localStorage.setItem('clinic_gallery', JSON.stringify(images));
  }, [images]);

  // Image Compression function
  const compressImage = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 800; // max width for gallery
          const MAX_HEIGHT = 800; // max height for gallery
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);

          // Compress to WebP for smaller size
          const dataUrl = canvas.toDataURL('image/webp', 0.7);
          resolve(dataUrl);
        };
        img.onerror = (err) => reject(err);
      };
      reader.onerror = (err) => reject(err);
    });
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    setIsCompressing(true);

    const files = Array.from(e.target.files);
    const newImages: string[] = [];

    try {
      for (const file of files) {
        if (!file.type.startsWith('image/')) continue;
        const compressedBase64 = await compressImage(file);
        newImages.push(compressedBase64);
      }
      
      setImages(prev => [...newImages, ...prev]);
    } catch (error) {
      console.error("Error compressing images:", error);
      alert("Failed to process some images.");
    } finally {
      setIsCompressing(false);
      // Reset input
      e.target.value = '';
    }
  };

  const handleDelete = (indexToDelete: number) => {
    if (window.confirm("Are you sure you want to delete this image?")) {
      setImages(prev => prev.filter((_, index) => index !== indexToDelete));
    }
  };

  return (
    <div className="container py-5" style={{ minHeight: "100vh" }}>
      <div className="mb-4">
        <span className="premium-subtitle">Dashboard</span>
        <h2 className="display-6 premium-title">Gallery Admin</h2>
        <p className="text-muted">Upload and manage photos for the public gallery.</p>
        
        <div className="alert alert-warning" role="alert" style={{ fontSize: "0.9rem" }}>
          <strong>Note:</strong> Since this is a frontend-only demo, images are saved locally in your browser. 
          There is a strict storage limit. High-resolution photos are automatically compressed upon upload.
        </div>
      </div>

      <div className="card border-0 shadow-sm rounded-4 p-4 mb-5" style={{ border: "1px solid #e2e8f0" }}>
        <h5 className="fw-bold mb-3">Upload New Photos</h5>
        <div className="d-flex align-items-center gap-3">
          <input 
            type="file" 
            multiple 
            accept="image/*" 
            onChange={handleFileUpload} 
            className="form-control"
            style={{ maxWidth: "400px" }}
            disabled={isCompressing}
          />
          {isCompressing && <span className="text-primary spinner-border spinner-border-sm" role="status"></span>}
          {isCompressing && <span className="text-muted small">Compressing and saving...</span>}
        </div>
      </div>

      <h5 className="fw-bold mb-4">Current Gallery ({images.length} images)</h5>
      
      {images.length === 0 ? (
        <div className="text-center py-5 bg-light rounded-4 text-muted">
          No images uploaded yet. Upload some photos above.
        </div>
      ) : (
        <div className="row g-4">
          {images.map((src, idx) => (
            <div className="col-6 col-md-4 col-lg-3" key={idx}>
              <div className="card border-0 rounded-4 overflow-hidden shadow-sm position-relative">
                <img 
                  src={src} 
                  alt={`Gallery img ${idx}`} 
                  className="card-img-top" 
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body p-2 text-center bg-white">
                  <button 
                    onClick={() => handleDelete(idx)}
                    className="btn btn-sm btn-outline-danger rounded-pill px-3"
                  >
                    Delete Image
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryAdmin;
