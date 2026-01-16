import { getPostBySlug } from '@/lib/api';
import Image from 'next/image';
import { decodeHtml } from '@/lib/decodeHtml';

export const revalidate = 300;

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const PostPage = async ({ params }: PageProps) => {
  const { slug } = await params; // ✅ IMPORTANT

  const post = await getPostBySlug(slug);

  if (!post) {
    return <div className="p-6">Post not found</div>;
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-6">
      
      {/* CATEGORY */}
      <p className="text-xs uppercase text-gray-500 mb-2">
        {post.category?.name}
      </p>

      {/* TITLE */}
      <h1 className="text-3xl font-bold leading-tight mb-4">
        {decodeHtml(post.title)}
      </h1>

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
          width={1200}
          height={675}
          priority
          className="aspect-[16/9] object-cover mb-6 rounded-xl"
        />
      )}

      {/* CONTENT */}
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
};

export default PostPage;
