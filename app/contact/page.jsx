import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

export default function ContactPage() {
  return (
    <section className="bg-[#171717] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-400 text-lg">
          We'd love to hear from you. Whether it's feedback, questions, or just a hello.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
            <p className="text-gray-400">Feel free to reach out via email or phone.</p>
          </div>
          <div className="space-y-3 text-sm text-gray-300">
            <p><span className="font-semibold text-white">Email:</span>utitbesta@gmail.com</p>
            <p><span className="font-semibold text-white">Phone:</span> +234 806 330 8044</p>
            <p><span className="font-semibold text-white">Location:</span> Uyo, Akwa Ibom, Nigeria</p>
          </div>

          <div className="flex gap-4 mt-6">
            {[FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp].map((Icon, i) => (
              <a key={i} href="#" className="p-2 rounded-full bg-[#1a1a1a] hover:bg-gray-700 transition">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <form className="bg-[#181818] p-8 rounded-2xl shadow-lg space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-[#1a1a1a] text-white placeholder:text-gray-400 outline-none"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-[#1a1a1a] text-white placeholder:text-gray-400 outline-none"
              placeholder="Your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="5"
              className="w-full px-4 py-2 rounded-lg bg-[#1a1a1a] text-white placeholder:text-gray-400 outline-none resize-none"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-amber-500 text-black font-semibold hover:bg-amber-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
