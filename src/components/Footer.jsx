import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
      <footer className="bg-zinc-900 text-zinc-500 text-xs text-center p-1 fixed bottom-0 w-full">
        {/* Social Links */}
              <div className="justify-center flex gap-6 text-2xl p-1">
                <a
                    href="https://www.linkedin.com/in/heber-gc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-300 hover:text-amber-300 transition transform hover:scale-110"
                >
                    <FaLinkedin />
                </a>
                <a
                  href="https://github.com/HeberGCodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-300 hover:text-amber-300 transition transform hover:scale-110"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://x.com/HeberGCodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-300 hover:text-amber-300 transition hover:scale-110"
                >
                  <FaXTwitter />
                </a>
              </div>
        <p>&copy; {new Date().getFullYear()} HeberGCodes</p>
      </footer>
    );
  }
  