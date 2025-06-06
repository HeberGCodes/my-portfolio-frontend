import FadeInSection from "../components/FadeInSection";

export default function Projects() {

  const projects = [
    {
      title: "Multi-Tenant Expense Tracker",
      description: "Full-featured Django app for managing personal and business expenses with multi-user support.",
      url: "https://github.com/HeberGCodes/multi-tenant-expense-tracker"
    },
    {
      title: "Business Email Assistant",
      description: "AI-powered assistant to summarize and respond to business emails using Django and OpenAI API.",
      url: "https://github.com/HeberGCodes/business-email-assistant"
    },
    {
      title: "Portfolio Website",
      description: "This portfolio website built with React, Tailwind CSS, and Vercel to showcase my projects and skills.",
      url: "https://github.com/HeberGCodes/my-portfolio-frontend"
    },
  ];;

    return (
      <div className="min-h-screen bg-zinc-200 text-gray-900 px-4 pt-20 pb-12">
        <FadeInSection>
          <h1 className="text-6xl font-bold text-center mb-8">Projects</h1>
        </FadeInSection>
        <div className="grid gap-8 max-w-4xl mx-auto md:grid-cols-2">
          {projects.map(({ title, description, url }) => (
            <FadeInSection key={title}>  
              <a
                key={title}                   // unique key
                href={url}                    // link to GitHub
                target="_blank"               // open in new tab
                rel="noopener noreferrer"     // security best practice
                className="block"             // make the <a> fill its container
              >
                <div className="p-6 rounded-lg shadow-lg border hover:shadow-2xl transition bg-zinc-100 h-full">
                  <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                  <p className="text-zinc-900">{description}</p>
                </div>
              </a>
            </FadeInSection>
        ))}
      </div>
    </div>
    );
  }
  