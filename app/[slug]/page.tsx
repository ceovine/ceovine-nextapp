import type { SinglePost } from "@/types/post";
import { getPostBySlug,
         getLatestPosts } from '@/lib/api';
import Link from "next/link";
import Image from 'next/image';
import { decodeHtml } from '@/lib/decodeHtml';
//import Latest3 from '@/components/home/Latest3';
//import SocialShare from '@/components/SocialShare';
import WpContent from '@/components/WpContent';
import { SocialShare, Latest3 } from '@/components/ClientWidgets';



export const revalidate = 300;

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WP_API_SEO}/rankmath/v1/getHead?url=https://www.ceovine.com/${slug}/`,
      { next: { revalidate: 300 } }
    );

    if (!res.ok) return {};

    const data = await res.json();
    const head = data?.head || "";

    // ✅ Extract title
    const titleMatch = head.match(/<title>(.*?)<\/title>/);
    const title = titleMatch ? titleMatch[1] : "";

    // ✅ Extract description
    const descMatch = head.match(/<meta name="description" content="(.*?)"/);
    const description = descMatch ? descMatch[1] : "";

    // ✅ Extract OG Image
    const ogImageMatch = head.match(/<meta property="og:image" content="(.*?)"/);
    const ogImage = ogImageMatch ? ogImageMatch[1] : "";

    return {
      title,
      description, 
      openGraph: {
        title,
        description,
        url: `https://www.ceovine.com/${slug}`,
        images: ogImage ? [{ url: ogImage }] : [],
      },
    };

  } catch (error) {
    console.log("Metadata error:", error);
    return {};
  }
}







type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};


const NEWS_LATEST_LIMIT = 10;
const PostPage = async ({ params }: PageProps) => {

  const [
      newsPosts
    ] = await Promise.all([
      getLatestPosts()
    ]);

const { slug } = await params; // ✅ correct for Next 15


const seoRes = await fetch(
  `${process.env.NEXT_PUBLIC_WP_API_SEO}/rankmath/v1/getHead?url=https://www.ceovine.com/${slug}/`,
  { cache: "no-store" }
);

const seoData = await seoRes.json();
const head = seoData?.head || "";

const schemaMatch = head.match(
  /<script type="application\/ld\+json" class="rank-math-schema">(.*?)<\/script>/
);

const schema = schemaMatch ? schemaMatch[1] : "";


  //const post = await getPostBySlug(slug);
  const post: SinglePost | null = await getPostBySlug(slug);

  if (!post) {
    return <div className="p-6">Post not found</div>;
  }

  return (
<>
    {schema && (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: schema }}
    />
  )}

    <main className="px-4 py-12 max-w-6xl mx-auto">
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-8 single_post_area">
      <div className="lg:col-span-2">
        <article className="max-w-3xl mx-auto px-4 pt-6 pb-6">
          
          {/* CATEGORY */}
          <div className="block text-xs font-bold uppercase mb-2 tracking-wide category">
            {post.category?.name && decodeHtml(post.category.name)}

          </div>



          {/* TITLE */}
          <h1 className="single_post_h1 font-bold max-w-full">
            {decodeHtml(post.title)}
          </h1>

{/* TAGS */}
{post.tags && post.tags.length > 0 && (
  <div className="flex flex-wrap gap-2 mb-6">
    {post.tags?.map((tag) => (
      <Link
        key={tag.id}
        href={`/tag/${tag.slug}`}
        className="text-xs px-3 py-1 rounded-full hover:bg-black hover:text-white transition tag_item"
      >
        #{decodeHtml(tag.name)}
      </Link>
    ))}
  </div>
)}



          {/* EXCERPT */}
          <p className="text-sm text-gray-500 mb-4 post_short_description">
            {decodeHtml(post.excerpt)}
          </p>

          {/* META */}
          <div className="text-sm text-gray-500 mb-6">
            {post.author} • {post.date}
          </div>

          {/* FEATURED IMAGE */}
          {post.image && (
            <Image
              src={post.image}
              alt={decodeHtml(post.title)}
              sizes="(max-width: 768px) 100vw, 1200px"
              width={750}
              height={420}
              fetchPriority="high"
              loading="eager"
              className="aspect-[16/9] object-cover mb-6 rounded-xl"
            />
          )}


          {/* CONTENT */}
          <WpContent html={post.content} />

          {/* <div
              className="prose prose-lg max-w-none wp-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            /> */}

        </article>

<div className="hidden lg:block px-4">
 <SocialShare
  title={decodeHtml(post.title)}
  url={`https://ceovine.com/${post.slug}`}
  image={post.image}
/>
</div>

<div className="fixed mobile_share lg:hidden z-50">
  <SocialShare
    title={decodeHtml(post.title)}
    url={`https://ceovine.com/${post.slug}`}
    image={post.image}
  />
</div>


      </div>

    <div className='pt-6'>
      <Latest3 title="LATEST News" posts={newsPosts.slice(0, NEWS_LATEST_LIMIT)}/>
      
    </div>

    </section>

    
    </main>
</>

  );
};

export default PostPage;
