import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { allPlaces } from '../../data';

export default function LatestDestinations() {
  const latest = allPlaces.slice(-4).reverse();

  return (
    <section className="py-24 lg:py-32 bg-sand-50 bg-grid">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 reveal">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-[0.15em]">
              Latest Destinations
            </span>
            <h2 className="mt-5 font-display font-extrabold text-forest-950 text-4xl lg:text-5xl text-balance">
              Newly added <span className="text-sky-700">destinations</span>
            </h2>
          </div>
          <Link to="/destinations" className="group inline-flex items-center gap-2 text-forest-700 font-semibold hover:text-ember-600 transition-colors">
            View All
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latest.map((p, i) => (
            <Link
              key={p.name}
              to={`/destinations/${p.state}/${p.name}`}
              className="reveal group rounded-2xl bg-white border border-sand-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="h-40 overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs text-forest-700/50 mb-1.5">
                  <MapPin className="w-3.5 h-3.5" /> {p.state}
                </div>
                <h3 className="font-display font-bold text-forest-950 text-lg">{p.name}</h3>
                <p className="text-sm text-forest-800/60 mt-1 line-clamp-2">{p.blurb}</p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-forest-600 font-medium">
                  <Clock className="w-3.5 h-3.5" /> {p.duration}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
