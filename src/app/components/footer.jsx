import Link from 'next/link';
import React from 'react';

export default function Footer() {
  // Footer links organized in arrays
  const footerLinks = {
    about: [
      { name: 'Our Story', url: '#' },
      { name: 'Our Mission', url: '#' },
      { name: 'Customer Reviews', url: '#' },
      { name: 'Blogs and Articles', url: '#' },
      { name: 'About US', url: '#' },
      { name: 'Contact', url: '#' }
    ],
    quickLinks: [
      { name: 'Rings', url: '#' },
      { name: 'Bracelets', url: '#' },
      { name: 'Earrings', url: '#' },
      { name: 'Pendants', url: '#' },
      { name: 'Necklace', url: '#' },
      { name: 'Engagement Rings', url: '#' }
    ],
    support: [
      { name: 'Contact Us', url: '#' },
      { name: 'Shipping and Return Policy', url: '#' },
      { name: 'Order Status', url: '#' },
      { name: 'Ring Size Guide', url: '#' },
      { name: 'Diamond Warranty', url: '#' }
    ]
  };

  return (
<footer className="bg-white border-t text-gray-800 py-12 px-4 md:px-8 lg:px-22 shadow-[0px_-10px_41.6px_rgba(0,0,0,0.25)]">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* ABOUT SECTION */}
        <div className="space-y-4">
          <h3 className="font-bold text-2xl uppercase">ABOUT</h3>
          <ul className="space-y-2">
            {footerLinks.about.map((link, index) => (
              <li key={`about-${index}`}>
                <a href={link.url} className="hover:text-gray-600 transition-colors text-black">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* QUICK LINKS SECTION */}
        <div className="space-y-4">
          <h3 className="font-bold text-2xl uppercase">QUICK LINKS</h3>
          <ul className="space-y-2">
            {footerLinks.quickLinks.map((link, index) => (
              <li key={`quick-${index}`}>
                <a href={link.url} className="hover:text-gray-600 transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SUPPORT SECTION */}
        <div className="space-y-4">
          <h3 className="font-bold text-2xl uppercase">SUPPORT</h3>
          <ul className="space-y-2">
            {footerLinks.support.map((link, index) => (
              <li key={`support-${index}`}>
                <a href={link.url} className="hover:text-gray-600 transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* NEWSLETTER SECTION */}
        <div className="space-y-4 sm:col-span-2 md:col-span-1">
          <h3 className="font-bold text-2xl uppercase">NEWSLETTER</h3>
          <p className="text-sm">Send me GEMS GLOBAL JEWELS news, Updates and Offers</p>
          <div className="flex flex-col space-y-2">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
            <button className="bg-[#2B4E4E] text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
              SUBMIT
            </button>
          </div>
        </div>
      </div>

      {/* COPYRIGHT SECTION */}
      <div className="mt-12 pt-6 border-t border-gray-200 grid justify-items-center">
        {/* <img 
          src='/img/mansi.svg' 
          alt='GEMS GLOBAL JEWELS' 
          className='object-contain'
        /> */}
         {/* <Link
            href="/"
            className="absolute left-1/2 transform -translate-x-1/2 text-4xl font-semibold text-[#2B4E4E]"
          >
            GEMS GLOBAL JEWELS
          </Link> */}
        <p className="text-sm mt-2 text-center">
          Copyrighted © {new Date().getFullYear()} All Rights Reserved 
        </p>
      </div>
    </footer>
  );
}