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
    

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ceovine_cat_grid">
        {posts.map(post => (
          <Link key={post.id} href={`/news/${post.slug}`}>
            <div className="ceovine_cat_grid_box rounded-xl overflow-hidden p-3">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="object-cover rounded-xl"
              />
              <h3 className="pt-3 pl-3 pr-3 mb-0">{decodeHtml(post.title)}</h3>
            </div>
          </Link>
        ))}
      </div>

  );
};

export default CategoryBlock;
