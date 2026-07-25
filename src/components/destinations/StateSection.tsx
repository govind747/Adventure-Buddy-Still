import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import type { DestinationState } from '../../data';

export default function StateSection({ stateData }: { stateData: DestinationState }) {
  const accent = stateData.region === 'north' ? 'forest' : 'sky';
  const accentText = accent === 'forest' ? 'text-forest-600' : 'text-sky-700';
  const accentBg = accent === 'forest' ? 'bg-forest-700' : 'bg-sky-600';

  return (
    <div className="reveal">
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        <div className="lg:w-1/3 rounded-2xl overflow-hidden shadow-lg h-48 lg:h-auto">
          <img src={stateData.image} alt={stateData.state} className="w-full h-full object-cover" />
        </div>
        <div className="lg:w-2/3 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-3">
            <span className={`w-3 h-3 rounded-full ${accentBg}`} />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-forest-700/50">
              {stateData.region === 'north' ? 'North India' : 'South India'}
            </span>
          </div>
          <h3 className={`font-display font-extrabold text-3xl ${accentText}`}>{stateData.state}</h3>
          <p className="mt-3 text-forest-800/70 leading-relaxed">{stateData.description}</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {stateData.places.map((p) => (
          <Link
            key={p.name}
            to={`/destinations/${stateData.state}/${p.name}`}
            className="group rounded-xl bg-white border border-sand-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <div className="h-32 overflow-hidden">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-1.5 text-xs text-forest-700/40 mb-1">
                <MapPin className="w-3 h-3" /> {stateData.state}
              </div>
              <h4 className="font-display font-bold text-forest-950 text-sm">{p.name}</h4>
              <p className="text-xs text-forest-800/50 mt-1 line-clamp-2">{p.blurb}</p>
              <div className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-ember-600 group-hover:gap-2 transition-all">
                View Details <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
