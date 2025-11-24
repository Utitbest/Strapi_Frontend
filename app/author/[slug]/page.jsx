"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchAPI } from "@/lib/api";
import ErrorBud from "@/app/components/ErrorButton";

export default function AuthorPage() {
  const { slug } = useParams();
  const STRAPI_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [author, setAuthor] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchAuthor() {
      try {
        const authorRes = await fetchAPI(
          `/api/authors?filters[slug][$eq]=${slug}&populate=*`
        );
        const authorData = authorRes?.data?.[0];
        setAuthor(authorData);
        const postsRes = await fetchAPI(
          `/api/posts?filters[author][slug][$eq]=${slug}&populate=thumbnail`
        );
        setPosts(postsRes?.data || []);
      } catch (err) {
        console.error("Error fetching author", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchAuthor();
  }, [slug]);

  if (loading)
    return (
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

  if (error || !author)
    return (
      <div className="flex flex-col items-center justify-center h-[500px] bg-[#171717] text-red-500">
        <div className="bg-[#1a1a1a] p-8 rounded-lg shadow-lg text-center">
          <svg
            className="w-12 h-12 mx-auto mb-4 text-red-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01M12 5a7 7 0 100 14a7 7 0 000-14z"
            />
          </svg>
          <h2 className="text-xl font-bold mb-2">Oops! Something went wrong</h2>
          <p className="text-gray-400 mb-4">
            We couldn’t fetch your author. Please try again later.
          </p>
          <ErrorBud />
        </div>
      </div>
    );
  return (
    <section className="bg-[#171717] text-white px-6 py-16">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="h-100 w-100 rounded-2xl flex items-center mx-auto mb-4 justify-center overflow-hidden">
          <img
            src={
              author?.authorpicture?.url
                ? `${STRAPI_URL}${author.authorpicture.url}`
                : "/placeholder.jpg"
            }
            alt={author?.name}
            className="w-full object-cover h-full object-top"
          />
        </div>
        
        <h1 className="text-3xl font-bold">{author?.name}</h1>
        <p className="text-gray-400 mt-2">{author?.bio}</p>
      </div>

      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-bold mb-6">
          Posts by {author?.name}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {posts.map((post, i) => {
            const image = post?.thumbnail?.url
              ? `${STRAPI_URL}${post.thumbnail.url}`
              : "/placeholder.jpg";

            return (
              <div
                key={i}
                className="bg-[#181818] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <img
                  src={image}
                  alt={post?.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-white">
                    {post?.title}
                  </h4>
                  <p className="text-sm text-gray-400 mt-2">{post?.excerpt}</p>
                  <a
                    href={`/readpost/${post?.postId}`}
                    className="text-amber-500 hover:text-amber-600 text-sm mt-3 inline-block"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

