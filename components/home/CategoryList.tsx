import { Post } from '@/types/post';
import { decodeHtml } from '@/lib/decodeHtml';
import Link from 'next/link';

interface CategoryListProps {
  title: string;
  slug: string;
  posts: Post[];
}

const CategoryList = ({ title, slug, posts }: CategoryListProps) => {
  if (!posts || posts.length === 0) return null;

  return (
    <section>
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold text-lg uppercase">{title}</h2>

        <Link
          href={`/category/${slug}`}
          className="text-sm text-blue-600"
        >
          View All
        </Link>
      </div>

      <ul className="space-y-3">
        {posts.map(post => (
          <li key={post.id}>
            <Link
              href={`/news/${post.slug}`}
              className="hover:underline"
            >
              {decodeHtml(post.title)}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CategoryList;
