"use client"
import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa6";
import { useParams } from "next/navigation";
import {useEffect, useState} from "react"
import { fetchAPI } from "@/lib/api";
import ExpandableText from "@/app/components/ExpandText"
import Link from "next/link";

export default function ArticlePage(){
  const {postId} = useParams()
  const STRAPI_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
  
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])
  const [post, setThree] = useState([])
  useEffect(()=>{
   async function FetchPost(){
      try {
        
        const OriginalData = await fetchAPI(`/api/posts?filters[postId][$eq]=${postId}&populate=*`);
        const postsRes = await fetchAPI("/api/posts?populate=*&sort=createdAt:desc");

        console.log(OriginalData)
        setData(OriginalData?.data?.[0]);
        setThree(postsRes?.data.slice(0, 3))
      } catch (error) {
        console.log("Error while Fetching", error)
        setError(true)
      }finally{
        setLoading(false)
      }
  }
  FetchPost()
  }, [])


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

      if (error) return (
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


      const heroPost = data
          ? {
              title: data?.title,
              content: data.desc || "",
              excerpt: data.excerpt || "",
              slug: data.postId,
              thumbnail: data.thumbnail?.url
                ? data.thumbnail.url.startsWith("http")
                  ? data.thumbnail.url
                  : `${STRAPI_URL}${data.thumbnail.url}`
                : "/placeholder.jpg",
              author: data.author?.name || "Unknown",
              date: data.publishedAt
                ? new Date(data.publishedAt).toLocaleDateString()
                : "Unknown",
              quote: data.quote || "",
            }
          : null;
  return (
    <section className="bg-[#0f0f0f] text-white px-6 py-16">
      <div className="max-w-4xl mx-auto text-center mb-12 gap-1.5 flex flex-col">
        <h1 className="text-4xl font-bold mb-4 text-left">{heroPost.title}</h1>
        <div className="text-gray-400 text-md flex items-center gap-3">
            <figure className="h-7 w-7 overflow-hidden rounded-full">
                <img className="object-top object-cover" src={heroPost.thumbnail} alt={heroPost.title} />
            </figure>

            <small className="w-full flex items-center gap-2 text-[#616161] font-semibold text-[12px]">
                {heroPost.author}
              <span className="relative w-[13px] h-px bg-[#777] text-[18px] divider"></span>
                {heroPost.date}
            </small>
        </div>
        <div className="flex mt-2.5">
            <div className="flex items-center gap-2.5">
                {[FaLinkedin, FaInstagram, FaWhatsapp, FaTwitter, FaFacebookF].map((Icon, i) => (
                    <a key={i} href="#" className="p-2 rounded-full  bg-[#1a1a1a] hover:bg-gray-700 transition">
                    <Icon className="w-5 h-5" />
                    </a>
                ))}
            </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mb-10 rounded-2xl overflow-hidden">
        <img
          src={heroPost.thumbnail} 
          alt={heroPost.title}
          className="w-full h-96 object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto prose prose-invert prose-lg text-gray-300 mb-16">
        <p className="text-[18px] text-[#ababab]">
           <ExpandableText text={heroPost.content} wordLimit={200} />
        </p>

        <blockquote className="blockquoteShite my-5.5">
          <span>
            <img src="/quote.svg" alt="" />
          </span>
                <strong className="text-shadow-initial italic text-2xl"> 
                 {heroPost.quote}
              </strong>
        </blockquote>

        <p className="text-[18px] text-[#ababab]">
          {heroPost.excerpt}
        </p>
        
      </div>

      <div className="max-w-4xl mx-auto bg-[#181818] rounded-2xl p-8 mb-16 text-center shadow-lg">
        <h3 className="text-xl font-bold mb-2">Enjoying this article?</h3>
        <p className="text-gray-400 mb-4">Subscribe to our newsletter for weekly wellness tips and lifestyle inspiration.</p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-2 rounded-lg bg-[#1a1a1a] text-white placeholder:text-gray-400 outline-none flex-1"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-600 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {post.map((post, i) => {
              const image = post.thumbnail?.url
              ? post.thumbnail.url.startsWith("http")
                ? post.thumbnail.url
                : `${STRAPI_URL}${post.thumbnail.url}`
              : "/placeholder.jpg";

              const date = post.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString()
                      : "Unknown";
            return(
            <Link href={`/readpost/${post.postId}`} key={i} className="bg-[#181818] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
              <img src={image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                 <small className="w-full flex items-center gap-2 text-white font-semibold text-[12px]">
                    {post.author.name}
                    <span className="relative w-[13px] h-px bg-[#777] text-[18px] divider"></span>
                    {date}
                  </small>
                <h4 className="text-lg font-semibold text-white">{post.title}</h4>
                <p className="text-sm text-gray-400 mt-2">{post.quote}</p>
              </div>
            </Link>
          )})}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center mb-10">
        <p className="text-gray-400 mb-4">Share this article</p>
        <div className="flex justify-center gap-4">
          {["Facebook", "X", "Instagram", "LinkedIn"].map((platform, i) => (
            <button key={i} className="bg-[#181818] px-4 py-2 rounded-full text-sm hover:bg-gray-700 transition">
              {platform}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
