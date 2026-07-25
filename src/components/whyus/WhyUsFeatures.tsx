import { Check } from 'lucide-react';
import { whyUsFeatures } from '../../data';

export default function WhyUsFeatures() {
  return (
    <section className="py-24 lg:py-32 bg-sand-50 bg-grid">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-100 text-forest-700 text-xs font-bold uppercase tracking-[0.15em]">
            Why Choose Us
          </span>
          <h2 className="mt-5 font-display font-extrabold text-forest-950 text-4xl lg:text-5xl text-balance">
            The complete <span className="text-forest-600">travel ecosystem</span>
          </h2>
          <p className="mt-4 text-forest-800/70 text-lg">
            From our own hotels and fleet to local teams and safety protocols — everything that makes your journey seamless.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {whyUsFeatures.map((f, i) => (
            <div
              key={f.title}
              className="reveal group rounded-2xl bg-white border border-sand-200 overflow-hidden hover:shadow-xl hover:border-forest-300 transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="h-40 overflow-hidden">
                <img src={f.image} alt={f.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-forest-950 text-xl">{f.title}</h3>
                <p className="mt-2 text-sm text-forest-800/60 leading-relaxed">{f.desc}</p>
                <ul className="mt-5 grid grid-cols-2 gap-2">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-forest-800/70">
                      <Check className="w-4 h-4 text-ember-500 shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
