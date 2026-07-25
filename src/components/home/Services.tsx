import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { services } from '../../data';

export default function Services() {
  return (
    <section className="py-24 lg:py-32 bg-forest-950 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-forest-700/20 rounded-full blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-ember-300 text-xs font-bold uppercase tracking-[0.15em] border border-white/10">
            Our Services
          </span>
          <h2 className="mt-5 font-display font-extrabold text-white text-4xl lg:text-5xl text-balance">
            Everything you need for the{' '}
            <span className="text-ember-400">perfect journey</span>
          </h2>
          <p className="mt-4 text-forest-100/70 text-lg">
            From transport and adventure activities to educational tours and customized packages — we cover it all.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal group relative rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 overflow-hidden hover:border-ember-400/40 transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="h-40 overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="relative bg-gradient-to-t from-forest-950 to-transparent -mt-24 h-24" />
              </div>
              <div className="p-6 -mt-12 relative">
                <h3 className="font-display font-bold text-white text-xl mb-3">{s.title}</h3>
                <p className="text-forest-100/60 text-sm leading-relaxed mb-4">{s.blurb}</p>
                <div className="flex flex-wrap gap-2">
                  {s.items.slice(0, 4).map((item) => (
                    <span key={item} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 text-forest-100/80 text-xs font-medium border border-white/5">
                      <Check className="w-3 h-3 text-ember-400" />
                      {item}
                    </span>
                  ))}
                </div>
                <Link to="/transportation" className="mt-5 inline-flex items-center gap-1.5 text-ember-400 text-sm font-semibold hover:text-ember-300 transition-colors">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
