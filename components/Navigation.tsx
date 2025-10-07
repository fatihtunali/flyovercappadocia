'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/FlyOverCappadocia-Logo.png"
                alt="Flyover Cappadocia"
                width={200}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600 transition">Home</Link>
            <Link href="/packages" className="text-gray-700 hover:text-orange-600 transition">Packages</Link>
            <Link href="/gallery" className="text-gray-700 hover:text-orange-600 transition">Gallery</Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-orange-600 transition">How It Works</Link>
            <Link href="/faq" className="text-gray-700 hover:text-orange-600 transition">FAQ</Link>
            <Link href="/contact" className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition">
              Book Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <Link href="/" className="block px-3 py-2 text-gray-700" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/packages" className="block px-3 py-2 text-gray-700" onClick={() => setIsOpen(false)}>Packages</Link>
          <Link href="/gallery" className="block px-3 py-2 text-gray-700" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link href="/how-it-works" className="block px-3 py-2 text-gray-700" onClick={() => setIsOpen(false)}>How It Works</Link>
          <Link href="/faq" className="block px-3 py-2 text-gray-700" onClick={() => setIsOpen(false)}>FAQ</Link>
          <Link href="/contact" className="block mx-3 my-2 bg-orange-600 text-white px-6 py-2 rounded-full text-center" onClick={() => setIsOpen(false)}>Book Now</Link>
        </div>
      )}
    </nav>
  );
}
