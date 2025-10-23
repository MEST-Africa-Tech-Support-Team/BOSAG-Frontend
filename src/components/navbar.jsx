import { useState } from "react";
import { Link, useLocation } from "react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about",
      dropdown: [
        { name: "Industry Overview", path: "/about/industry-overview" },
        { name: "Who We Are", path: "/about/who-we-are" },
        { name: "Board Members", path: "/about/board-members" },
        { name: "Governance", path: "/about/governance" },
      ],
    },
    { name: "Sector Reports", path: "/sector-reports" },
    { name: "Membership", path: "/membership" },
    { name: "Blog", path: "/blog" },
  ];

  const handleNavClick = () => {
    setShowAboutDropdown(false);
    setMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="bg-white shadow-sm sticky top-0 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between h-16">
         
          <Link to="/" className="flex items-center" aria-label="BOSAG Home">
            <img src={Logo} alt="BOSAG" className="h-25 sm:h-35" />
          </Link>

          
          <ul className="hidden md:flex items-center gap-8 text-[16px] font-medium">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setShowAboutDropdown(true)}
                onMouseLeave={() => link.dropdown && setShowAboutDropdown(false)}
              >
                <Link
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`flex items-center gap-1 transition-colors ${
                    isActive(link.path)
                      ? "text-[#0a0a3a]"
                      : "text-[#191970] hover:text-[#0a0a3a]"
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={18} />}
                </Link>

                {link.dropdown && showAboutDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50 border border-blue-100">
                    <ul role="menu">
                      {link.dropdown.map((item) => (
                        <li
                          key={item.name}
                          role="none"
                          className="border-b border-blue-100 last:border-b-0"
                        >
                          <Link
                            to={item.path}
                            onClick={() => handleNavClick(item.path)}
                            role="menuitem"
                            className={`block px-4 py-3 text-[15px] transition-colors ${
                              isActive(item.path)
                                ? "text-[#0a0a3a] font-semibold"
                                : "text-[#191970]"
                            }`}
                          >
                            <span className="block border-b-2 border-[#0066ff] pb-1">
                              {item.name}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          
          <Link to="/get-involved" className="hidden md:block ml-4">
            <button className="bg-[#191970] hover:bg-[#0a0a3a] text-white text-[15px] font-medium px-6 py-2.5 rounded-lg transition-colors">
              GET INVOLVED
            </button>
          </Link>

          
          <button
            className="md:hidden text-[#191970]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      
        {menuOpen && (
          <div className="md:hidden mt-2 bg-white border-t border-gray-200 rounded-b-lg shadow-md">
            <ul className="flex flex-col text-[16px] font-medium">
              {navLinks.map((link) => (
                <li key={link.name} className="relative">
                  <Link
                    to={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={`block px-6 py-3 ${
                      isActive(link.path)
                        ? "text-[#0a0a3a]"
                        : "text-[#191970] hover:text-[#0a0a3a]"
                    }`}
                  >
                    {link.name}
                  </Link>

                  
                  {link.dropdown && (
                    <div className="pl-8">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => handleNavClick(item.path)}
                          className={`block py-2 text-[15px] ${
                            isActive(item.path)
                              ? "text-[#0a0a3a] font-semibold"
                              : "text-[#191970]"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
              <li className="px-6 py-4">
                <Link to="/get-involved" onClick={() => setMenuOpen(false)}>
                  <button className="w-full bg-[#191970] hover:bg-[#0a0a3a] text-white text-[15px] font-medium px-6 py-2 rounded-lg transition-colors">
                    GET INVOLVED
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
