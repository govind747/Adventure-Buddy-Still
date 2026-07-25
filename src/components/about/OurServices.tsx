import { Check } from 'lucide-react';
import { services } from '../../data';

export default function OurServices() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-100 text-forest-700 text-xs font-bold uppercase tracking-[0.15em]">
            Our Services
          </span>
          <h2 className="mt-5 font-display font-extrabold text-forest-950 text-4xl lg:text-5xl text-balance">
            What we <span className="text-forest-600">offer</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal group rounded-2xl bg-sand-50 border border-sand-200 overflow-hidden hover:shadow-xl hover:border-forest-300 transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="h-36 overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-forest-950 text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-forest-800/60 leading-relaxed">{s.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.items.slice(0, 4).map((item) => (
                    <span key={item} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white text-forest-700/70 text-xs font-medium border border-sand-200">
                      <Check className="w-3 h-3 text-ember-500" /> {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
