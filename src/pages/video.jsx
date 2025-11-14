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

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 flex-1 text-center text-gray-600">
        There are currently no videos available. Please check back later.
      </div>

      <Footer />
    </div>
  );
};

export default VideoGallery;
