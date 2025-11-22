import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <article className="card p-4 rounded-xl border border-gray-100 dark:border-gray-800">
      <div className="h-36 bg-gray-200 dark:bg-gray-800 rounded-md mb-3" style={{backgroundImage:`url(${post.img || "/sample1.jpg"})`, backgroundSize:"cover", backgroundPosition:"center"}} />
      <Link href={`/blog/${post.slug}`} className="text-lg font-semibold hover:underline">{post.title}</Link>
      <p className="text-sm opacity-70 mt-2">{post.excerpt}</p>
      <div className="mt-3 text-xs opacity-70">{post.date} • <span className="font-medium">{post.category}</span></div>
    </article>
  );
}
