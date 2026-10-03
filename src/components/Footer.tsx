import React from 'react';
import Link from 'next/link';
import { Instagram, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B0E14] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Manifesto Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/10 rounded-sm flex items-center justify-center p-1.5">
                <svg viewBox="0 0 32 32" className="w-full h-full" aria-hidden="true">
                  <path d="M6 26V6M6 26h20" stroke="#F5A524" strokeWidth="3" strokeLinecap="square"/>
                  <path d="M12 26v-9l6.5-5.5L25 17v9" stroke="#6EE7F9" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <span className="font-extrabold text-lg tracking-[0.16em] uppercase text-white font-sans">
                Linework<span className="text-amber-500 ml-0.5">GH</span>
              </span>
            </Link>

            <p className="text-stone-400 text-sm leading-relaxed max-w-md font-sans">
              Linework Design &amp; Construction Ltd. is an integrated architectural practice and general building company based in Accra, Ghana. We close the gap between theoretical blueprints and on-site engineering execution.
            </p>

            <div className="mt-2 flex flex-col gap-2 font-mono text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-amber-500 flex-shrink-0" />
                <span>Cantonments &middot; Airport Residential &middot; Accra, Ghana</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-amber-500 flex-shrink-0" />
                <a href="tel:+233256869481" className="hover:text-white transition-colors">+233 25 686 9481</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-amber-500 flex-shrink-0" />
                <a href="mailto:info@notjustlines.com" className="hover:text-white transition-colors">info@notjustlines.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-amber-500 font-semibold">
              The Practice
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-stone-400 font-sans">
              <li><Link href="/about" className="hover:text-white transition-colors">About Linework</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Design-Build Services</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Selected Projects</Link></li>
              <li><Link href="/services#diaspora" className="hover:text-white transition-colors">Diaspora Remote Hub</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Schedule Consultation</Link></li>
            </ul>
          </div>

          {/* Typologies */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-amber-500 font-semibold">
              Typologies
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-stone-400 font-sans">
              <li><Link href="/projects?type=residential" className="hover:text-white transition-colors">Private Luxury Villas</Link></li>
              <li><Link href="/projects?type=commercial" className="hover:text-white transition-colors">Commercial Pavilions</Link></li>
              <li><Link href="/projects?type=interior" className="hover:text-white transition-colors">Interior Architecture</Link></li>
              <li><Link href="/projects?type=structural" className="hover:text-white transition-colors">Coastal Superstructures</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Masterplanning</Link></li>
            </ul>
          </div>

          {/* Direct Social & Connect */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-amber-500 font-semibold">
              Direct Channels
            </h4>
            <p className="text-xs text-stone-400 font-sans">
              Connect directly with our principal architects for preliminary project appraisals.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://wa.me/233256869481"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-stone-950 font-bold text-xs font-mono uppercase tracking-wider py-2.5 px-3.5 rounded flex items-center justify-between hover:bg-[#20ba5a] transition-colors"
              >
                <span>WhatsApp Studio</span>
                <ArrowUpRight size={14} />
              </a>
              <a
                href="https://www.instagram.com/linework.design/?igshid=Yzg5MTU1MDY%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 text-white text-xs font-mono uppercase tracking-wider py-2.5 px-3.5 rounded flex items-center justify-between hover:border-amber-500 hover:text-amber-400 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Instagram size={14} />
                  <span>@linework.design</span>
                </div>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-400">
          <div>
            &copy; {new Date().getFullYear()} LINEWORK DESIGN &amp; CONSTRUCTION LTD. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span>NOT JUST LINES</span>
            <span className="text-stone-400">&middot;</span>
            <span>ACCRA, GHANA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
