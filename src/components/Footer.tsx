import React from 'react';
import { ExternalLink, Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../types.ts';

export const Footer: React.FC = () => {
  const currentYear = 2026;

  const quickLinks = [
    { label: 'About Academy', href: '#about' },
    { label: 'Meet The Founder', href: '#founder' },
    { label: 'Why Train With Us', href: '#why-train' },
    { label: 'International Experience', href: '#international' },
    { label: 'Dojo & Student Gallery', href: '#gallery' },
    { label: 'Contact & Admission', href: '#contact' },
  ];

  return (
    <footer className="bg-[#070707] border-t border-neutral-900 py-14 px-4 sm:px-6 lg:px-8 text-neutral-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          {/* Brand & Tagline */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <a href="#" className="flex items-baseline gap-2 group text-decoration-none">
              <span className="font-display text-2xl sm:text-3xl tracking-wider text-white uppercase group-hover:text-neutral-200 transition-colors">
                ELITE SPORTS
              </span>
              <span className="font-display text-base tracking-widest text-[#E11D2E] uppercase font-semibold">
                Karate Academy
              </span>
            </a>

            <p className="font-display text-xl text-neutral-200 uppercase tracking-wide">
              Train Hard. Be Stronger.
            </p>

            <p className="text-sm text-neutral-400 max-w-sm">
              Discipline | Fitness | Self Defence | A Better You
            </p>

            <p className="text-xs text-neutral-500 font-bengali">
              মোহাম্মদপুর, ঢাকা, বাংলাদেশ • সকল বয়সের জন্য কারাতে প্রশিক্ষণ
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-300 font-semibold mb-1">
              Navigation
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary & Social */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-300 font-semibold mb-1">
              Direct Contact
            </h4>
            <div className="flex flex-col gap-2 text-xs text-neutral-400">
              <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#E11D2E]" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#E11D2E]" />
                <span className="break-all">{CONTACT_INFO.email}</span>
              </a>
              <div className="flex items-center gap-2 text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-[#E11D2E]" />
                <span>{CONTACT_INFO.area}, {CONTACT_INFO.country}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#E11D2E]" />
                <span>Facebook Page</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {currentYear} Elite Sports Karate Academy. All rights reserved.</p>
          <p className="font-mono text-[11px] text-neutral-600">
            Official Academy Website • Mohammadpur, Dhaka
          </p>
        </div>
      </div>
    </footer>
  );
};
