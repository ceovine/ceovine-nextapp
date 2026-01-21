'use client';

import { useState, useEffect } from 'react';
//import { useState } from 'react';
import { getCategoryPostsPaginated } from '@/lib/api';
import { Post } from '@/types/post';
import Link from 'next/link';
import Image from 'next/image';
import { decodeHtml } from '@/lib/decodeHtml';

interface Props {
  slug: string;
  initialPosts: Post[];
  hasMoreInitial: boolean;
  startPage: number;
  apiType?: 'category' | 'tag';
}

const CategoryFeed = ({
  slug,
  initialPosts,
  hasMoreInitial,
  startPage,
}: Props) => {

  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [page, setPage] = useState(startPage);
  const [hasMore, setHasMore] = useState(hasMoreInitial);
  const [loading, setLoading] = useState(false);


  // 🔥 PREFETCH NEXT PAGE (first click fast)
  useEffect(() => {
    if (!hasMore) return;

    fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}/category/${slug}?page=${page}`
    ).catch(() => {});
  }, [slug, page, hasMore]);


  const loadMore = async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    const res = await getCategoryPostsPaginated(slug, page);

    setPosts(prev => [...prev, ...res.posts]);
    setHasMore(res.hasMore);
    setPage(res.nextPage);

    setLoading(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 ceovine_cat_grid pt-3">
        {posts.map(post => (
          <Link key={post.id} href={`/${post.slug}`}>
            <div className="ceovine_cat_grid_box rounded-xl overflow-hidden p-3">
            <Image
              src={post.image}
              alt={decodeHtml(post.title)}
              width={400}
              height={250}
              className="aspect-[16/9] object-cover rounded-xl"
            />
            <h3 className="pt-3 pl-3 pr-3 mb-0 line-clamp-3 lg:line-clamp-2">
              {decodeHtml(post.title)}
            </h3>
            </div>
          </Link>
        ))}
      </div>

{/* SKELETON LOADER (Load More click ke baad) */}

      {loading && (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="h-48 bg-gray-200 animate-pulse" />
    ))}
  </div>
)}


      {hasMore && (
        <div className="text-center mt-10">
          <button
            onClick={loadMore}
            disabled={loading}
            className="px-6 py-3 bg-black text-white uppercase text-sm hover:bg-gray-800 disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </>
  );
};

export default CategoryFeed;
