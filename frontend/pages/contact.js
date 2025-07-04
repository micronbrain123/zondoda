export default function Contact() {
  return (
    <div className="min-h-screen bg-[#fefae0] p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#283618] mb-8 text-center">Get In Touch</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-[#182219] mb-6">Send us a message</h2>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 border border-[#82b674] rounded-md focus:outline-none focus:ring-2 focus:ring-[#91ab3e]"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 border border-[#82b674] rounded-md focus:outline-none focus:ring-2 focus:ring-[#91ab3e]"
              />
              <textarea 
                placeholder="Your Message" 
                rows="4"
                className="w-full p-3 border border-[#82b674] rounded-md focus:outline-none focus:ring-2 focus:ring-[#91ab3e]"
              ></textarea>
              <button className="w-full bg-[#182219] hover:bg-[#132a13] hover:text-white text-[#a7c957] font-semibold py-3 rounded-md transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-[#182219] rounded-lg shadow-lg p-6 text-white">
            <h2 className="text-2xl font-semibold text-[#a7c957] mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-[#fce148]">📍</span>
                <span>123 Car Street, London, United Kingdom</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[#fce148]">📞</span>
                <span>+44 20 5843210</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[#fce148]">✉️</span>
                <span>info@zondoda.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[#fce148]">🕒</span>
                <span>Mon - Sun: 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}