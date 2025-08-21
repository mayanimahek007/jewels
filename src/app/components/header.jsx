'use client';

import { Search, Heart, ShoppingBag, ChevronDown, UserRound, Menu, X, LogIn, Image } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
import { BsHandbag } from 'react-icons/bs';
import { useState, useRef } from 'react';
import { Drawer, DrawerClose, DrawerContent, DrawerTitle, DrawerTrigger } from '../ui/drawer';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const drawerCloseRef = useRef(null);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#2B4E4E] text-white text-sm py-2 px-4 flex items-center justify-between border-b border-gray-200">
        {/* Left: Social Icons */}
        <div className="hidden md:flex items-center gap-3">
          <FaFacebookF className="cursor-pointer hover:text-gray-300" size={18} />
          <FaInstagram className="cursor-pointer hover:text-gray-300" size={18} />
          <FaLinkedinIn className="cursor-pointer hover:text-gray-300" size={18} />
        </div>

        {/* Center: Promo */}
        <div className="text-center text-xs sm:text-sm w-full md:w-auto">
          Old Cut Diamonds SALE - Flat 25% OFF
        </div>

        {/* Right: User info */}
        <div className="hidden md:flex items-center gap-2 cursor-pointer">
          <span className="text-[14px]">Login</span>
          <ChevronDown size={14} />
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="bg-white border-b border-gray-200 relative hidden lg:block">
        <div className="mx-auto px-16 py-3 flex items-center justify-between">
          {/* Search */}
          <div className="hidden md:flex items-center relative group w-56">
            <input
              type="text"
              placeholder="Search Product Here"
              className="pl-0 text-[#2B4E4E] pr-10 py-2 w-44 border-b-2 border-gray-300 bg-transparent focus:border-[#0a1f44] focus:outline-none transition-all duration-300"
            />
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0a1f44] group-hover:w-full transition-all duration-300"></div>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[#0a1f44] hover:text-black transition">
              <Search size={20} />
            </button>
          </div>

          {/* Logo */}
          <img 
          src='/img/mansi.svg' 
          alt='GEMS GLOBAL JEWELS' 
          className='w-full h-17 object-contain left-1/2'
          onClick={() => window.location.href = '/'}
        />
          {/* <Link
            href="/"
            className="absolute left-1/2 transform -translate-x-1/2 text-xl font-semibold text-[#2B4E4E]"
          >
            GEMS GLOBAL JEWELS
          </Link> */}

          {/* Icons */}
          <div className="flex items-center gap-5 flex-1 justify-end">
            <UserRound strokeWidth={1.2} size={28} color='#2B4E4E'/>
            <Link href="/wishlist">
              <Heart strokeWidth={1.2} size={28} color='#2B4E4E' className="cursor-pointer hover:text-[#1a3a3a] transition-colors"/>
            </Link>
            <BsHandbag size={26} color='#2B4E4E'/>
          </div>
        </div>

        {/* Category Nav */}
        <div className="flex items-center justify-center gap-6 text-sm font-medium py-2 bg-white text-[#2B4E4E]">
          <Link href="/product" className="border-b-2 border-[#2B4E4E]">Rings</Link>
          <Link href="#" >Bracelets</Link>
          <Link href="#">Earrings</Link>
          <Link href="#">Pendants</Link>
          <Link href="#">Gold</Link>
          <Link href="#">Silver</Link>
          <Link href="#">Custom Jewellery</Link>
        </div>
      </div>
      <div className="lg:hidden bg-white border-b border-gray-200">
        {/* Search Bar */}
        <div className="px-4 pt-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Product Here"
              className="w-full text-[#2B4E4E] rounded-md bg-[#f5f5f5] pl-4 pr-10 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0a1f44] border-none"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#0a1f44]">
              <Search size={18}  />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          {/* Left: Menu as Drawer Trigger */}
          <Drawer
            direction="left"
            repositionInputs={false}
            shouldScaleBackground={false}
            dismissible={false}
            modal={false}
            handle={false}
            overlayClassName="!pointer-events-none"
            open={isOpen}
            onOpenChange={setIsOpen}
          >
            <DrawerTrigger asChild>
              <Menu size={24} className="cursor-pointer" color='#2B4E4E'/>
            </DrawerTrigger>

            {/* Drawer Content */}
            <DrawerContent className="flex flex-col p-0 data-[vaul-drawer-direction=left]:w-[85%] border-none">
              <DrawerTitle className="sr-only">Mobile side nav bar</DrawerTitle>

              {/* TOP SECTION */}
              <div className="flex items-center justify-between bg-black px-4 py-1">
                <DrawerClose asChild onClick={() => setIsOpen(false)}>
                  <Link href="/" className="mx-auto">
                    <Image
                      src="/icons/diorra-logo.png"
                      height={63}
                      width={160}
                      alt="Company logo"
                      priority
                      className="mx-auto h-[58px] object-cover invert-100"
                    />
                  </Link>
                </DrawerClose>
                <DrawerClose
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-700 text-white transition hover:bg-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={18} />
                </DrawerClose>
              </div>

              {/* CONTENT SECTION */}
              <div className="flex-1 overflow-y-auto bg-white px-4 py-2 text-black">
                {/* Your search bar + links go here (same as your pasted drawer content) */}
              </div>

              {/* BOTTOM SECTION */}
              <div className="bg-primary text-primary-foreground px-4 py-1.5">
                <DrawerClose asChild>
                  <Link href="/login">
                    <button
                      variant="ghost"
                      className="w-full justify-start gap-2 text-white hover:bg-gray-800"
                    >
                      <LogIn size={18} />
                      Login / Sign Up
                    </button>
                  </Link>
                </DrawerClose>
              </div>
            </DrawerContent>
          </Drawer>

          {/* Logo */}
           <img 
          src='/img/mansi.svg' 
          alt='GEMS GLOBAL JEWELS' 
          className='w-32 h-17 object-contain left-1/2'
          onClick={() => window.location.href = '/'}
        />
          {/* <Link href="/" className="text-lg font-semibold tracking-wide text-[#2B4E4E]">
            GEMS GLOBAL JEWELS
          </Link> */}

          {/* Right: Icons */}
          <div className="flex items-center gap-4">
            <Link href="/wishlist">
              <Heart size={22} color='#2B4E4E' className="cursor-pointer hover:text-[#1a3a3a] transition-colors"/>
            </Link>
            <BsHandbag size={22} color='#2B4E4E'/>
          </div>
        </div>

      </div>
    </header>
  );
}
