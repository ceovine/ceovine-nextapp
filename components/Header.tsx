'use client';
import Link from 'next/link';
import { Search, Menu } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import SearchBox from '@/components/SearchBox';


const Header = () => {
  
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">

      {/* TOP BAR */}
      <div className="bg-[#15261e] text-white/70 text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">

          {/* LEFT LINKS */}
          <div className="flex gap-4">
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/term">Terms & Conditions</Link>
          </div>

          {/* RIGHT SOCIAL */}
          <div className="flex gap-3">
            <Link href="https://www.facebook.com/ceovine" target="_blank" rel="noopener noreferrer">
            <Image
            src="/facebook.png"
            alt="facebook icon"
            width={20}
            height={20}
          /></Link> 
            <Link href="https://x.com/ceovine" target="_blank" rel="noopener noreferrer"><Image
            src="/twitter.png"
            alt="twitter icon"
            width={18}
            height={18}
          /></Link>
            <Link href="https://www.linkedin.com/company/ceo-vine/" target="_blank" rel="noopener noreferrer"><Image
            src="/linkedin.png"
            alt="linkedin icon"
            width={20}
            height={20}
          /></Link>
            <Link href="https://www.instagram.com/ceovineindia/" target="_blank" rel="noopener noreferrer"><Image
            src="/video.png"
            alt="video icon"
            width={20}
            height={20}
          /></Link>
          </div>

        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="bg-[#376852] text-white/70">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center">

          {/* LOGO */}
          <div className="font-bold text-2xl mr-10">
            <Link href="/"><Image
            className='site_logo'
            src="/logo.png"
            alt="Ceovine Logo"
            width={190}
            height={40}
          /></Link>
          </div>

          {/* CENTER MENU */}
          <nav className="hidden md:flex gap-6 text-sm font-semibold uppercase tracking-wide flex-1">
            <Link href="/category/founders-spot">Founders Spot</Link>
            <Link href="/category/women-leaders">Women Leaders</Link>
            <Link href="/category/brands">Brands</Link>
            <Link href="/category/startups">Startups</Link>
            <Link href="/category/insights">Insights</Link>
            <Link href="/category/news">News</Link>
          </nav>

          {/* RIGHT ICONS */}
          <div className="flex gap-4 ml-auto">
            
             {/* SEARCH BUTTON */}
            <button
                onClick={() => setOpen(true)}
                aria-label="Search"
                className="p-2 hover:bg-white/20 rounded"
                >
                <Search size={20} />
                </button>


            {/* MENU */}
            <button className="p-2 hover:bg-gray-100 rounded md:hidden" aria-label="Open menu">
                <Menu size={22} />
            </button>

          </div>

        </div>
      </div>


      {/* SEARCH BOX */}
      {open && (
        <div className="border-t bg-white">
            <SearchBox onClose={() => setOpen(false)} />
        </div>
        )}


    </header>
  );
};

export default Header;
