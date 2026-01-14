import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/types/post';

interface HeroBannerProps {
  post: Post;
}

const HeroBanner = ({ post }: HeroBannerProps) => {
  return (
    <section className="mb-6">
      <Link href={`/news/${post.slug}`}>
        <article>
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
            className="rounded-lg object-cover"
          />
          <h2 className="mt-3 text-2xl font-bold leading-tight">
            {post.title}
          </h2>
        </article>
      </Link>
    </section>
  );
};

export default HeroBanner;
