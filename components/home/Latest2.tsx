import { Post } from '@/types/post';
import Link from 'next/link';
import Image from 'next/image';
import { decodeHtml } from '@/lib/decodeHtml';

interface Latest2Props {
  posts: Post[];
}

const Latest2 = ({ posts }: Latest2Props) => {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold mb-5">Latest News</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {posts.map(post => (
          <article key={post.id} className="group">
            <div className="relative">
              {/* IMAGE + NEWS LINK */}
              <Link href={`/${post.slug}`}>
                <Image
                  src={post.image}
                  alt={decodeHtml(post.title)}
                  width={400}
                  height={250}
                  className="object-cover"
                />
              </Link>

              {/* CATEGORY BADGE */}
              {post.category && (
                <Link
                  href={`/category/${post.category.slug}`}
                  className="absolute top-2 left-2 bg-black/80 backdrop-blur text-white text-xs px-2 py-1 uppercase rounded hover:bg-black transition"
                >
                  {post.category.name}
                </Link>
              )}
            </div>

            {/* TITLE */}
            <h3 className="mt-2 font-semibold group-hover:underline">
              <Link href={`/${post.slug}`}>
                {decodeHtml(post.title)}
              </Link>
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Latest2;
