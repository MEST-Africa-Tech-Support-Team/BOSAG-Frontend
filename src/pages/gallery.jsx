import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import PageBanner from "../components/gallery-header.jsx";

// Import your local images (add or remove as needed)
import img1 from "../assets/images/all-images/gallery1.jpg";
import img2 from "../assets/images/all-images/gallery2.jpg";
import img3 from "../assets/images/all-images/gallery3.jpg";
import img4 from "../assets/images/all-images/gallery4.jpg";
import img5 from "../assets/images/all-images/gallery5.jpg";
import img6 from "../assets/images/all-images/gallery6.jpg";


const ImageGallery = () => {
  const [loading, setLoading] = useState(true);

  const images = [img1, img2, img3, img4, img5, img6,];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#f9f9ff] min-h-screen flex flex-col">
      <Navbar />

      <PageBanner title="Our Gallery" subtitle="" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 flex-1">

        <div
          className="grid gap-6 
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md bg-white relative group"
            >
              {loading ? (
                <div className="animate-pulse bg-gray-200 h-64 w-full rounded-2xl" />
              ) : (
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  loading="lazy"
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              )}

              {!loading && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ImageGallery;
