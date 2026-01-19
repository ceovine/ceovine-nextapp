'use client';

import { useEffect, useState } from 'react';
import { searchPosts } from '@/lib/api';
import Link from 'next/link';
import { X } from 'lucide-react';
import { highlightText } from '@/lib/highlight';

interface Post {
  id: number;
  title: string;
  slug: string;
}

const SearchBox = ({ onClose }: { onClose: () => void }) => {
  const [q, setQ] = useState('');
  const [results, setResults] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (q.trim().length < 2) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      const data = await searchPosts(q);
      setResults(data);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [q]);

  return (
    <div className="p-4 relative bg-white">

      {/* CLOSE BUTTON */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-gray-500 hover:text-black"
        aria-label="Close search"
      >
        <X size={20} />
      </button>

      {/* INPUT */}
      <input
        autoFocus
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Search news..."
        className="border px-3 py-2 w-full pr-10"
      />

      {loading && (
        <p className="text-sm text-gray-500 mt-2">Searching...</p>
      )}

      {/* RESULTS */}
      <ul className="mt-3 space-y-2 max-h-64 overflow-y-auto">
        {results.map(post => (
          <li key={post.id}>
            <Link
              href={`/${post.slug}`}
              onClick={onClose}
              className="block text-sm hover:underline"
              dangerouslySetInnerHTML={{
                __html: highlightText(post.title, q),
              }}
            />
          </li>
        ))}

        {!loading && q.length >= 2 && results.length === 0 && (
          <p className="text-sm text-gray-500">No results found</p>
        )}
      </ul>
    </div>
  );
};

export default SearchBox;
