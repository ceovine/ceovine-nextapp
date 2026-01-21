import type { Category } from "./category";
import type { Tag } from "./tag";


export type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdValue[]
  | { [key: string]: JsonLdValue };


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

export interface SeoData {
  title?: string;
  description?: string;
  canonical?: string;
  schema?: JsonLdValue | JsonLdValue[];
}

/**
 * For single post page
 */
export interface SinglePost extends Post {
  content: string;
  excerpt: string;
  author: string;
  seo?: SeoData;
}
