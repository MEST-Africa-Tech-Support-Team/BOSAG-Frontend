import React from "react";
import { Outlet } from "react-router";

import ScrollToTop from "../src/components/scrollToTop";

const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
    
      <Outlet />
     
    </>
  );
};

export default RootLayout;
