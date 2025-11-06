import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import PageBanner from "../components/gallery-header.jsx";

const VideoGallery = () => {
  const [loading, setLoading] = useState(true);

  const videos = new Array(6).fill(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#f9f9ff] min-h-screen flex flex-col">
      <Navbar />

      <PageBanner title="Our Videos" subtitle="" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 flex-1">
        <div
          className="grid gap-6 
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {videos.map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md bg-white relative group"
            >
              {loading ? (
                <div className="animate-pulse bg-gray-200 h-64 w-full rounded-2xl flex items-center justify-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse" />
                </div>
              ) : (
                // Placeholder for future video embedding
                <div className="h-64 w-full bg-black rounded-2xl flex items-center justify-center text-white">
                  <p>Video {index + 1}</p>
                </div>
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

export default VideoGallery;
