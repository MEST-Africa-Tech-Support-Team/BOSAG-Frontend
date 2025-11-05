import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about",
      dropdown: [
        { name: "Industry Overview", path: "/about/industry-overview" },
        { name: "Who We Are", path: "/about/who-we-are" },
        { name: "Governance Structure", path: "/about/governance" },
        { name: "Board & Management", path: "/about/board" },
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

  // 👇 Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowAboutDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="BOSAG" className="h-20 sm:h-30" />
          </Link>

          <ul className="hidden md:flex items-center gap-8 text-[16px] font-medium">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="relative"
                ref={link.name === "About" ? dropdownRef : null}
                onMouseEnter={() => link.dropdown && setShowAboutDropdown(true)}
              >
                <Link
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`flex items-center gap-1 transition-colors border-b-2 ${isActive(link.path)
                      ? "text-[#0a0a3a] border-[#0a0a3a]"   // active link: dark text + underline
                      : "text-[#191970] border-transparent hover:text-[#0a0a3a] hover:border-[#0a0a3a]"
                    }`}

                  
                >
                {link.name}
                {link.dropdown && <ChevronDown size={18} />}
              </Link>

                {/* About Dropdown */ }
                {
                link.dropdown && showAboutDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-[#f8f9ff] shadow-md text-center z-50">
                    <ul className="divide-y divide-[#191970]/30">
                      {link.dropdown.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.path}
                            onClick={() => handleNavClick(item.path)}
                            className={`block py-3 text-[15px] text-[#191970] hover:bg-[#f8f9ff] transition-colors ${isActive(item.path) ? "font-semibold" : ""
                              }`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              }
              </li>
            ))}
        </ul>

        <Link to="/signup" className="hidden md:block ml-4">
          <button className="bg-[#191970] hover:bg-[#0a0a3a] text-white text-[15px] font-medium px-6 py-2.5 rounded-lg transition-colors">
            GET INVOLVED
          </button>
        </Link>

        {/* Mobile Menu Toggle */}
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
                  className={`block px-6 py-3 ${isActive(link.path)
                      ? "text-[#0a0a3a]"
                      : "text-[#191970] hover:text-[#0a0a3a]"
                    }`}
                >
                  {link.name}
                </Link>

                {link.dropdown && (
                  <div className="pl-8 border-l border-[#191970]/30">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => handleNavClick(item.path)}
                        className={`block py-2 text-[15px] ${isActive(item.path)
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
              <Link to="/signup" onClick={() => setMenuOpen(false)}>
                <button className="w-full bg-[#191970] hover:bg-[#0a0a3a] text-white text-[15px] font-medium px-6 py-2 rounded-lg transition-colors">
                  GET INVOLVED
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
    </nav >
  );
};

export default Navbar;
