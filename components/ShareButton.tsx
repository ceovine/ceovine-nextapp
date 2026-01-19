'use client';

import { Share2 } from 'lucide-react';

type Props = {
  title: string;
  url: string;
};

export default function ShareButton({ title, url }: Props) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      await navigator.clipboard.writeText(url);
      alert('Link copied!');
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-2 text-sm font-medium px-4 py-2 border rounded-full hover:bg-black hover:text-white transition"
      aria-label="Share this post"
    >
      <Share2 size={16} />
      Share
    </button>
  );
}
