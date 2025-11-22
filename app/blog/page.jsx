import { fetchAPI } from "@/lib/api";
import Link from "next/link";

export default async function BlogHomePage() {
   let posts = [];
  let authors = [];
  const STRAPI_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

  try {
    const postsRes = await fetchAPI("/api/posts?populate=*&sort=createdAt:desc");
    // const authorsRes = await fetchAPI("/api/authors?populate=*");

    posts = postsRes?.data || [];
    // authors = authorsRes?.data || [];
  } catch (error) {
    console.error("Failed to fetch data from Strapi:", error);
  }

  const heroPost = posts[0]
    ? {
        title: posts[0].title,
        content: posts[0].desc || "",
        excerpt: posts[0].excerpt || "",
        slug: posts[0].postId,
        thumbnail: posts[0].thumbnail?.url
          ? posts[0].thumbnail.url.startsWith("http")
            ? posts[0].thumbnail.url
            : `${STRAPI_URL}${posts[0].thumbnail.url}`
          : "/placeholder.jpg",
        author: posts[0].author?.name || "Unknown",
        date: posts[0].publishedAt
          ? new Date(posts[0].publishedAt).toLocaleDateString()
          : "Unknown",
        quote: posts[0].quote || "",
      }
    : null;

    if (!heroPost) return (
        <div className="flex flex-col items-center justify-center h-[500px] bg-[#0f0f0f] text-red-500">
          <div className="bg-[#1a1a1a] p-8 rounded-lg shadow-lg text-center">
            <svg className="w-12 h-12 mx-auto mb-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M12 9v2m0 4h.01M12 5a7 7 0 100 14a7 7 0 000-14z" />
            </svg>
            <h2 className="text-xl font-bold mb-2">Oops! Something went wrong</h2>
            <p className="text-gray-400 mb-4">We couldn’t fetch your post. Please try again later.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition"
            >
              Retry
            </button>
          </div>
        </div>
      );
  const remains = posts.slice(1)

  return (
    <section className="bg-[#0f0f0f] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Welcome to Utitbest Log</h1>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Your trusted source for lifestyle inspiration, wellness wisdom, and travel stories that nourish the soul.
        </p>
      </div>

  <div className="max-w-6xl mx-auto mb-20">
    <div className="relative rounded-2xl overflow-hidden h-[500px] group">
      <img
        src={heroPost.thumbnail}
        alt={heroPost.title}
        className="w-full h-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6 transition-opacity duration-500 group-hover:opacity-100 opacity-90">
        <h2 className="text-3xl font-bold text-white">
          {heroPost.title}
        </h2>
        <p className="text-gray-200 text-md mt-2">
          {heroPost.excerpt}
        </p>
         <small className="w-full flex items-center gap-2 text-white font-semibold text-[12px]">
              {heroPost.author}
              <span className="relative w-[13px] h-px bg-[#777] text-[18px] divider"></span>
               {heroPost.date}
        </small>
        <Link
          href={`/readpost/${heroPost.slug}`}
          className="inline-block mt-4 px-6 py-2 bg-amber-500 text-black font-semibold rounded-xl hover:bg-amber-600 transition"
        >
          Read More
        </Link>
      </div>
    </div>
  </div>


      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-2xl font-bold mb-6">Explore by Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Wellness", "Travel", "Nature", "Self-Care"].map((cat, i) => (
            <a
              key={i}
              href={`/category`}
              className="bg-[#181818] rounded-xl p-6 text-center hover:bg-[#222] transition"
            >
              <h4 className="text-lg font-semibold text-amber-400">{cat}</h4>
              <p className="text-sm text-gray-400 mt-2">Curated articles and tips</p>
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-2xl font-bold mb-6">Latest Articles</h3>
        <div className="flex"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {
          remains.map((post, i) => {
            const imgUrl = post.thumbnail?.url
                ? post.thumbnail.url.startsWith("http")
                  ? post.thumbnail.url
                  : `${STRAPI_URL}${post.thumbnail.url}`
                : "/placeholder.jpg";
            const dates =  post.publishedAt
              ? new Date(post.publishedAt).toLocaleDateString()
              : "Unknown";
            return(
            <Link href={`/readpost/${post.postId}`} key={i} className="bg-[#181818] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
              <img src={imgUrl} alt={post.title} className="w-full h-48 object-cover transition duration-500 hover:scale-105 hover:brightness-75" />
              <div className="p-4">
                <div className="text-sm text-gray-500 mb-1">{dates}</div>
                <h4 className="text-lg font-semibold text-white">{post.title}</h4>
                <p className="text-sm text-gray-400 mt-2">By {post.author.name}</p>
              </div>
            </Link>
          )})}
        </div>

      </div>
    </section>
  );
}
