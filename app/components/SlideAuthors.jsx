"use client";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AuthorsCarousel({ authors = [], strapiUrl }) {
  const scrollRef = useRef(null);
  const scrollLeft = () =>
    scrollRef.current?.scrollBy({ left: -350, behavior: "smooth" });
  const scrollRight = () =>
    scrollRef.current?.scrollBy({ left: 350, behavior: "smooth" });

  if (!authors.length) {
    return <div className="text-center py-10 text-gray-400">No authors found.</div>;
  }
  return (
    <div className="relative w-full mt-16">
      <button
        onClick={scrollLeft}
        className="absolute left-6 top-[38%] z-30 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border border-white/10"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-6 top-[38%] z-30 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg border border-white/10"
      >
        <ChevronRight size={28} />
      </button>

      <div className="pointer-events-none absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-black via-black/70 to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-black via-black/70 to-transparent z-20" />

      <div
        ref={scrollRef}
        className="flex gap-12 overflow-x-auto scroll-smooth px-24 pb-3 select-none scrollbar-hide"
      >
        {authors.map((a, i) => {
          const imgUrl = a.authorpicture?.url
            ? a.authorpicture.url.startsWith("http")
              ? a.authorpicture.url
              : `${strapiUrl}${a.authorpicture.url}`
            : "/placeholder.jpg";

          return (
            <div key={i} className="min-w-[280px] group">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src={imgUrl}
                  className="w-[280px] h-[280px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  alt={a.name}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
              </div>

              <h3 className="text-xl font-bold text-white mt-4 group-hover:opacity-80 transition-opacity duration-300">
                {a.name}
              </h3>

              <p
                className="text-gray-400 leading-relaxed"
                style={{
                  margin: 0,
                  padding: 0,
                  fontSize: "18px",
                  fontWeight: 500,
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {a.bio || "No description available."}
              </p>

              <div className="mt-4 h-px w-full bg-gray-800 group-hover:bg-gray-600 transition-colors" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

