'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Instagram, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'The Practice', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Professional Announcement Bar */}
      <div className="bg-[#0B0E14] text-[#A9B6C9] border-b border-white/10 text-[11px] font-mono tracking-wider uppercase py-2 px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2 mx-auto md:mx-0">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          <span>Accra Studio &middot; Integrated Architecture &amp; Turnkey Construction</span>
          <span className="hidden lg:inline text-white/40">&middot; Cantonments &amp; Airport Residential</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a 
            href="https://www.instagram.com/linework.design/?igshid=Yzg5MTU1MDY%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Instagram size={13} className="text-amber-500" />
            <span>@linework.design</span>
          </a>
          <a 
            href="https://wa.me/233256869481" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/90 hover:text-amber-400 transition-colors"
          >
            <Phone size={13} className="text-amber-500" />
            <span>+233 25 686 9481</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200 text-stone-900 py-3.5' 
            : 'bg-white border-b border-stone-200 text-stone-900 py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Brand Wordmark */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-[#0B0E14] rounded-sm flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 32 32" className="w-full h-full" aria-hidden="true">
                <path d="M6 26V6M6 26h20" stroke="#F5A524" strokeWidth="3" strokeLinecap="square"/>
                <path d="M12 26v-9l6.5-5.5L25 17v9" stroke="#6EE7F9" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-[0.16em] uppercase leading-tight font-sans">
                Linework<span className="text-amber-600 ml-0.5">GH</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-mono">
                Design &amp; Build Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.18em] font-medium transition-colors py-1 relative ${
                    isActive ? 'text-amber-600 font-semibold' : 'text-stone-700 hover:text-stone-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Direct Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/233256869481"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider font-mono text-stone-600 hover:text-stone-900 px-3 py-2 border border-stone-300 rounded hover:border-stone-900 transition-colors"
            >
              Direct Studio Line
            </a>
            <Link
              href="/contact"
              className="bg-[#0B0E14] text-white text-xs uppercase tracking-[0.14em] font-semibold px-5 py-2.5 rounded hover:bg-amber-600 transition-all duration-200 shadow-sm flex items-center gap-1.5"
            >
              <span>Start Project</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-800 hover:text-black focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden flex flex-col pt-24 px-6 pb-8 overflow-y-auto animate-fadeIn">
          <div className="flex flex-col gap-6 text-lg font-serif">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 border-b border-stone-200 text-stone-900 flex items-center justify-between ${
                  pathname === link.href ? 'text-amber-600 font-bold' : ''
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-stone-400">&rarr;</span>
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-8 border-t border-stone-200 flex flex-col gap-4 font-mono text-xs uppercase tracking-wider">
            <a
              href="https://wa.me/233256869481"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-stone-950 font-bold py-3.5 px-4 rounded text-center flex items-center justify-center gap-2"
            >
              <Phone size={15} />
              <span>WhatsApp Studio (+233 25 686 9481)</span>
            </a>
            <a
              href="mailto:info@notjustlines.com"
              className="w-full bg-stone-100 text-stone-800 py-3 px-4 rounded text-center flex items-center justify-center gap-2 hover:bg-stone-200 transition-colors"
            >
              <Mail size={15} />
              <span>info@notjustlines.com</span>
            </a>
            <a
              href="https://www.instagram.com/linework.design/?igshid=Yzg5MTU1MDY%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border border-stone-300 text-stone-700 py-3 px-4 rounded text-center flex items-center justify-center gap-2"
            >
              <Instagram size={15} />
              <span>Instagram @linework.design</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
