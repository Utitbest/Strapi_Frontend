import Link from "next/link";
export default function CategoriesPage() {
  const categories = [
    {
      name: "Wellness",
      description: "Mindful living, self-care routines, and mental health tips for a balanced life.",
      image: "/placeholder.jpg",
      author: "Jane Larsen",
      date: "Nov 19, 2025",
    },
    {
      name: "Travel",
      description: "Explore destinations, travel hacks, and cultural experiences around the world.",
      image: "/download (1).jpeg",
      author: "Travel Lens",
      date: "Oct 10, 2025",
    },
    {
      name: "Food",
      description: "Healthy recipes, indulgent treats, and culinary inspiration for every mood.",
      image: "/download (2).jpeg",
      author: "Chef Amaka",
      date: "Sep 28, 2025",
    },
    {
      name: "Style",
      description: "Fashion, beauty, and home aesthetics that elevate your everyday.",
      image: "/download (3).jpeg",
      author: "Isabella Taylor",
      date: "Aug 15, 2025",
    },
  ];

  return (
    <section className="bg-[#0f0f0f] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Explore Our Categories</h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Discover curated content across wellness, travel, food, and style — each crafted to inspire your lifestyle journey.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <Link
              key={i}
              href="/category"
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                <h2 className="text-xl font-bold text-white">{cat.name}</h2>
                <p className="text-sm text-gray-300 mt-1">{cat.description}</p>
                <small className="text-xs text-gray-400 mt-2 block">
                  By {cat.author} • {cat.date}
                </small>
              </div>
            </Link>
          ))}
        </div>

        <aside className="flex flex-col gap-10">
          <div className="bg-[#181818] rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-bold mb-2">Stay Inspired</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe for weekly lifestyle tips and exclusive content.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-lg bg-[#1a1a1a] text-white placeholder:text-gray-400 outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="bg-[#181818] rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
            <div className="flex flex-wrap gap-3 text-sm">
              {["#selfcare", "#travelhacks", "#recipes", "#minimalism", "#journaling", "#wellness"].map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-[#1a1a1a] rounded-full hover:bg-gray-700 transition cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#181818] rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4 flex-wrap">
              {["Facebook", "Instagram", "X", "Pinterest"].map((platform, i) => (
                <button key={i} className="bg-[#1a1a1a] px-4 py-2 rounded-full text-sm hover:bg-gray-700 transition">
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
