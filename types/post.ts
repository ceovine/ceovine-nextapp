import type { Category } from "./category";
import type { Tag } from "./tag";

/**
 * For listing pages
 * (Home, Category, Search, Trending, Latest)
 */
export interface Post {
  id: number;
  title: string;
  slug: string;
  image: string;
  date?: string;

  category?: Category;
  tags?: Tag[];
}

/**
 * For single post page
 */
export interface SinglePost extends Post {
  content: string;
  excerpt: string;
  author: string;
}
