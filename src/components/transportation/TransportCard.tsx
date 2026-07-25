import { Link } from 'react-router-dom';
import { Users, Check, ArrowRight } from 'lucide-react';
import { transportation } from '../../data';

export default function TransportCard() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {transportation.map((t, i) => (
        <Link
          key={t.name}
          to={`/transportation/${t.name}`}
          className="reveal group rounded-2xl bg-white border border-sand-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          style={{ transitionDelay: `${i * 60}ms` }}
        >
          <div className="h-44 overflow-hidden">
            <img src={t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-display font-bold text-forest-950 text-lg">{t.name}</h3>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-forest-50 text-forest-700 text-xs font-semibold">
                <Users className="w-3.5 h-3.5" /> {t.capacity}
              </span>
            </div>
            <p className="text-sm text-forest-800/60 leading-relaxed line-clamp-2">{t.desc}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {t.features.slice(0, 3).map((f) => (
                <span key={f} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-sand-100 text-forest-700/70 text-xs font-medium">
                  <Check className="w-3 h-3 text-ember-500" /> {f}
                </span>
              ))}
            </div>
            <div className="mt-4 inline-flex items-center gap-1.5 text-ember-600 text-sm font-semibold group-hover:gap-2.5 transition-all">
              View Details <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
