'use client';

import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Share2,
  Pin
} from 'lucide-react';

type Props = {
  title: string;
  url: string;
  image?: string;
};

export default function SocialShare({ title, url, image }: Props) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex flex-wrap gap-3 items-center">
      
      {/* WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
        className="share-btn"
      >
        <Share2 size={16} /> WhatsApp
      </a>

      {/* X (Twitter) */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="share-btn"
      >
        <Twitter size={16} /> X
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="share-btn"
      >
        <Facebook size={16} /> Facebook
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="share-btn"
      >
        <Linkedin size={16} /> LinkedIn
      </a>

      {/* Pinterest */}
      {image && (
        <a
          href={`https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodeURIComponent(
            image
          )}&description=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Pinterest"
          className="share-btn"
        >
          <Pin size={16} /> Pinterest
        </a>
      )}

      {/* Email */}
      <a
        href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
        aria-label="Share via Email"
        className="share-btn"
      >
        <Mail size={16} /> Email
      </a>
    </div>
  );
}
