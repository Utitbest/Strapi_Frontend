import Link from "next/link";
export default function AboutPage() {
  return (
    <section className="bg-[#0f0f0f] text-white py-16 px-6">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-400 text-lg">
          Welcome to <span className="text-amber-500 font-semibold">UTITBEST</span> — your go-to destination for lifestyle inspiration, wellness wisdom, and travel tales.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <p className="text-gray-300 text-md leading-relaxed">
          At MagOne, we believe that life is meant to be lived fully — with intention, curiosity, and joy. Our mission is to empower readers to embrace mindful living, explore the world, and cultivate personal growth through engaging stories, expert tips, and authentic experiences.
        </p>
      </div>

      {/* Pillars Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
        {[
          { title: "Wellness", desc: "Practical self-care, mental clarity, and nourishing habits for a balanced life." },
          { title: "Travel", desc: "Curated guides, hidden gems, and photography tips for unforgettable adventures." },
          { title: "Lifestyle", desc: "From home design to fashion and food — we celebrate everyday beauty." },
          { title: "Community", desc: "We spotlight voices, stories, and ideas that bring people together." },
          { title: "Creativity", desc: "Inspiration for makers, dreamers, and storytellers across every medium." },
          { title: "Sustainability", desc: "Conscious choices that support the planet and future generations." },
        ].map((pillar, i) => (
          <div key={i} className="bg-[#181818] rounded-xl p-6 text-center shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-amber-400 mb-2">{pillar.title}</h3>
            <p className="text-sm text-gray-400">{pillar.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Journey</h2>
        <p className="text-gray-400 mb-6">
          Whether you're here to learn, share, or simply be inspired — MagOne is your space. Subscribe to our newsletter, follow us on socials, and be part of a growing lifestyle community.
        </p>
        <nav>
          <Link href="/contact" className="inline-block px-6 py-3 bg-amber-500 text-black font-semibold rounded-xl hover:bg-amber-600 transition">
          Contact Us
          </Link>
        </nav>
       
      </div>
    </section>
  );
}
