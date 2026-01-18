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
    <section className='categorylist_block'>
      <div className="mb-5">
        <h2 className="italic font-bold text-lg uppercase title_with_border"><span><Link
          href={`/category/${slug}`}>{title}</Link></span></h2>
        
        
      </div>

      <ul className="space-y-3 ceovine_cat_list">
        {posts.map(post => (
          <li key={post.id} className="py-4">
            <Link
              href={`/news/${post.slug}`}
              className="hover:underline"
            >
              <h3 className="text-base font-semibold leading-snug text-lg hover:underline">
              {decodeHtml(post.title)}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CategoryList;
