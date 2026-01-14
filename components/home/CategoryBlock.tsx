import { Post } from '@/types/post';
import { decodeHtml } from '@/lib/decodeHtml';
import Image from 'next/image';
import Link from 'next/link';

interface CategoryBlockProps {
  posts: Post[];
}

const CategoryBlock = ({ posts }: CategoryBlockProps) => {
  if (!posts || posts.length === 0) return null;

  return (
    <section>
      <h2 className="font-bold text-lg uppercase mb-4">Funding</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map(post => (
          <Link key={post.id} href={`/news/${post.slug}`}>
            <div className="border rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="object-cover"
              />
              <p className="p-3 font-medium">{decodeHtml(post.title)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryBlock;
