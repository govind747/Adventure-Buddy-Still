import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { company } from '../data';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Transportation', to: '/transportation' },
  { label: 'Spiritual', to: '/spiritual' },
  { label: 'Why Us', to: '/why-us' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const solid = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-forest-900/95 backdrop-blur-md shadow-lg shadow-forest-950/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span>
            <img src="/logo.png" alt="Adventure Buddy Logo" className="w-12 h-10" />
          </span>
          <span className="leading-tight">
            <span className="block font-display font-extrabold text-white text-lg tracking-tight">
              Adventure Buddy
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-ember-300 font-medium">
              {company.tagline}
            </span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((l) => {
            const active = location.pathname === l.to;
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
                    active
                      ? 'text-ember-400 bg-white/10'
                      : 'text-forest-100/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${company.phone[0]}`}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-ember-500 text-white text-sm font-semibold hover:bg-ember-600 transition-colors shadow-lg shadow-ember-500/25"
          >
            <Phone className="w-4 h-4" />
            {company.phone[0]}
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid place-items-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-4 mt-3 rounded-2xl bg-forest-900/98 backdrop-blur-md border border-white/10 p-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((l) => {
              const active = location.pathname === l.to;
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                      active ? 'text-ember-400 bg-white/10' : 'text-forest-100 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a
            href={`tel:${company.phone[0]}`}
            className="mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-ember-500 text-white font-semibold"
          >
            <Phone className="w-4 h-4" /> {company.phone[0]}
          </a>
        </div>
      </div>
    </header>
  );
}
