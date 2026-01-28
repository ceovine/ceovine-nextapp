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

  const base =
    'flex items-center gap-2 px-3 py-2 rounded-md text-white text-sm font-medium transition-all duration-200 hover:scale-105';

  return (
    <div className="flex flex-wrap gap-3 items-center justify-center lg:justify-start pt-0 lg:pt-6 lg:border-t lg:border-gray-200">

      {/* WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} bg-[#25D366] hover:bg-[#1ebe5d]`}
      >
        <Share2 size={16} /> <span>WhatsApp</span>
      </a>

      {/* X (Twitter) */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} bg-black hover:bg-gray-800`}
      >
        <Twitter size={16} /> <span>X</span>
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} bg-[#1877F2] hover:bg-[#0f65d4]`}
      >
        <Facebook size={16} /><span>Facebook</span>
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} bg-[#0A66C2] hover:bg-[#084f99]`}
      >
        <Linkedin size={16} /> <span>LinkedIn</span>
      </a>

      {/* Pinterest */}
      {image && (
        <a
          href={`https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodeURIComponent(
            image
          )}&description=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} bg-[#E60023] hover:bg-[#c2001d]`}
        >
          <Pin size={16} /> <span>Pinterest</span>
        </a>
      )}

      {/* Email */}
      <a
        href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
        className={`${base} bg-gray-600 hover:bg-gray-700`}
      >
        <Mail size={16} /> <span>Email</span>
      </a>
    </div>
  );
}
