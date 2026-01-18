import { Post } from '@/types/post';
import Link from 'next/link';
import { decodeHtml } from '@/lib/decodeHtml';

interface Latest3Props {
  title: string;      // 👈 NEW
  posts: Post[];
}

const Latest3 = ({ title, posts }: Latest3Props) => {
  if (!posts || posts.length === 0) return null;

  return (
    <aside className="w-full max-w-sm latest_3_box">
      {/* TITLE */}
      {title && (
      <h2 className="italic font-bold text-xl tracking-wide uppercase title_with_border">
        <span>{title}</span>
      </h2>
      )}
      {/* LIST */}
      <div className="divide-y">
        {posts.map((post) => (
          <article key={post.id} className="py-4">
            {/* CATEGORY */}
            {post.category && (
              <Link
                href={`/category/${post.category.slug}`}
                className="block text-xs font-bold uppercase mb-2 tracking-wide category"
              >
                {decodeHtml(post.category.name)}
              </Link>
            )}

            {/* TITLE */}
            <Link href={`/news/${post.slug}`}>
              <h3 className="text-base font-semibold leading-snug text-lg hover:underline line-clamp-3 lg:line-clamp-2">
                {decodeHtml(post.title)}
              </h3>
            </Link>
          </article>
        ))}
      </div>
    </aside>
  );
};

export default Latest3;
