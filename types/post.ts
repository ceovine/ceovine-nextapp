export interface Post {
  id: number;
  title: string;
  slug: string;
  image: string;
  date?: string;
  category?: {
    name: string;
    slug: string;
  };
}
