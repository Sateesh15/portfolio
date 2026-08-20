import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { personalProfile } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { LinkedinIcon, GithubIcon } from '../components/Icons';
import { TiltCard } from '../components/TiltCard';

interface ContactProps {
  onCopyText: (text: string, label: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onCopyText }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    onCopyText(text, `${fieldName} copied to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    setIsSubmitting(true);

    // Formulate a pre-filled mailto link so it directly opens the user's email client
    const subject = encodeURIComponent(`Inquiry / Opportunity for Munnam Sateesh from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Sateesh,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`
    );
    const mailtoUrl = `mailto:${personalProfile.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');

      // Attempt to launch the user's default email client
      window.location.href = mailtoUrl;

      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Get in Touch"
          title="Contact & Hiring"
          subtitle="Interested in discussing a software engineering or full stack developer role? Let's connect directly via email, phone, or LinkedIn."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <TiltCard
              maxTilt={5}
              glowColor="rgba(16, 185, 129, 0.12)"
              className="p-7 sm:p-8 rounded-3xl glass-card border border-slate-800 space-y-6 hover:border-emerald-500/40"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-1">
                  {personalProfile.name}
                </h3>
                <p className="text-xs font-mono text-emerald-400 font-semibold">
                  {personalProfile.title} • 4 Yrs Exp
                </p>
              </div>

              {/* Contact List */}
              <div className="space-y-4">
                
                {/* Location */}
                <div className="flex items-center gap-3.5 text-sm text-slate-300">
                  <div className="w-11 h-11 rounded-2xl bg-dark-900 border border-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 font-mono block">Location</span>
                    <span className="font-medium text-slate-200">{personalProfile.location}</span>
                  </div>
                </div>

                {/* Email with copy & hover */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-dark-900/90 border border-slate-800/80 hover:border-emerald-500/30 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] text-slate-500 font-mono block">Direct Email</span>
                      <a
                        href={`mailto:${personalProfile.email}`}
                        className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-emerald-400 transition-colors truncate block"
                      >
                        {personalProfile.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(personalProfile.email, 'Email')}
                    className="p-2.5 rounded-xl bg-dark-800 text-slate-400 hover:text-emerald-400 hover:bg-dark-700 transition-all cursor-pointer active:scale-95"
                    title="Copy email address"
                  >
                    {copiedField === 'Email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone with copy */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-dark-900/90 border border-slate-800/80 hover:border-cyan-500/30 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 font-mono block">Mobile / WhatsApp</span>
                      <a
                        href={`tel:${personalProfile.phone.replace(/\s+/g, '')}`}
                        className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors block"
                      >
                        {personalProfile.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(personalProfile.phone, 'Phone')}
                    className="p-2.5 rounded-xl bg-dark-800 text-slate-400 hover:text-cyan-400 hover:bg-dark-700 transition-all cursor-pointer active:scale-95"
                    title="Copy phone number"
                  >
                    {copiedField === 'Phone' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <span className="text-xs font-mono text-slate-400 font-semibold block">
                  Professional Networks
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalProfile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-dark-900 hover:bg-[#0077b5] text-slate-200 hover:text-white border border-slate-800 hover:border-[#0077b5] text-xs font-bold transition-all hover:scale-105 active:scale-95 shadow-sm"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalProfile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-dark-900 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-800 hover:border-slate-600 text-xs font-bold transition-all hover:scale-105 active:scale-95 shadow-sm"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl glass-card border border-slate-800 animated-gradient-border">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-100">
                    Send a Direct Message
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400">
                    Dispatches directly to {personalProfile.email}
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-slate-400 mb-1.5 font-semibold">
                    Your Name / Organization *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins (Engineering Recruiter)"
                    className="w-full px-4 py-3.5 rounded-2xl bg-dark-900/90 border border-slate-800 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-emerald-500/70 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-slate-400 mb-1.5 font-semibold">
                    Your Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3.5 rounded-2xl bg-dark-900/90 border border-slate-800 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-emerald-500/70 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-400 mb-1.5 font-semibold">
                    Message / Opportunity Details *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Sateesh, we came across your Java Full Stack profile and would like to discuss..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-dark-900/90 border border-slate-800 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-emerald-500/70 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-y"
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-medium flex items-center gap-3 animate-in fade-in duration-300">
                    <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Your email client has opened with your message ready to send! You can also email directly at <strong>{personalProfile.email}</strong>.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl font-bold text-sm bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-dark-950 shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 hover:scale-[1.01]"
                >
                  {isSubmitting ? (
                    <span>Opening email composer...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-400 font-mono text-center pt-2">
                  ⚡ Immediate contact: <a href={`mailto:${personalProfile.email}`} className="text-emerald-400 underline">{personalProfile.email}</a> • <a href={`tel:${personalProfile.phone.replace(/\s+/g, '')}`} className="text-emerald-400 underline">{personalProfile.phone}</a>
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
