"use client";

export default function ComingSoonPage() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-[#171717] text-white px-4 sm:px-6 lg:px-12">
      <div className="text-center w-full max-w-4xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Coming Soon
        </h1>

        <p className="text-gray-400 text-base sm:text-lg lg:text-xl mb-10 leading-relaxed px-2 sm:px-6">
          We’re building something exciting behind the scenes. Our new platform
          will bring you fresh insights, inspiring stories, and tools designed
          to make your journey smoother. Stay tuned for the official launch —
          you’ll be the first to know when we go live.
        </p>

        <div className="grid grid-cols-2 sm:flex sm:justify-center gap-4 sm:gap-6 mb-12">
          {["30 Days", "12 Hours", "45 Minutes", "20 Seconds"].map((time, i) => (
            <div
              key={i}
              className="bg-[#0f0f0f] px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-md flex flex-col items-center"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-amber-500">
                {time}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">Remaining</p>
            </div>
          ))}
        </div>

        <form className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg bg-[#0f0f0f] text-white placeholder:text-gray-400 outline-none flex-1 min-w-[200px]"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-600 transition"
          >
            Notify Me
          </button>
        </form>

        <div className="bg-[#0f0f0f] rounded-xl p-6 sm:p-8 shadow-lg text-left sm:text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Why wait?</h2>
          <p className="text-gray-400 mb-4 leading-relaxed text-sm sm:text-base">
            Our upcoming launch is more than just a new website — it’s a
            community built around creativity, wellness, and inspiration. By
            subscribing now, you’ll gain early access to exclusive content,
            behind‑the‑scenes updates, and special offers reserved only for our
            first supporters.
          </p>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            We believe in simplicity, elegance, and meaningful connections. This
            platform is designed to empower you with tools and stories that
            matter. Join us on this journey and be part of something timeless.
          </p>
        </div>
      </div>
    </section>
  );
}
