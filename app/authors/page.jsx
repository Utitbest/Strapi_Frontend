import { fetchAPI } from "@/lib/api";
import Link from "next/link";
export default async function AuthorsPage() {
  const STRAPI_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
  let authors = []
  
    try {
      const authorsRes = await fetchAPI("/api/authors?populate=*");

      authors = authorsRes?.data || [];
    } catch (error) {
      console.error("Failed to fetch data from Strapi:", error);
    }

    if(!authors) {
      return (
        <div className="text-center py-20 text-3xl">
          Error fetching Authors
        </div>
      );
    }

  return (
    <section className="bg-[#0f0f0f] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Meet Our Authors</h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          The voices behind MagOne — each bringing unique expertise, passion, and perspective to our lifestyle community.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {authors.map((author, i) => {
          const imgUrl = author.authorpicture?.url
            ? author.authorpicture.url.startsWith("http")
              ? author.authorpicture.url
              : `${STRAPI_URL}${author.authorpicture.url}`
            : "/placeholder.jpg";
          return(
          <div key={i} className="bg-[#181818] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
            <img
              src={imgUrl}
              alt={author.name}
              className="w-full h-64 object-cover object-top"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-white">{author.name}</h2>
              <p className="text-sm text-amber-400 mb-2">{author.role}</p>
              <p className="text-sm text-gray-300">{author.bio}</p>
              <Link
                href={`/author/${author.slug}`}
                className="inline-block mt-4 px-4 py-2 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-600 transition"
              >
                View Articles
              </Link>
            </div>
          </div>
        )})}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="bg-[#181818] rounded-xl p-6 shadow-md">
          <h3 className="text-lg font-bold mb-2">Join Our Community</h3>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe for weekly updates, author highlights, and exclusive content.
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

        <div className="bg-[#181818] rounded-xl p-6 shadow-md lg:col-span-2">
          <h3 className="text-lg font-bold mb-4">Popular Contributors</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            {authors.slice(0, 4).map((author, i) => (
              <li key={i} className="flex items-center justify-between">
                <span>{author.name}</span>
                <a
                  href={`/author/${author.slug}`}
                  className="text-amber-400 hover:underline"
                >
                  View
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
