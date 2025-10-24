import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router"; 


import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Blog from "./pages/blog.jsx";
import BoardMembers from "./pages/board-members.jsx";
import Contact from "./pages/contact.jsx";
import Gallery from "./pages/gallery.jsx";
import Governance from "./pages/governance.jsx";
import IndustryOverview from "./pages/industry-overview.jsx";
import Leadership from "./pages/leadership.jsx";
import Login from "./pages/log-in.jsx";  
import Signup from "./pages/sign-up.jsx";
import Reset from "./pages/reset-password.jsx";
import WhoWeAre from "./pages/who-we-are.jsx";
import MembershipPackages from "./pages/membership-packages.jsx";
import NotFound from "./pages/not-found.jsx";
// import Footer from "./components/footer.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
     
      <Route path="/" element={<Home />} />

      
      <Route path="/about" element={<About />} />
      <Route path="/about/who-we-are" element={<WhoWeAre />} />
      <Route path="/about/leadership" element={<Leadership />} />
      <Route path="/about/governance" element={<Governance />} />
      <Route path="/about/industry-overview" element={<IndustryOverview />} />
      <Route path="/about/board-members" element={<BoardMembers />} />

      
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/membership" element={<MembershipPackages />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
