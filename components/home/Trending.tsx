import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/types/post';

interface TrendingProps {
  posts: Post[];
}

const Trending = ({ posts }: TrendingProps) => {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="mb-12 trending_area">
      <h2 className="italic font-bold text-lg uppercase title_with_border"><span>Trending</span></h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        
        {posts.map((post) => (
          <Link key={post.id} href={`/news/${post.slug}`}>
            <article className="group flex gap-4">
              {/* <span className="text-xl font-bold text-gray-400">
                {index + 1}
              </span> */}

              <div className="flex-1">
                <h6 className="text-lg font-semibold leading-snug group-hover:underline">
                  {post.title}
                </h6>
              </div>

              <Image
                src={post.image}
                alt={post.title}
                width={120}
                height={80}
                className="rounded-md object-cover"
              />
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Trending;
