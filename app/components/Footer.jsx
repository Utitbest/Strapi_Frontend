import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa6";


import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 mt-10 flex-1">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-red-600">UTIT<span className="text-gray-300">BEST</span></h1>
          <p className="text-sm text-gray-400">© 2015 UTITBEST. All rights reserved.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
          <ul className="space-y-2">
            <li><Link href="/" className="text-gray-500 font-semibold text-[13px] hover:text-white">Home</Link></li>
            <li><Link href="/categories" className="text-gray-500 font-semibold text-[13px] hover:text-white">Categories</Link></li>
            <li><Link href="/authors" className="text-gray-500 font-semibold text-[13px] hover:text-white">Authors</Link></li>
          </ul>
          <ul className="space-y-2">
            <li><Link href="/blog" className="text-gray-500 font-semibold text-[13px] hover:text-white">Blog</Link></li>
            <li><Link href="/about" className="text-gray-500 font-semibold text-[13px] hover:text-white">About</Link></li>
            <li>
              <Link href="/contact" className="text-gray-500 font-semibold text-[13px] hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex gap-3 w-full justify-between">
            {[FaLinkedin, FaInstagram, FaWhatsapp, FaTwitter, FaFacebookF].map((Icon, i) => (
              <a key={i} href="#" className="p-2 rounded-full bg-[#1a1a1a] hover:bg-gray-700 transition">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <form className="flex gap-2 flex-wrap">
            <input
              type="email"
              placeholder="Email Address..."
              className="flex-1 px-4 py-2 rounded-lg bg-[#1a1a1a] text-white placeholder:text-gray-400 outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-amber-500 text-black font-semibold hover:bg-amber-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
