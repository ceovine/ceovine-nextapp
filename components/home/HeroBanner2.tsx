import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/types/post';
import { decodeHtml } from '@/lib/decodeHtml';

interface HeroBanner2Props {
  post: Post;
}

const HeroBanner2 = ({ post }: HeroBanner2Props) => {
  return (
    <section className="mb-10">
      <Link href={`/news/${post.slug}`}>
        <Image
          src={post.image}
          alt={decodeHtml(post.title)}
          width={1200}
          height={600}
          priority
        />

        <h2 className="mt-3 text-2xl font-bold">
          {decodeHtml(post.title)}
        </h2>
      </Link>
    </section>
  );
};

export default HeroBanner2;
