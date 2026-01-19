import { getTagPostsPaginated } from '@/lib/api';
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

const TagPage = async ({ params }: PageProps) => {
  const { slug } = await params; // ✅ Next 16 compatible

  const initial = await getTagPostsPaginated(slug, 1, INITIAL_LIMIT);

  const hero = initial.posts[0];
  const topStories = initial.posts.slice(1, 5);
  const latest = initial.posts.slice(5);

  return (
    <main className="px-4 py-12 max-w-6xl mx-auto">

      {/* TAG TITLE */}
      <h1 className="text-2xl font-bold uppercase mb-6">
        #{slug.replace(/-/g, ' ')}
      </h1>

      {/* ROW 1 */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-9 hero_area">

        {/* HERO */}
        <div className="lg:col-span-2 hero_big">
          {hero && (
            <Link href={`/${hero.slug}`}>
              <Image
                src={hero.image}
                alt={decodeHtml(hero.title)}
                width={750}
                height={395}
                priority
                className="aspect-[16/9] object-cover rounded-xl"
              />
              <h2 className="mt-3 text-2xl font-bold">
                {decodeHtml(hero.title)}
              </h2>
            </Link>
          )}
        </div>

        {/* TOP STORIES */}
        <aside className="w-full max-w-sm latest_3_box">
          <h2 className="italic font-bold text-xl tracking-wide uppercase title_with_border">
            <span>Top Stories</span>
          </h2>

          <div className="divide-y">
            {topStories.map(post => (
              <article key={post.id} className="py-4">

                {/* CATEGORY */}
                {post.category && (
                  <Link
                    href={`/category/${post.category.slug}`}
                    className="block text-xs font-bold uppercase mb-2 tracking-wide category"
                  >
                    {decodeHtml(post.category.name)}
                  </Link>
                )}

                <Link
                  href={`/${post.slug}`}
                  className="text-sm font-medium leading-snug hover:underline"
                >
                  <h3 className="text-base font-semibold leading-snug text-lg hover:underline line-clamp-3 lg:line-clamp-2">
                    {decodeHtml(post.title)}
                  </h3>
                </Link>
              </article>
            ))}
          </div>
        </aside>
      </section>

      {/* ROW 2 */}
      <h2 className="italic font-bold text-xl tracking-wide uppercase title_with_border">
        <span>Latest Stories</span>
      </h2>

      <CategoryFeed
        slug={slug}
        initialPosts={latest}
        hasMoreInitial={initial.hasMore}
        startPage={initial.nextPage}
        apiType="tag"   // ⭐ IMPORTANT
      />

    </main>
  );
};

export default TagPage;
