import { Link as RouterLink } from "react-router-dom";

export default function Blog() {
  return (
    <div className="min-h-screen bg-amber-200 text-zinc-900">
        {/* Simple Navbar with just the logo/brand */}
        <nav className="fixed top-0 w-full bg-zinc-900 p-4 z-50">
            <div className="max-w-6xl mx-auto">
            <RouterLink
                to="/"
                className="font-bold text-xl text-amber-300 hover:text-amber-200 transition"
            >
                HeberGCodes
            </RouterLink>
            </div>
        </nav>

        {/* Blog Landing Content */}
        <div className="flex flex-col items-center justify-center py-24 px-6">
            <h1 className="opacity-0 animate-fade-in text-6xl font-bold text-center mb-8">
                Blog Coming Soon!
            </h1>

            <p className="opacity-0 animate-fade-in-slow text-lg text-zinc-900 text-center max-w-lg">
                I'm building out content and will
                have posts here soon! In the meantime, click the logo above to return
                to the main page.
            </p>
        </div>
    </div>
  );
}