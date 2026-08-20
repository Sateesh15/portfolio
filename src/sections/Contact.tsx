import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { personalProfile } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { LinkedinIcon, GithubIcon } from '../components/Icons';

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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

    // Front-end interactive handler.
    // NOTE FOR DEPLOYMENT: To connect this form directly to your email inbox,
    // integrate EmailJS (https://www.emailjs.com/) or Formspree (https://formspree.io/)
    // by submitting `formData` to your service ID / endpoint.
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Get in Touch"
          title="Contact & Hiring"
          subtitle="Interested in discussing a software engineering or full stack developer role? Let's connect directly via email, phone, or LinkedIn."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-slate-800 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-100 mb-1">
                  {personalProfile.name}
                </h3>
                <p className="text-xs font-mono text-emerald-400">
                  {personalProfile.title} • 4 Yrs Exp
                </p>
              </div>

              {/* Contact List */}
              <div className="space-y-4">
                
                {/* Location */}
                <div className="flex items-center gap-3.5 text-sm text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-dark-850 border border-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-mono block">Location</span>
                    <span className="font-medium text-slate-200">{personalProfile.location}</span>
                  </div>
                </div>

                {/* Email with copy */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-dark-900 border border-slate-800/80 group">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[11px] text-slate-500 font-mono block">Email</span>
                      <a
                        href={`mailto:${personalProfile.email}`}
                        className="text-xs sm:text-sm font-medium text-slate-200 hover:text-emerald-400 transition-colors truncate block"
                      >
                        {personalProfile.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalProfile.email, 'Email')}
                    className="p-2 rounded-lg bg-dark-800 text-slate-400 hover:text-slate-200 hover:bg-dark-700 transition-colors"
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
                <div className="flex items-center justify-between p-3 rounded-xl bg-dark-900 border border-slate-800/80 group">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 font-mono block">Phone</span>
                      <a
                        href={`tel:${personalProfile.phone.replace(/\s+/g, '')}`}
                        className="text-xs sm:text-sm font-medium text-slate-200 hover:text-cyan-400 transition-colors block"
                      >
                        {personalProfile.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalProfile.phone, 'Phone')}
                    className="p-2 rounded-lg bg-dark-800 text-slate-400 hover:text-slate-200 hover:bg-dark-700 transition-colors"
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
              <div className="pt-4 border-t border-slate-850 space-y-3">
                <span className="text-xs font-mono text-slate-400 font-semibold block">
                  Professional Profiles
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalProfile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-dark-850 hover:bg-[#0077b5] text-slate-200 hover:text-white border border-slate-800 text-xs font-semibold transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalProfile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-dark-850 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-800 text-xs font-semibold transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-slate-800">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-slate-100">
                  Send a Direct Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins (Recruiter / Engineering Mgr)"
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-slate-800 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                    Your Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-slate-800 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-400 mb-1.5 font-medium">
                    Message / Opportunity Details *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Sateesh, we are hiring for a Senior Java Full Stack Developer position and would love to connect..."
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-slate-800 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/50 transition-colors resize-y"
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>Thank you for reaching out! You can also email directly at <strong>{personalProfile.email}</strong>.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-bold text-sm bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-dark-950 shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 font-mono text-center pt-2">
                  ⚡ Prefer direct communication? Email: <strong>{personalProfile.email}</strong> | Tel: <strong>{personalProfile.phone}</strong>
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
