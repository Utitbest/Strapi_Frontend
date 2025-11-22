import Link from "next/link";

export default function BlogLayout({ posts = [],  strapiUrl}) {
  if (!posts.length) {
    return <div className="text-center py-10 text-gray-400">No Content found.</div>;
  }
  return (
    <>
      {posts.map((post) => {
        const imgUrl = post.thumbnail?.url
            ? post.thumbnail.url.startsWith("http")
              ? post.thumbnail.url
              : `${strapiUrl}${post.thumbnail.url}`
            : "/placeholder.jpg";
          const dates =  post.publishedAt
          ? new Date(post.publishedAt).toLocaleDateString()
          : "Unknown";
        return(
        <div key={post.id} className="w-full flex flex-col gap-10 border-b-2 border-gray-500 pb-5">
          <div className="flex flex-col gap-5">
            <div className="w-full max-h-[540px] flex items-center justify-center overflow-hidden rounded-2xl relative">
              <img
                className="object-cover w-full h-full transition duration-500 hover:scale-105 hover:brightness-75"
                src={imgUrl}   
                alt={post.title}
              />
                <span className="absolute bottom-1.5 left-1.5 text-shadow-lg bg-amber-600 shadow-2xs shadow-amber-500 text-teal-50 text-center p-1.5 text-[12px] rounded-2xl">
                  {post.category.name}
                </span>
            </div>

            <div className="flex flex-col gap-3">
              <small className="w-full flex items-center gap-2 text-white font-semibold text-[12px]">
                {post.author?.name}   
                <span className="relative w-[13px] h-px bg-[#777] divider"></span>
                {dates}
              </small>

              <h2 className="text-3xl font-bold">{post.title}</h2>

              <article className="font-medium text-[18px] text-gray-500">
                {post.excerpt}
              </article>

              <div className="w-full">
                <Link href={`/readpost/${post.postId}`} className="mt-2.5 text-[13px] font-semibold py-1.5 px-10 cursor-pointer rounded-2xl border border-gray-500 hover:bg-gray-500">
                  READ MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      )})}
    </>
  );
}
