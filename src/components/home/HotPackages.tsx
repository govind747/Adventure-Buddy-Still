import { Link } from 'react-router-dom';
import { Flame, Clock, Check } from 'lucide-react';
import { hotPackages } from '../../data';

export default function HotPackages() {
  return (
    <section className="py-24 lg:py-32 bg-sand-50">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ember-100 text-ember-700 text-xs font-bold uppercase tracking-[0.15em]">
            <Flame className="w-4 h-4" />
            Hot Packages
          </span>
          <h2 className="mt-5 font-display font-extrabold text-forest-950 text-4xl lg:text-5xl text-balance">
            Trending <span className="text-ember-600">tour packages</span>
          </h2>
          <p className="mt-4 text-forest-800/70 text-lg">
            Best-value curated trips loved by our travelers. All-inclusive with transport, stay, and activities.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotPackages.map((pkg, i) => (
            <Link
              key={pkg.title}
              to={pkg.link || '/contact'}
              className="reveal group rounded-2xl bg-white border border-sand-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-ember-500 text-white text-xs font-bold">
                  {pkg.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-forest-950 text-lg">{pkg.title}</h3>
                <div className="flex items-center gap-2 mt-2 text-sm text-forest-700/60">
                  <Clock className="w-4 h-4" /> {pkg.duration}
                </div>
                <ul className="mt-4 space-y-1.5">
                  {pkg.includes.map((inc) => (
                    <li key={inc} className="flex items-center gap-2 text-sm text-forest-800/70">
                      <Check className="w-4 h-4 text-forest-500" /> {inc}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center justify-between pt-4 border-t border-sand-200">
                  <div>
                    <span className="text-xs text-forest-700/50">Starting from</span>
                    <p className="text-2xl font-extrabold font-display text-forest-700">{pkg.price}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-forest-700 text-white text-sm font-semibold group-hover:bg-forest-800 transition-colors">
                    Book Now
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
