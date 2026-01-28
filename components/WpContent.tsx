'use client';

import { useEffect, useRef } from 'react';

export default function WpContent({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const iframes = ref.current.querySelectorAll<HTMLIFrameElement>('iframe');

    iframes.forEach((iframe) => {
      // already wrapped check
      if (iframe.parentElement?.classList.contains('wp-iframe-wrap')) return;

      const wrap = document.createElement('div');
      wrap.className = 'wp-iframe-wrap';
      wrap.style.position = 'relative';
      wrap.style.width = '100%';

      iframe.parentNode?.insertBefore(wrap, iframe);
      wrap.appendChild(iframe);

      iframe.style.width = '100%';
      iframe.style.position = 'absolute';
      iframe.style.top = '0';
      iframe.style.left = '0';
      iframe.style.border = '0';
    });

    const onMessage = (event: MessageEvent) => {
      if (!event.data || typeof event.data !== 'object') return;

      if (event.data.message === 'height' && event.data.value) {
        const iframes =
          ref.current?.querySelectorAll<HTMLIFrameElement>(
            `iframe[data-secret="${event.data.secret}"]`
          );

        iframes?.forEach((iframe) => {
          iframe.style.height = `${event.data.value}px`;

          const parent = iframe.parentElement as HTMLElement | null;
          if (parent?.classList.contains('wp-iframe-wrap')) {
            parent.style.height = `${event.data.value}px`;
          }
        });
      }
    };

    const onResize = () => {
      const iframes =
        ref.current?.querySelectorAll<HTMLIFrameElement>(
          'iframe.wp-embedded-content'
        );

      iframes?.forEach((iframe) => {
        iframe.dispatchEvent(new Event('load'));
      });
    };

    window.addEventListener('message', onMessage);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('message', onMessage);
      window.removeEventListener('resize', onResize);
    };
  }, [html]);

  return (
    <div
      ref={ref}
      className="prose prose-lg max-w-none wp-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
