import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";


import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Blog from "./pages/blog.jsx";
import BoardMembers from "./pages/board-members.jsx";
import Contact from "./pages/contact.jsx";
import Gallery from "./pages/gallery.jsx";
import Governance from "./pages/governance.jsx";
import IndustryOverview from "./pages/industry-overview";
import Leadership from "./pages/leadership.jsx";
import Login from "./pages/log-in.jsx";  
import Signup from "./pages/sign-up.jsx";
import Reset from "./pages/reset-password.jsx";
import WhoWeAre from "./pages/who-we-are.jsx";
import NotFound from "./pages/not-found.jsx";



const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/blog", element: <Blog /> },
  { path: "/board-members", element: <BoardMembers /> },
  { path: "/contact", element: <Contact /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/governance", element: <Governance /> },
  { path: "/industry-overview", element: <IndustryOverview /> },
  { path: "/leadership", element: <Leadership /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/reset", element: <Reset /> },
  { path: "/who-we-are", element: <WhoWeAre /> },
  { path: "*", element: <NotFound /> },
]);



export default function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}


