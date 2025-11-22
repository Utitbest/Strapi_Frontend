import BlogLayout from "@/app/components/LatestPostHome";
import AuthorsCarousel from "@/app/components/SlideAuthors";
import ArticleCard from "@/app/components/MostRead";
import SocialHandle from "@/app/components/SocialHandler";
import { fetchAPI } from "@/lib/api";
import Link from "next/link";

export default async function HomePage() {
  let posts = [];
  let authors = [];
  const STRAPI_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

  try {
    const postsRes = await fetchAPI("/api/posts?populate=*&sort=createdAt:desc");
    const authorsRes = await fetchAPI("/api/authors?populate=*");

    posts = postsRes?.data || [];
    authors = authorsRes?.data || [];
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
  
  const mostReadPosts = posts.slice(1, 5);
  const latestPosts = posts.slice(5);
  return (
    <section className="flex w-full justify-center items-center flex-col relative">

      <div className="grid h-[80vh] gap-5.5 grid-cols-2 w-full p-9.5">
        <div className="p-10 w-full overflow-hidden rounded-2xl relative">
          <img
            className="h-full w-full object-center rounded-2xl object-cover transition duration-500 hover:scale-105 hover:brightness-75"
            src={heroPost.thumbnail}
            alt={heroPost.title}
          />
        </div>

        <div className="p-10 flex flex-col h-full rounded-2xl items-center justify-center gap-2.5">
          <h2 className="text-5xl font-bold">{heroPost.title}</h2>
          <article className="text-[18px] text-gray-500">
            {heroPost.excerpt || heroPost.content.slice(0, 200) + "..."}
          </article>
          <small className="w-full flex items-center gap-2 text-white font-semibold text-[12px]">
            {heroPost.author}
            <span className="relative w-[13px] h-px bg-[#777] text-[18px] divider"></span>
            {heroPost.date}
          </small>

          <div className="w-full block">
            <Link href={`/readpost/${heroPost.slug}`} className="mt-2.5 text-[13px] font-semibold py-1.5 px-10 cursor-pointer rounded-2xl border border-gray-500 hover:bg-gray-500 transform-fill">
              READ MORE
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full px-16 py-10">
        <div className="w-full rounded-2xl bg-[#181818] shadow-[#181818] grid grid-cols-2">
          <div className="flex items-center justify-center px-10">
            <article className="font-semibold text-3xl text-shadow-gray-950">
              Stay Informed With the Latest & Most Important News
            </article>
          </div>

          <div className="flex flex-col h-full gap-5 p-10">
            <div className="border-b border-gray-500 flex items-center w-full gap-3 pb-2.5">
              <input
                className="flex-1 outline-none border-none"
                type="text"
                placeholder="Your email address"
              />
              <button className="cursor-pointer text-center bg-black text-white font-bold px-5.5 rounded-2xl py-1.5">
                SUBSCRIBE
              </button>
            </div>

            <div className="flex items-center justify-center">
              <article className="text-gray-500">
                I consent to receive newsletter via email. For further information,
                please review our{" "}
                <b className="font-bold text-amber-200 text-[15px] underline">
                  Privacy Policy
                </b>
              </article>
            </div>
          </div>
        </div>
      </div>

      <AuthorsCarousel authors={authors} strapiUrl={STRAPI_URL}/>

      <div className="w-full flex items-center justify-between mt-15">
        <div className="w-full flex justify-center relative">
          <div className="basis-2/3 flex px-10">
            <div className="w-full flex-col items-center gap-5.5 flex">
              <h1 className="relative mb-[21px] pl-[30px] text-[30px] font-bold leading-[1.2] w-full">
                <span className="sillyshape"></span>
                <span className="sillyshape2"></span>
                Latest Unboard
              </h1>

              <BlogLayout posts={latestPosts} strapiUrl={STRAPI_URL} />

              <Link href={`/blog`} className="bg-amber-500 text-shadow-amber-50 text-white font-semibold text-2xl text-center p-3 w-[95%] rounded-2xl cursor-pointer transition duration-300 ease-in-out hover:bg-amber-600 hover:scale-105 hover:shadow-lg">
                Find More Article
              </Link>
            </div>
          </div>

          <div className="basis-1/3 flex px-10 sticky top-0 self-start pt-3.5">
            <div className="w-full flex flex-col">
              <div className="flex-col flex gap-[4em]">
                <span className="font-bold text-[19px] text-gray-50 kkk">
                  <span className="dontate1 text-[15px]">Most Read</span>
                </span>

                <div className="w-full flex flex-col gap-[2.5em]">
                  <ArticleCard articles={mostReadPosts} strapiUrl={STRAPI_URL} />
                </div>
                <SocialHandle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
