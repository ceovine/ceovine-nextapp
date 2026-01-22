import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-gray-300 pt-16 ceo_footer">
      <div className="max-w-6xl mx-auto px-6">


        {/* MAIN GRID */}
        <div className="grid grid-cols-1 text-center items-center gap-10">

          {/* COLUMN 1 */}
          <div className="flex flex-col items-center">
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


              {/* MERGED LINKS COLUMN */}
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-8 max-w-4xl mx-auto">
                  <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm ">
                    {[
                      ['Startups', '/category/startups'],
                      ['Tech & IT', '/category/tech-it'],
                      ['Food & Beverages', '/category/food-beverages'],
                      ['Agritech', '/category/agritech'],
                      ['Fintech', '/category/fintech'],
                      ['Hotel & Hospitality', '/category/hotel-hospitality'],
                      ['EV & Automobile', '/category/ev-automobile'],
                      ['Ecofriendly & Sustainable', '/category/ecofriendly-sustainable'],
                      ['NGOs', '/category/ngos'],
                      ['Travel Tech', '/category/travel-tech'],
                      ['HealthTech', '/category/healthtech'],
                      ['Pharmaceutical', '/category/pharmaceutical'],
                      ['EdTech', '/category/edtech'],
                      ['Ecommerce', '/category/ecommerce'],
                      ['Retail', '/category/retail'],
                      ['Other C-Suites', '/category/other-c-suites'],
                    ].map(([label, href]) => (
                      <li key={href} className="whitespace-nowrap">
                        <Link
                          href={href}
                          className="hover:text-white transition"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}

                  </ul>
              </div>




        </div>

        <hr className="border-gray-700 mt-8 mb-8" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-center text-sm gap-4 pb-14">
          <p>© Copyrights 2026 CEO VINE. All Rights Reserved. </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
