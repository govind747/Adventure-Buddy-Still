import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { destinations } from '../../data';

export default function TopDestinations() {
  const topPlaces = [
    { ...destinations[0].places[0], state: destinations[0].state, img: destinations[0].places[0].image },
    { ...destinations[1].places[1], state: destinations[1].state, img: destinations[1].places[1].image },
    { ...destinations[3].places[0], state: destinations[3].state, img: destinations[3].places[0].image },
    { ...destinations[5].places[0], state: destinations[5].state, img: destinations[5].places[0].image },
  ];

  return (
    <section className="py-24 lg:py-32 bg-sand-50 bg-grid">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 reveal">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-100 text-forest-700 text-xs font-bold uppercase tracking-[0.15em]">
              <MapPin className="w-4 h-4" />
              Top Destinations
            </span>
            <h2 className="mt-5 font-display font-extrabold text-forest-950 text-4xl lg:text-5xl text-balance">
              Most loved <span className="text-forest-600">places to visit</span>
            </h2>
          </div>
          <Link to="/destinations" className="group inline-flex items-center gap-2 text-forest-700 font-semibold hover:text-ember-600 transition-colors">
            View All Destinations
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topPlaces.map((p, i) => (
            <Link
              key={p.name}
              to={`/destinations/${p.state}/${p.name}`}
              className="reveal group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-ember-500/90 text-white text-xs font-medium mb-2">
                  <MapPin className="w-3 h-3" /> {p.state}
                </span>
                <h3 className="font-display font-bold text-white text-xl">{p.name}</h3>
                <p className="text-forest-100/70 text-sm mt-1 line-clamp-2">{p.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
