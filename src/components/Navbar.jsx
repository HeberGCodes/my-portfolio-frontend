import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
    return (
      <nav className="fixed top-0 w-full bg-zinc-900 p-4 z-50">
        <div className="flex justify-between max-w-6xl mx-auto">
          <span
            className="font-bold text-xl text-amber-300 cursor-pointer"
            onClick={() => scroll.scrollToTop({ duration: 500 })} // Scroll to top when clicked
          >
            HeberGCodes
          </span>
          <div className="space-x-6 flex items-center">
            {/* Home: scrool to top */}
            <span
              className="text-teal-300 hover:text-amber-200 transition transform hover:scale-110 cursor-pointer"
              onClick={() => scroll.scrollToTop({ duration: 500 })} // Scroll to top when clicked
            >
              Home
            </span>
            {/* Other sections */}
           {[
            { to: "about", label: "About" },
            { to: "projects", label: "Projects" },
            { to: "contact", label: "Contact" },
           ].map(({ to, label }) => (
            <Link
              key={to} // Unique key for each link
              activeClass="text-amber-200"
              to={to} // Scroll to the section with this ID
              spy={true} // Watch the scroll position and set the active class when in view
              smooth={true} // Smooth scrolling
              offset={0} // Offset for fixed navbar height so the section is not hidden behind the navbar
              duration={500} // Duration of the scroll animation
              className="text-teal-300 hover:text-amber-200 transition transform hover:scale-110 cursor-pointer"
            >
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
        </div>
      </nav>
    );
  }
  