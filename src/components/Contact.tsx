import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, ExternalLink, Sparkles, Clock, Check } from 'lucide-react';
import { CONTACT_INFO, CONFIRM_ADDRESS, CLASS_SCHEDULE } from '../types.ts';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    ageGroup: 'Child',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      return;
    }

    const subject = encodeURIComponent(`Admission Inquiry - ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Elite Sports Karate Academy Team,\n\n` +
      `I would like to inquire about karate admissions:\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Age Group: ${formData.ageGroup}\n` +
      `Message: ${formData.message || 'I am interested in joining karate classes.'}\n\n` +
      `Looking forward to hearing from you,\n${formData.name}`
    );

    // Open pre-filled mailto
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  // Address logic: Render confirmed address if provided, otherwise standard "Mohammadpur, Dhaka, Bangladesh"
  const displayAddress = CONFIRM_ADDRESS ? CONFIRM_ADDRESS : `${CONTACT_INFO.area}, ${CONTACT_INFO.country}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0E0E0E] border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Banner */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider mb-4 shadow-md shadow-amber-400/10">
            <Sparkles className="w-4 h-4 fill-current" />
            <span>Admission Open — <span className="font-bengali">ভর্তি চলছে</span></span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-wider leading-[0.95] mb-4">
            Join Elite Sports <span className="text-[#E11D2E]">Karate Academy</span>
          </h2>

          <div className="w-16 h-1 bg-[#E11D2E] mx-auto mt-2 mb-4" />

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Begin your journey in martial arts discipline, physical fitness, and practical self-defence today. Training open for all ages — boys and girls.
          </p>
        </div>

        {/* 2-Column Split: Direct Contact & Info on Left, Inquiry Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Contact Cards & Map */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Contact Details List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone (Click to call) */}
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="p-5 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-[#E11D2E]/60 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-[#E11D2E] group-hover:bg-[#E11D2E] group-hover:text-white transition-colors mb-3">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    Call Directly
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white group-hover:text-[#E11D2E] transition-colors">
                    {CONTACT_INFO.phone}
                  </span>
                </div>
                <span className="text-xs text-neutral-400 mt-3 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Tap to call now &rarr;
                </span>
              </a>

              {/* Email (mailto link) */}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="p-5 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-[#E11D2E]/60 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-[#E11D2E] group-hover:bg-[#E11D2E] group-hover:text-white transition-colors mb-3">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    Email Academy
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white break-all group-hover:text-[#E11D2E] transition-colors">
                    {CONTACT_INFO.email}
                  </span>
                </div>
                <span className="text-xs text-neutral-400 mt-3 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Send email &rarr;
                </span>
              </a>
            </div>

            {/* Facebook & Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Facebook Page */}
              <a
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-[#E11D2E] group-hover:bg-blue-600 group-hover:text-white transition-colors mb-3">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    Facebook Community
                  </span>
                  <span className="text-sm font-bold text-white">
                    Elite Sports Karate Academy
                  </span>
                </div>
                <span className="text-xs text-neutral-400 mt-3">
                  Visit Facebook Page &rarr;
                </span>
              </a>

              {/* Address / Location Card */}
              <div className="p-5 rounded-xl bg-neutral-900/90 border border-neutral-800 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-[#E11D2E] mb-3">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    Dojo Location
                  </span>
                  <span className="text-sm font-bold text-white leading-snug">
                    {displayAddress}
                  </span>
                </div>
                <span className="text-xs text-neutral-400 mt-3 font-bengali">
                  মোহাম্মদপুর, ঢাকা, বাংলাদেশ
                </span>
              </div>
            </div>

            {/* Optional Class Schedule Block (Hidden until {{CLASS_SCHEDULE}} is filled) */}
            {CLASS_SCHEDULE && (
              <div className="p-5 rounded-xl bg-neutral-900 border border-neutral-800">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-2">
                  <Clock className="w-4 h-4 text-[#E11D2E]" />
                  <span>Class Schedule</span>
                </div>
                <p className="text-xs text-neutral-300">{CLASS_SCHEDULE}</p>
              </div>
            )}

            {/* Google Maps Embed iframe */}
            <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-inner">
              <iframe
                title="Elite Sports Karate Academy Location - Mohammadpur, Dhaka"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14606.070087799042!2d90.35427!3d23.7634!2m3!1f0!2f0!3f0!3m2!1i1024!2i786!4f13.1!3m3!1m2!1s0x3755c09f9ba3d447%3A0x1bab85464f6281e7!2sMohammadpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full grayscale contrast-125 filter opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Right Column: Admission Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl">
              <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-wider mb-2">
                Send Admission Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-6">
                Fill out the details below to connect directly with the academy via email.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/80 text-center animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">
                    Inquiry Email Prepared
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                    Your email client should open with your inquiry details addressed to <span className="text-white font-mono">{CONTACT_INFO.email}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-neutral-400 underline hover:text-white transition-colors"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="student-name" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="student-name"
                      type="text"
                      required
                      placeholder="e.g. Tanvir Ahmed"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-[#E11D2E] focus:ring-1 focus:ring-[#E11D2E] text-sm transition-colors"
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label htmlFor="student-phone" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      id="student-phone"
                      type="tel"
                      required
                      placeholder="e.g. +880 1XXXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-[#E11D2E] focus:ring-1 focus:ring-[#E11D2E] text-sm transition-colors"
                    />
                  </div>

                  {/* Age Group dropdown */}
                  <div>
                    <label htmlFor="student-age-group" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                      Age Group
                    </label>
                    <select
                      id="student-age-group"
                      value={formData.ageGroup}
                      onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-neutral-950 border border-neutral-800 text-white focus:outline-none focus:border-[#E11D2E] focus:ring-1 focus:ring-[#E11D2E] text-sm transition-colors"
                    >
                      <option value="Child (Under 12)">Child (Under 12 years)</option>
                      <option value="Teen (13 - 17)">Teen (13 - 17 years)</option>
                      <option value="Adult (18+)">Adult (18+ years)</option>
                      <option value="Family / Multiple">Family / Multiple members</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="student-message" className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                      Message / Note (Optional)
                    </label>
                    <textarea
                      id="student-message"
                      rows={3}
                      placeholder="Tell us about your martial arts interests or training goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-[#E11D2E] focus:ring-1 focus:ring-[#E11D2E] text-sm transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-lg bg-[#E11D2E] hover:bg-[#C51624] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#E11D2E]/25 active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>

                  <p className="text-[11px] text-neutral-500 text-center pt-2">
                    Submitting opens a pre-addressed email to <span className="text-neutral-400 font-mono">{CONTACT_INFO.email}</span>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
