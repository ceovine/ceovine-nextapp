import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-gray-300 pt-16 ceo_footer">
      <div className="max-w-6xl mx-auto px-6">


        {/* MAIN GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* COLUMN 1 */}
          <div>
             {/* LOGO */}
          <div>
            <Link href="/"><Image
            className='site_logo mb-6'
            src="/logo.png"
            alt="Ceovine Logo"
            width={190}
            height={40}
          /></Link>
          </div>
            <p className='text-sm'>CEO VINE is a digital publication dedicated to India’s growing startup and business ecosystem.</p>
          {/* SOCIAL ICONS */}
          <div className="flex gap-4 text-white">
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

          {/* COLUMN 2 */}
          <div>
            <h4 className="font-semibold mb-4">Industry News</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/category/founders-spot">Founders Spot</Link></li>
              <li><Link href="/category/women-leaders">Women Leaders</Link></li>
              <li><Link href="/category/brands">Brands</Link></li>
              <li><Link href="/category/startups">Startups</Link></li>
              <li><Link href="/category/insights">Insights</Link></li>
              <li><Link href="/category/news">News</Link></li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h4 className="font-semibold mb-4">Other News</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">Art & Culture</Link></li>
              <li><Link href="#">Education</Link></li>
              <li><Link href="#">Elections</Link></li>
              <li><Link href="#">Entertainment</Link></li>
              <li><Link href="#">Lifestyle</Link></li>
              <li><Link href="#">Tech</Link></li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h4 className="font-semibold mb-4">Quick links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
              <li><Link href="/term">Terms & Conditions</Link></li>

            </ul>
          </div>

        </div>

        <hr className="border-gray-700 my-12" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-center text-sm gap-4 pb-6">
          <p>© Copyrights 2026 CEO VINE. All Rights Reserved. </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
