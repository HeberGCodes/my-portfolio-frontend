export default function Navbar() {
    return (
      <nav className="fixed top-0 w-full bg-gray-900 text-white p-4 z-50">
        <div className="flex justify-between max-w-6xl mx-auto">
          <span className="font-bold text-xl">HeberGCodes</span>
          <div className="space-x-4">
            <a href="#hero" className="hover:text-gray-400">Home</a>
            <a href="#about" className="hover:text-gray-400">About</a>
            <a href="#projects" className="hover:text-gray-400">Projects</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
            <a href="/blog" className="hover:text-blue-400">Blog</a>
          </div>
        </div>
      </nav>
    );
  }
  