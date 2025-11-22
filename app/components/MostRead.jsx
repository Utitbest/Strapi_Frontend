import Link from "next/link";
import React from "react";

export default function ArticleCard({articles = [], strapiUrl}){
    if (!articles.length) {
      return <div className="text-center py-10 text-gray-400">No Content found.</div>;
    }
    return(
        <>
        {articles.map((items, i)=> {
          const imgUrl = items.thumbnail?.url
              ? items.thumbnail.url.startsWith("http")
                ? items.thumbnail.url
                : `${strapiUrl}${items.thumbnail.url}`
              : "/placeholder.jpg";
            const dates =  items.publishedAt
            ? new Date(items.publishedAt).toLocaleDateString()
            : "Unknown";
          return(
            <Link href={`/readpost/${items.postId}`} key={i} className="rounded-2xl bg-[#181818] shadow-[#181818] p-2.5 shadow-[1px 1px 4px 13px gray] overflow-hidden hover:shadow-[1px_1px_4px_3px_white] transition-shadow duration-300">
                <img src={imgUrl} alt={items.title} className="w-full h-48 object-cover rounded-2xl" />
                <div className="p-4">
                    <small className="w-full flex items-center gap-2 text-white font-semibold text-[12px]">
                        {items.author?.name}
                        <span className="relative w-[13px] h-px bg-[#777] divider"></span>
                        {dates}
                    </small>
                    <h2 className="font-medium text-[18px] text-gray-500">{items.title}</h2>
                </div>
            </Link>
        )})}
        </>
    )
}
  




