import { Link } from 'react-router-dom';
import { Clock, Check, ArrowRight } from 'lucide-react';
import { holyPackages } from '../../data';

export default function HolyPackages() {
  return (
    <section className="py-24 lg:py-32 bg-forest-950 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-ember-500/10 rounded-full blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-ember-300 text-xs font-bold uppercase tracking-[0.15em] border border-white/10">
            Holy Packages
          </span>
          <h2 className="mt-5 font-display font-extrabold text-white text-4xl lg:text-5xl text-balance">
            Top holy <span className="text-ember-400">tour packages</span>
          </h2>
          <p className="mt-4 text-forest-100/70 text-lg">
            Click any package to see the full day-by-day itinerary and inclusions.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {holyPackages.map((pkg, i) => (
            <Link
              key={pkg.name}
              to={`/spiritual/${pkg.name}`}
              className="reveal group rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-ember-400/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="h-40 overflow-hidden">
                <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-white text-lg">{pkg.name}</h3>
                <p className="text-xs text-ember-300/70 mt-1">{pkg.yatra}</p>
                <div className="mt-3 flex items-center gap-2 text-sm text-forest-100/60">
                  <Clock className="w-4 h-4" /> {pkg.duration}
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {pkg.inclusions.slice(0, 3).map((inc) => (
                    <span key={inc} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/5 text-forest-100/70 text-xs">
                      <Check className="w-3 h-3 text-ember-400" /> {inc}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between pt-4 border-t border-white/10">
                  <p className="text-2xl font-extrabold font-display text-ember-400">{pkg.price}</p>
                  <span className="inline-flex items-center gap-1 text-ember-400 text-sm font-semibold group-hover:gap-2 transition-all">
                    View Itinerary <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
