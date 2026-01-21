'use client';
import Link from 'next/link';
import { Search, Menu } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import SearchBox from '@/components/SearchBox';



const Header = () => {
  
  //const [open, setOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuClosing(true);

    setTimeout(() => {
      setIsMenuOpen(false);
      setMenuClosing(false);
    }, 300); // CSS duration ke barabar
  };





  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  const menuItems = [
        { label: 'Founders Spot', href: '/category/founders-spot' },
        { label: 'Women Leaders', href: '/category/women-leaders' },
        { label: 'Brands', href: '/category/brands' },
        { label: 'Startups', href: '/category/startups' },
        { label: 'Insights', href: '/category/insights' },
        { label: 'News', href: '/category/news' },
      ];
  const menuItemsMob = [
        { label: 'Founders Spot', href: '/category/founders-spot' },
        { label: 'Women Leaders', href: '/category/women-leaders' },
        { label: 'Brands', href: '/category/brands' },
        { label: 'Startups', href: '/category/startups' },
        { label: 'Insights', href: '/category/insights' },
        { label: 'News', href: '/category/news' },
        { label: 'About Us', href: '/about' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Disclaimer', href: '/disclaimer' },
        { label: 'Terms & Conditions', href: '/term' },
      ];

  return (
    <header className="w-full">

      {/* TOP BAR */}
      <div className="bg-[#178a43] text-white/70 text-xs">
        <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">

          {/* LEFT LINKS */}
          <div className="flex gap-4">
            <Link className={`${isActive('/about')? 'text-white' : 'hover:text-white'}`} href="/about">About Us</Link>
            <Link className={`${isActive('/contact')? 'text-white' : 'hover:text-white'}`}  href="/contact">Contact Us</Link>
            <Link className={`${isActive('/privacy-policy')? 'text-white' : 'hover:text-white'}`}  href="/privacy-policy">Privacy Policy</Link>
            <Link className={`${isActive('/disclaimer')? 'text-white' : 'hover:text-white'}`}  href="/disclaimer">Disclaimer</Link>
            <Link className={`${isActive('/term')? 'text-white' : 'hover:text-white'}`}  href="/term">Terms & Conditions</Link>
          </div>

          {/* RIGHT SOCIAL */}
          <div className="flex gap-3">
            <Link href="https://www.facebook.com/ceovine" target="_blank" rel="noopener noreferrer">
            <Image
            src="/f-social.png"
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
      <div className="bg-[#000000] text-white/70">
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
            <nav className="hidden lg:flex gap-6 text-sm font-semibold uppercase tracking-wide ml-auto mr-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${
                    isActive(item.href)
                      ? 'text-white border-b-2 border-[#178a43]'
                      : 'hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>


          {/* RIGHT ICONS */}
          <div className="flex gap-4 ml-auto">
            
             {/* SEARCH BUTTON */}
             <div className="relative flex gap-4 ml-auto">
            <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
                className="p-2 hover:bg-white/20 rounded"
                >
                <Search size={20} />
                </button>

                {/* SEARCH BOX */}
                  {isSearchOpen && (
                    <div className="absolute right-0 top-12 z-50 w-90 bg-white shadow-xl rounded-lg p-3">
                      <SearchBox onClose={() => setIsSearchOpen(false)} />
                    </div>
                  )}
                </div>


            {/* MENU */}
            <button className="p-2 hover:bg-gray-100 rounded lg:hidden" aria-label="Open menu" onClick={openMenu}>
                <Menu size={22} />
            </button>

          </div>

        </div>
      </div>


      






{/* MOBILE SLIDE MENU */}
{isMenuOpen && (
  <div className="fixed inset-0 z-50 bg-black/60 lg:hidden">
    <div
      className={`absolute left-0 top-0 h-full w-72 bg-black text-white p-6
        ${menuClosing ? 'animate-slide-out' : 'animate-slide-in'}`}
    >

      {/* CLOSE */}
      <button
        className="mb-6 text-white" onClick={closeMenu}>
        ✕ Close
      </button>

      {/* MOBILE LINKS */}
      
      
      <nav className="flex flex-col gap-4 uppercase text-sm font-semibold">
        {menuItemsMob.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${
                    isActive(item.href)
                      ? 'text-[#178a43]'
                      : 'hover:text-[#178a43]'
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
      </nav>

    </div>
  </div>
)}




    </header>
  );
};

export default Header;
