import { useState } from "react";
import { Button, Link, animateScroll as scroll } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const linkProps = {
      spy: true,
      smooth: true,
      offset: -60,
      duration: 500,
      className:
        "px-1 text-teal-300 hover:text-amber-200 transition transform hover:scale-110 cursor-pointer",
      activeClass: "text-amber-200",
      onClick: () => setMobileOpen(false), // close mobile menu when a link is clicked
    };

    return (
      <nav className="fixed top-0 w-full bg-zinc-900 p-4 z-50">
        <div className="flex justify-between max-w-6xl mx-auto">
          {/* Logo */}
          <span
            className="font-bold text-xl text-amber-300 hover:text-amber-200 transition cursor-pointer"
            onClick={() => {
              scroll.scrollToTop({ duration: 500 });
              setMobileOpen(false);
            }}
          >
            HeberGCodes
          </span>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-7 flex items-center">
            {/* Home: scroll to top */}
            <span
              className="text-teal-300 hover:text-amber-200 transition transform hover:scale-110 cursor-pointer"
              onClick={() => scroll.scrollToTop({ duration: 500 })} // Scroll to top when clicked
            >
              Home
            </span>

            {/* Other sections */}
           {[
            { to: "projects", label: "Projects" },
            { to: "about", label: "About" },
            { to: "contact", label: "Contact" },
           ].map(({ to, label }) => (
            <Link key={to} {...linkProps} to={to}>
              {label}
            </Link>
           ))}

           <a
            href="/blog"
            className="text-teal-300 hover:text-amber-200 transition transform hover:scale-110 cursor-pointer"
           >
            Blog
           </a>
          </div>

          {/* Hamburger Menu Button for Mobile Only */}
          <Button
            className="md:hidden text-teal-300 hover:text-teal-300 transition"
            onClick={() => setMobileOpen(true)}
          >
            <FaBars size={24} />
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
          {mobileOpen && (
          <div className="fixed inset-0 bg-zinc-900/90 flex flex-col items-center justify-center space-y-8 text-2xl">
            {/* Close Icon */}
            <button
              className="absolute top-4 right-4 text-amber-300 hover:text-teal-300 transition"
              onClick={() => setMobileOpen(false)}
            >
              <FaTimes size={28} />
            </button>

            {/* Mobile Links */}
            <span
              onClick={() => {
                scroll.scrollToTop({ duration: 500 });
                setMobileOpen(false);
              }}
              className="text-zinc-100 hover:text-amber-300 transition transform hover:scale-110 cursor-pointer"
            >
              Home
            </span>
            <Link key="projects" {...linkProps} to="projects" className="text-zinc-100 hover:text-amber-300 transition transform hover:scale-110 cursor-pointer">
              Projects
            </Link>
            <Link key="about" {...linkProps} to="about" className="text-zinc-100 hover:text-amber-300 transition transform hover:scale-110 cursor-pointer">
              About
            </Link>
            <Link key="contact" {...linkProps} to="contact" className="text-zinc-100 hover:text-amber-300 transition transform hover:scale-110 cursor-pointer">
              Contact
            </Link>
            <a
              href="/blog"
              className="text-zinc-100 hover:text-amber-300 transition transform hover:scale-110 cursor-pointer"
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </a>
          </div>
        )}

      </nav>
    );
  }
  