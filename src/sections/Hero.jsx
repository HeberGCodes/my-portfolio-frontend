export default function Hero() {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-zinc-800 text-white pb-6">
        {/* Avatar */}
        <img
          src="/me_avatar.jpg"
          alt="Heber G avatar"
          className="w-36 h-36 shadow-lg mb-8 animate-fade-in"
        />
        <h1 className="opacity-0 animate-fade-in-slow text-5xl sm:text-6xl font-bold mb-8 text-center">
          Hi, I'm Heber
        </h1>
        <p className="opacity-0 animate-fade-in-delay text-xl sm:text-xl text-zinc-100 max-w-xl text-center mb-8">
          Welcome to my portfolio website! 
          <br/>
          Check out my projects and learn more about me.
        </p>
      </div>
    );
  }
  