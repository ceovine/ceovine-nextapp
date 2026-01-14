import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/types/post';

interface LatestProps {
  posts: Post[];
}

const Latest = ({ posts }: LatestProps) => {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="mt-10">
      <h2 className="mb-4 text-2xl font-bold">Latest News</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {posts.map((post) => (
          <Link key={post.id} href={`/news/${post.slug}`}>
            <article className="group">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="rounded-lg object-cover transition group-hover:scale-105"
              />
              
              <h3 className="mt-3 text-lg font-semibold leading-snug group-hover:underline">
                {post.title}
              </h3>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Latest;
