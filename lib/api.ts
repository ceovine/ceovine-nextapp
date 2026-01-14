import { Post } from '@/types/post';

const BASE = process.env.NEXT_PUBLIC_API_BASE;

if (!BASE) {
  throw new Error('NEXT_PUBLIC_API_BASE is not defined');
}

/**
 * Generic fetch helper
 */
async function fetchAPI<T>(
  endpoint: string,
  revalidate: number = 0
): Promise<T> {
  const res = await fetch(`${BASE}${endpoint}`, {
    next: { revalidate },
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}

/**
 * Latest News
 * /wp-json/ceovine/v1/latest
 */
export async function getLatestPosts(): Promise<Post[]> {
  return fetchAPI<Post[]>('/latest', 60);
}

/**
 * Trending News
 * /wp-json/ceovine/v1/trending
 */
export async function getTrendingPosts(): Promise<Post[]> {
  return fetchAPI<Post[]>('/trending', 300);
}

/**
 * Category Wise Posts
 * /wp-json/ceovine/v1/category/{slug}?limit=3
 */
export async function getCategoryPosts(
  slug: string,
  limit = 3
): Promise<Post[]> {
  return fetchAPI<Post[]>(
    `/category/${slug}?limit=${limit}`,
    300
  );
}


export async function getCategoryPostsPaginated(
  slug: string,
  page: number,
  limit = 20
): Promise<{
  posts: Post[];
  hasMore: boolean;
  nextPage: number;
}> {
  const res = await fetch(
    `${BASE}/category/${slug}?page=${page}&limit=${limit}`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error('Failed to load category posts');
  }

  return res.json();
}



/**
 * 🔍 Search Posts
 * /wp-json/ceovine/v1/search?q=keyword
 */
export async function searchPosts(query: string): Promise<Post[]> {
  if (!query || query.trim().length < 2) return [];

  const res = await fetch(
    `${BASE}/search?q=${encodeURIComponent(query)}`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    console.error('Search API failed');
    return [];
  }

  return res.json();
}

/*
Single Post
/wp-json/ceovine/v1/post/{slug}
*/
export async function getPostBySlug(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/post/${slug}`,
    { next: { revalidate: 300 } } // ISR
  );

  if (!res.ok) return null;
  return res.json();
}
