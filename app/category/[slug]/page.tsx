import { getCategoryPostsPaginated } from '@/lib/api';
import CategoryFeed from '@/components/CategoryFeed';
import Link from 'next/link';
import Image from 'next/image';
import { decodeHtml } from '@/lib/decodeHtml';

const INITIAL_LIMIT = 20;

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const CategoryPage = async ({ params }: PageProps) => {
  const { slug } = await params; // ✅ REQUIRED in Next 16

  const initial = await getCategoryPostsPaginated(slug, 1, INITIAL_LIMIT);

  const hero = initial.posts[0];
  const topStories = initial.posts.slice(1, 4);
  const latest = initial.posts.slice(4);

  return (
    <main className="max-w-7xl mx-auto px-6 py-6">

      {/* CATEGORY TITLE */}
      <h1 className="text-2xl font-bold uppercase mb-6">
        {slug.replace(/-/g, ' ')}
      </h1>

      {/* ROW 1 */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

        {/* HERO */}
        <div className="lg:col-span-2">
          {hero && (
            <Link href={`/news/${hero.slug}`}>
              <Image
                src={hero.image}
                alt={decodeHtml(hero.title)}
                width={650}
                height={365}
                priority
                className="aspect-[16/9] object-cover"
              />
              <h2 className="mt-4 text-2xl font-bold">
                {decodeHtml(hero.title)}
              </h2>
            </Link>
          )}
        </div>

        {/* TOP STORIES */}
        <aside>
          <h3 className="text-sm font-bold uppercase border-b pb-2 mb-4">
            Top Stories
          </h3>

          <ul className="space-y-4">
            {topStories.map(post => (
              <li key={post.id} className="flex gap-3">
                {post.image && (
                  <Image
                    src={post.image}
                    alt={decodeHtml(post.title)}
                    width={80}
                    height={80}
                    placeholder="blur"
                    blurDataURL="/blur.jpg"
                    className="w-20 h-20 object-cover flex-shrink-0"
                  />
                )}

                <Link
                  href={`/news/${post.slug}`}
                  className="text-sm font-medium leading-snug hover:underline"
                >
                  {decodeHtml(post.title)}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      {/* ROW 2 */}
      <CategoryFeed
        slug={slug}
        initialPosts={latest}
        hasMoreInitial={initial.hasMore}
        startPage={initial.nextPage}
      />

    </main>
  );
};

export default CategoryPage;
