import { Link } from 'react-router-dom';
import { Compass, Phone, Mail, MapPin } from 'lucide-react';
import { company } from '../data';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Transportation', to: '/transportation' },
  { label: 'Spiritual', to: '/spiritual' },
  { label: 'Why Us', to: '/why-us' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-forest-950 border-t border-white/5 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-ember-500 text-white">
                <Compass className="w-5 h-5" />
              </span>
              <span className="leading-tight">
                <span className="block font-display font-extrabold text-white text-lg">{company.name}</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-ember-300 font-medium">{company.tagline}</span>
              </span>
            </Link>
            <p className="mt-5 text-forest-100/60 text-sm leading-relaxed max-w-md">
              A trusted travel, adventure, and event management company with {company.yearsExperience}+ years of experience
              organizing safe, exciting, and professionally managed tours across India.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-forest-100/60 hover:text-ember-300 text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-forest-100/60 text-sm">
                <Phone className="w-4 h-4 text-ember-400 shrink-0" />
                {company.phone[0]} / {company.phone[1]}
              </li>
              <li className="flex items-center gap-2.5 text-forest-100/60 text-sm">
                <Mail className="w-4 h-4 text-ember-400 shrink-0" />
                <span className="break-all">{company.email}</span>
              </li>
              <li className="flex items-start gap-2.5 text-forest-100/60 text-sm">
                <MapPin className="w-4 h-4 text-ember-400 shrink-0 mt-0.5" />
                Tours Available Across India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-forest-100/40 text-xs">
            © {new Date().getFullYear()} {company.name}. All rights reserved. Formerly known as {company.formerName}.
          </p>
          <p className="text-forest-100/40 text-xs">Events · Trips · Adventures</p>
        </div>
      </div>
    </footer>
  );
}
