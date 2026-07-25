import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { company } from '../../data';

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Adventure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-900/80 to-forest-950/60" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="max-w-2xl reveal">
          <h2 className="font-display font-extrabold text-white text-4xl lg:text-5xl text-balance">
            Ready for your next <span className="text-ember-400">adventure?</span>
          </h2>
          <p className="mt-5 text-lg text-forest-100/80">
            Let Adventure Buddy craft a memorable journey for your group, family, or institution. 12+ years of trusted travel management across India.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-ember-500 text-white font-semibold hover:bg-ember-600 transition-all shadow-xl shadow-ember-500/30 hover:-translate-y-0.5"
            >
              Plan Your Trip
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`tel:${company.phone[0]}`}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold hover:bg-white/20 transition-all"
            >
              <Phone className="w-5 h-5" />
              {company.phone[0]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
