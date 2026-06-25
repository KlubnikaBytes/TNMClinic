import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import GalleryAdmin from "../pages/GalleryAdmin";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery-admin" element={<GalleryAdmin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;