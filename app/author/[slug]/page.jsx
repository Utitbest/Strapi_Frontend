"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchAPI } from "@/lib/api";
import ErrorBud from "@/app/components/ErrorButton";

export default function AuthorPage() {
  const { authorId } = useParams();
  const STRAPI_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    async function fetchAuthor() {
      try {
        const res = await fetchAPI(
        //   `/api/authors?filters[slug][$eq]=${authorId}&populate=posts`
          `/api/authors?filters[slug][$eq]=${authorId}&populate=&populate=posts.thumbnail`
        );
        setAuthor(res?.data);
      } catch (err) {
        console.error("Error fetching author", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchAuthor();
  }, [authorId]);

   if (loading) return (
        <div className="p-6 max-w-3xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-700 rounded w-1/2"></div>
            <div className="h-48 bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6"></div>
          </div>
        </div>
    );
    if (error || !author) return (
         <div className="flex flex-col items-center justify-center h-[500px] bg-[#171717] text-red-500">
           <div className="bg-[#1a1a1a] p-8 rounded-lg shadow-lg text-center">
             <svg className="w-12 h-12 mx-auto mb-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2"
               viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round"
                 d="M12 9v2m0 4h.01M12 5a7 7 0 100 14a7 7 0 000-14z" />
             </svg>
             <h2 className="text-xl font-bold mb-2">Oops! Something went wrong</h2>
             <p className="text-gray-400 mb-4">We couldn’t fetch your post. Please try again later.</p>
            <ErrorBud/>
           </div>
         </div>
       );

  const authorData = author?.attributes;
  const posts = authorData?.posts?.data || [];
    console.log(author)
  return (
    <section className="bg-[#0f0f0f] text-white px-6 py-16">
      {/* Author Info */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <img
          src={
            authorData?.avatar?.url
              ? `${STRAPI_URL}${authorData.avatar.url}`
              : "/placeholder.jpg"
          }
          alt={authorData?.name}
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold">{authorData?.name}</h1>
        <p className="text-gray-400 mt-2">{authorData?.bio}</p>
        <p className="text-sm text-[#888] mt-2">
          📍 {authorData?.location || "Unknown"}
        </p>
      </div>

      {/* Social Links & Contact */}
      <div className="flex justify-center gap-4 mb-12">
        {["LinkedIn", "Twitter", "Instagram"].map((platform, i) => (
          <a
            key={i}
            href="#"
            className="p-3 rounded-full bg-[#1a1a1a] hover:bg-gray-700 transition"
          >
            {platform}
          </a>
        ))}
        <a
          href={`mailto:${authorData?.email}`}
          className="px-4 py-2 bg-amber-500 text-black rounded-lg hover:bg-amber-600 transition"
        >
          Contact Author
        </a>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-6 text-center mb-12">
        <div>
          <h3 className="text-2xl font-bold">{posts.length}</h3>
          <p className="text-gray-400">Posts</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">12k</h3>
          <p className="text-gray-400">Reads</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">1.2k</h3>
          <p className="text-gray-400">Followers</p>
        </div>
      </div>

      {/* Author's Posts */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-6">Posts by {authorData?.name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const p = post.attributes;
            const image = p.thumbnail?.url
              ? `${STRAPI_URL}${p.thumbnail.url}`
              : "/placeholder.jpg";

            return (
              <div
                key={p.postId}
                className="bg-[#181818] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <img
                  src={image}
                  alt={p.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-white">{p.title}</h4>
                  <p className="text-sm text-gray-400 mt-2">{p.excerpt}</p>
                  <a
                    href={`/readpost/${p.postId}`}
                    className="text-amber-500 hover:text-amber-600 text-sm mt-3 inline-block"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <button className="mt-6 px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white">
          Load more posts
        </button>
      </div>

      {/* Testimonials / Comments */}
      <div className="max-w-4xl mx-auto bg-[#181818] rounded-xl p-6 shadow-lg mb-16">
        <h2 className="text-xl font-bold mb-4">What readers say</h2>
        <p className="text-gray-400 italic">
          “This author’s insights changed how I think about wellness.”
        </p>
        <form className="mt-6 flex flex-col gap-4">
          <textarea
            placeholder="Leave a comment..."
            className="p-3 rounded-lg bg-[#1a1a1a] text-white"
          ></textarea>
          <button className="px-6 py-2 bg-amber-500 text-black rounded-lg hover:bg-amber-600 transition">
            Submit
          </button>
        </form>
      </div>

      {/* Newsletter / Follow CTA */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <h3 className="text-xl font-bold mb-2">Follow {authorData?.name}</h3>
        <p className="text-gray-400 mb-4">
          Get notified when new articles are published.
        </p>
        <button className="px-6 py-2 bg-amber-500 text-black rounded-lg hover:bg-amber-600 transition">
          Follow Author
        </button>
      </div>
    </section>
  );
}
