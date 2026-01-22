'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { searchPosts } from '@/lib/api';
import Link from 'next/link';
import Image from 'next/image';
import { decodeHtml } from '@/lib/decodeHtml';

interface Post {
  id: number;
  title: string;
  slug: string;
  image: string;
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || '';

  const [results, setResults] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!q || q.trim().length < 2) return;

    const fetchData = async () => {
      setLoading(true);
      const data = await searchPosts(q);
      setResults(data);
      setLoading(false);
    };

    fetchData();
  }, [q]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-8">
        Search results for “{q}”
      </h1>

      {loading && <p>Loading...</p>}

      {!loading && results.length === 0 && (
        <p>No results found.</p>
      )}

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 ceovine_cat_grid pt-3">
        {results.map(post => (

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
    </div>
  );
}
