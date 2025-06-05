import FadeInSection from "../components/FadeInSection";

export default function About() {
    return (
      <div className="min-h-screen flex flex-col items-center bg-amber-300 text-zinc-900 p-6 pt-24 pb-12">
        <FadeInSection>
          <h1 className="text-6xl font-bold text-center mb-8">About Me</h1>
        </FadeInSection>

        <FadeInSection>
          <p className="text-xl text-zinc-900 text-center max-w-xl">
            I’m passionate about web and software development, especially Python and Django. I enjoy solving problems, building real-world applications, and constantly learning.
            This site showcases my work, goals, and what I bring to the table.
          </p>
        </FadeInSection>
      </div>
    );
  }
  