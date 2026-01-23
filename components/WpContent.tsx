'use client';

import { useEffect, useRef } from 'react';

export default function WpContent({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const iframes = ref.current.querySelectorAll('iframe');

    iframes.forEach((iframe) => {
      // already wrapped check
      if (iframe.parentElement?.classList.contains('wp-iframe-wrap')) return;

      const wrap = document.createElement('div');
      wrap.className = 'wp-iframe-wrap';

      iframe.parentNode?.insertBefore(wrap, iframe);
      wrap.appendChild(iframe);

      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.position = 'absolute';
      iframe.style.top = '0';
      iframe.style.left = '0';
    });
  }, [html]);

  return (
    <div
      ref={ref}
      className="prose prose-lg max-w-none wp-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
