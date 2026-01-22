import { NextResponse } from 'next/server';

interface SearchPost {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q');

  if (!q || q.length < 2) {
    return NextResponse.json([]);
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_API}/posts?search=${encodeURIComponent(
      q
    )}&per_page=10&_fields=id,slug,title`
  );

  const data: SearchPost[] = await res.json();

  const results = data.map((post) => ({
    id: post.id,
    slug: post.slug,
    title: post.title.rendered.replace(/<[^>]*>/g, ''),
  }));

  return NextResponse.json(results);
}
