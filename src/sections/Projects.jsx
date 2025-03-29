export default function Projects() {
    return (
      <div className="min-h-screen bg-white text-gray-900 px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid gap-8 max-w-5xl mx-auto md:grid-cols-2">
          {/* Replace these static examples later with dynamic content */}
          <div className="p-6 rounded-lg shadow-lg border">
            <h3 className="text-2xl font-semibold mb-2">Business Email Assistant</h3>
            <p className="text-gray-700">AI-powered assistant to summarize and respond to business emails using Django and OpenAI API.</p>
          </div>
          <div className="p-6 rounded-lg shadow-lg border">
            <h3 className="text-2xl font-semibold mb-2">Multi-Tenant Expense Tracker</h3>
            <p className="text-gray-700">Full-featured Django app for managing personal and business expenses with multi-user support.</p>
          </div>
        </div>
      </div>
    );
  }
  