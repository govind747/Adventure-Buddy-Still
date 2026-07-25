import { MapPin } from 'lucide-react';
import { holyPlaces } from '../../data';

export default function HolyPlaces() {
  return (
    <section className="py-24 lg:py-32 bg-sand-50 bg-grid">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-100 text-forest-700 text-xs font-bold uppercase tracking-[0.15em]">
            <MapPin className="w-4 h-4" />
            Top Holy Places
          </span>
          <h2 className="mt-5 font-display font-extrabold text-forest-950 text-4xl lg:text-5xl text-balance">
            Sacred <span className="text-forest-600">destinations</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {holyPlaces.map((p, i) => (
            <div
              key={p.name}
              className="reveal group rounded-2xl bg-white border border-sand-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="h-40 overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-ember-50 text-ember-700 text-xs font-semibold mb-2">
                  {p.deity}
                </span>
                <h3 className="font-display font-bold text-forest-950 text-lg">{p.name}</h3>
                <p className="text-xs text-forest-700/50 mt-0.5">{p.location}</p>
                <p className="text-sm text-forest-800/60 mt-2 line-clamp-2">{p.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
