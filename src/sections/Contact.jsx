export default function Contact() {
    return (
      <div className="min-h-screen bg-gray-100 text-gray-800 px-4 pt-24 pb-12">
        <h2 className="text-6xl font-bold text-center mb-12">Contact</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            rows="5"
            placeholder="Message"
            className="w-full p-3 border rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }
  