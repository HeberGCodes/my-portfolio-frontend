import FadeInSection from "../components/FadeInSection";
import { useState } from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const email = "hebergcodes@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/heber-gc";

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-teal-700 px-4 pt-24 pb-12">
      <FadeInSection>
        <h1 className="text-6xl font-bold text-zinc-100 text-center mb-12">Contact</h1>
      </FadeInSection>
      
      <FadeInSection>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Email Card */}
          <button
            onClick={copyToClipboard}
            className="flex flex-col items-center justify-center text-center p-8 rounded-lg shadow-lg hover:shadow-2xl transition bg-zinc-800 h-full"
          >
            <FaEnvelope className="text-amber-300 hover:text-amber-200 text-6xl mb-2" />
            <h3 className="text-zinc-100 text-2xl mb-2">{copied ? "Copied!" : "Copy email"}</h3>
          </button>

          {/* LinkedIn Card */}
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-center p-8 rounded-lg shadow-lg hover:shadow-2xl transition bg-zinc-800 h-full"
          >
            <FaLinkedin className="text-amber-300 hover:text-amber-200 text-6xl mb-2" />
            <h3 className="text-zinc-100 text-2xl mb-2">Send message</h3>
          </a>
        </div>
      </FadeInSection>
    </div>
  );
}