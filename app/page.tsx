import { 
  getLatestPosts, 
  getTrendingPosts, 
  getCategoryPosts } from '@/lib/api';
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
    newsPosts,
    startupslist,
    founders_spot_grid,
    women_leaders_grid,
    //insights_grid,
    insights_hero_type,
  ] = await Promise.all([
    getLatestPosts(),
    getTrendingPosts(),
    getCategoryPosts('brands', 3),
    getCategoryPosts('food-beverages', 3),
    getCategoryPosts('news', NEWS_LATEST_LIMIT + 1),
    getCategoryPosts('startups', 3),
    getCategoryPosts('founders-spot', 3),
    getCategoryPosts('women-leaders', 3),
    //getCategoryPosts('insights', 3),
    getCategoryPosts('insights', 3 + 1),
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
    <main className="px-4 py-12 max-w-6xl mx-auto">

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-9 hero_area">
      <div className="lg:col-span-2 hero_big">
      {/* News Category Hero */}
      {newsPosts?.[0] && (
        <HeroBanner2 post={newsPosts[0]} />
      )}
      </div>
      <div>
      {/* News Category Latest */}
      <Latest3 title="LATEST STORIES" posts={newsPosts.slice(1, NEWS_LATEST_LIMIT + 1)}/>


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


    <section className="mx-auto max-w-sm md:max-w-6xl">
        <div className="grid grid-cols-1 gap-5 mt-8  pb-3">
      <h2 className="italic font-bold text-lg uppercase title_with_border"><span>Startups</span></h2>
      <CategoryBlock posts={startupslist} />
      </div>
    </section>

      {/* CATEGORY ROW */}
      {/* <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-7">
        <CategoryList title="Food Beverages" slug="food-beverages" posts={foodbeverages} />
        <CategoryList title="Brands" slug="brands" posts={brands} />
        <CategoryList title="Startups" slug="startups" posts={startupslist} />
        
      </section> */}
      <section className="grid grid-cols-1 gap-5 mt-8  pb-3">
        <h2 className="italic font-bold text-lg uppercase title_with_border"><span>Insights</span></h2>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10 hero_area">
      <div className="lg:col-span-2">
      {/* News Category Hero */}
      {insights_hero_type?.[0] && (
        <HeroBanner2 post={insights_hero_type[0]} />
      )}
      </div>
      <div>
      {/* News Category Latest */}
      <Latest3 title="" posts={insights_hero_type.slice(1, 4 + 1)}/>


      {/* <Latest2 posts={newsPosts.slice(1, NEWS_LATEST_LIMIT + 1)} /> */}
      </div>
      </section>



      {/* category grid */}
      <section className="mx-auto max-w-sm md:max-w-6xl">
        <div className="grid grid-cols-1 gap-5 mt-8  pb-3">
          <h2 className="italic font-bold text-lg uppercase title_with_border"><span>Brands</span></h2>
          <CategoryBlock posts={brands} />
        </div>
    </section>
    <section className="mx-auto max-w-sm md:max-w-6xl">
        <div className="grid grid-cols-1 gap-5 mt-8  pb-3">
      <h2 className="italic font-bold text-lg uppercase title_with_border"><span>Founders Spot</span></h2>
      <CategoryBlock posts={founders_spot_grid} />
      </div>
    </section>
    
    


    


    <section className="mx-auto max-w-sm md:max-w-6xl">
        <div className="grid grid-cols-1 gap-5 mt-8  pb-3">
      <h2 className="italic font-bold text-lg uppercase title_with_border"><span>Women Leaders</span></h2>
      <CategoryBlock posts={women_leaders_grid} />
      </div>
    </section>

    {/* <section className="grid grid-cols-1 gap-5 mt-8  pb-3">
      <h2 className="italic font-bold text-lg uppercase title_with_border"><span>Insights</span></h2>
      <CategoryBlock posts={insights_grid} />
    </section> */}

      
    </main>
  );
};

export default Home;
