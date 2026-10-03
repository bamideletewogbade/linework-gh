import React from 'react';
import ConversationalBrief from '@/components/ConversationalBrief';
import { Phone, Mail, Instagram, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-700 font-semibold block mb-2">
            Confidential Consultation &middot; Accra &amp; Diaspora
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            Initiate Your Architectural Brief
          </h1>
          <p className="text-stone-600 text-base md:text-lg leading-relaxed font-sans">
            Whether you have already acquired land in Cantonments or are an overseas Ghanaian investor planning your future residence, our studio team will evaluate your site parameters and provide a comprehensive feasibility appraisal.
          </p>
        </div>

        {/* Contact Info Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <div className="bg-white p-5 rounded-lg border border-stone-200 shadow-sm flex items-start gap-3.5">
            <div className="w-9 h-9 rounded bg-amber-500/10 text-amber-700 flex items-center justify-center flex-shrink-0">
              <Phone size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400">Direct WhatsApp &amp; Calls</span>
              <a href="https://wa.me/233256869481" target="_blank" rel="noopener noreferrer" className="font-mono text-sm font-bold text-stone-900 hover:text-amber-700 transition-colors">
                +233 25 686 9481
              </a>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-stone-200 shadow-sm flex items-start gap-3.5">
            <div className="w-9 h-9 rounded bg-amber-500/10 text-amber-700 flex items-center justify-center flex-shrink-0">
              <Mail size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400">General &amp; RFP Email</span>
              <a href="mailto:info@notjustlines.com" className="font-mono text-sm font-bold text-stone-900 hover:text-amber-700 transition-colors">
                info@notjustlines.com
              </a>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-stone-200 shadow-sm flex items-start gap-3.5">
            <div className="w-9 h-9 rounded bg-amber-500/10 text-amber-700 flex items-center justify-center flex-shrink-0">
              <Instagram size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400">Official Instagram</span>
              <a href="https://www.instagram.com/linework.design/?igshid=Yzg5MTU1MDY%3D" target="_blank" rel="noopener noreferrer" className="font-mono text-sm font-bold text-stone-900 hover:text-amber-700 transition-colors">
                @linework.design
              </a>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-stone-200 shadow-sm flex items-start gap-3.5">
            <div className="w-9 h-9 rounded bg-amber-500/10 text-amber-700 flex items-center justify-center flex-shrink-0">
              <MapPin size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400">Atelier Location</span>
              <span className="font-mono text-sm font-bold text-stone-900">
                Accra, Ghana
              </span>
            </div>
          </div>
        </div>

        {/* The Conversational Brief Component */}
        <div className="mb-16">
          <ConversationalBrief />
        </div>

      </div>
    </div>
  );
}
