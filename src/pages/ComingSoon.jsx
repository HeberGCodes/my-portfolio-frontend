import { FaGithub, FaXTwitter } from "react-icons/fa6";

export default function ComingSoon() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-zinc-900 text-white text-center overflow-hidden">
      
      {/* Avatar */}
      <img
        src="/me_avatar.jpg"
        alt="Heber G avatar"
        className="w-32 h-32 rounded-full border-4 border-teal-300 shadow-xl mb-6 animate-fade-in"
      />

      {/* Title */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-amber-200 mb-2 animate-fade-in-slow">
        Heber G Codes
      </h1>

      {/* Coming Soon Message */}
      <p className="text-lg sm:text-xl text-zinc-200 max-w-xl animate-fade-in-delay mb-8">
        is coming soon!
        <br />
        <br />
        Stay tuned for my portfolio website's official launch.
        <br />
        I’ll be showcasing my passion for coding and software development.
        <br />
        <br />
        In the meantime, check the socials below:
      </p>

      {/* Social Links */}
      <div className="flex gap-6 text-3xl">
        <a
          href="https://github.com/HeberGCodes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-300 hover:text-amber-200 transition transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/HeberGCodes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-300 hover:text-amber-200 transition hover:scale-110"
        >
          <FaXTwitter />
        </a>
      </div>

      {/* Footer */}
      <p className="mt-12 text-sm text-zinc-500">
        © {new Date().getFullYear()} hebergcodes.com
      </p>
    </div>
  );
}
