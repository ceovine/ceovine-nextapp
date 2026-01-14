import { getLatestPosts, getTrendingPosts, getCategoryPosts } from '@/lib/api';
//import HeroBanner from '@/components/home/HeroBanner';
//import Latest from '@/components/home/Latest';
import HeroBanner2 from '@/components/home/HeroBanner2';
//import Latest2 from '@/components/home/Latest2';
import Latest3 from '@/components/home/Latest3';
import Trending from '@/components/home/Trending';
import CategoryList from '@/components/home/CategoryList';
import CategoryBlock from '@/components/home/CategoryBlock';


export const revalidate = 60; // ISR

//const LATEST_LIMIT = 4;
const NEWS_LATEST_LIMIT = 4;
const TRENDING_LIMIT = 3;




const Home = async () => {
  const [
    latest,
    trending,
    brands,
    foodbeverages,
    newsPosts
  ] = await Promise.all([
    getLatestPosts(),
    getTrendingPosts(),
    getCategoryPosts('brands', 3),
    getCategoryPosts('food-beverages', 4),
    getCategoryPosts('news', NEWS_LATEST_LIMIT + 1),
  ]);



  // Safety guard
  if (!latest || latest.length === 0) {
    return (
      <main className="p-5">
        <h1 className="text-xl font-bold">CEOVINE</h1>
        <p>No news available.</p>
      </main>
    );
  }

  return (
    <main className="p-6 max-w-6xl mx-auto">

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
      <div className="lg:col-span-2">
      {/* News Category Hero */}
      {newsPosts?.[0] && (
        <HeroBanner2 post={newsPosts[0]} />
      )}
      </div>
      <div>
      {/* News Category Latest */}
      <Latest3 title="LATEST STORIES" posts={newsPosts.slice(1, NEWS_LATEST_LIMIT + 1)}
/>


      {/* <Latest2 posts={newsPosts.slice(1, NEWS_LATEST_LIMIT + 1)} /> */}
      </div>
      </section>

      {/* Latest Post Hero / Banner */}
      {/* <HeroBanner post={latest[0]} /> */}

      {/* Latest Post Latest */}
      {/* <Latest posts={latest.slice(1, LATEST_LIMIT + 1)} /> */}

      {/* Trending */}
      {trending?.length > 0 && (
        <Trending posts={trending.slice(0, TRENDING_LIMIT)} />
      )}


      {/* CATEGORY ROW */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
        <CategoryList title="Food Beverages" slug="food-beverages" posts={foodbeverages} />
        <CategoryList title="Brands" slug="brands" posts={brands} />
        
      </section>

      {/* FUNDING */}
      <CategoryBlock posts={foodbeverages} />


      
    </main>
  );
};

export default Home;
