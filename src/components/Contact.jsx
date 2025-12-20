// file: src/components/Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">Open to collaborations, research, and opportunities.</p>
      </div>
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">Connect With Me <span className="ml-1">🚀</span></h3>
        
        {/* Providing the email address explicitly above the form as an alternative contact point */}
        <p className="text-primary text-center font-medium my-4 text-lg">
          Email: yashbhawarkar@gmail.com
        </p>

        {/* The contact form structure from the user's provided HTML */}
        <form className="mt-4 flex flex-col space-y-4">
          <input type="email" name="user_email" placeholder="Your Email" required className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500" />
          <input type="text" name="user_name" placeholder="Your Name" required className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500" />
          <input type="text" name="subject" placeholder="Subject" required className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500" />
          <textarea name="message" placeholder="Message" rows="4" required className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"></textarea>
          <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition">Send</button>
        </form>
      </div>
    </section>
  );
}