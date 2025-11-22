import Link from "next/link";

export default function FeaturedSection() {
  
  const featured = [
    { id: 1, title: "Exploring Modern Web Design", excerpt: "A short intro to modern patterns...", img: "/sample1.jpg", slug: "exploring-modern-web" },
    { id: 2, title: "Tailwind + Next.js Rapid Setup", excerpt: "Build fast with utility-first CSS...", img: "/sample2.jpg", slug: "tailwind-next-setup" },
  ];

  return (
    <section className="mb-10">
      <h2 className="text-3xl font-serif font-bold mb-6">Featured</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featured.map(p => (
          <article key={p.id} className="group relative overflow-hidden rounded-lg shadow-sm">
            <div className="h-48 md:h-64 bg-gray-200 dark:bg-gray-800" style={{backgroundImage:`url(${p.img})`, backgroundSize:"cover", backgroundPosition:"center"}} />
            <div className="p-4 bg-white/80 dark:bg-black/60 backdrop-blur-sm">
              <Link href={`/blog/${p.slug}`} className="text-xl font-semibold hover:underline">{p.title}</Link>
              <p className="text-sm opacity-70 mt-2">{p.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
