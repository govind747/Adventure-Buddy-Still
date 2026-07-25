import { Star, Quote } from 'lucide-react';
import { reviews } from '../../data';

export default function Reviews() {
  return (
    <section className="py-24 lg:py-32 bg-forest-950 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-ember-500/10 rounded-full blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-ember-300 text-xs font-bold uppercase tracking-[0.15em] border border-white/10">
            Testimonials
          </span>
          <h2 className="mt-5 font-display font-extrabold text-white text-4xl lg:text-5xl text-balance">
            What our <span className="text-ember-400">travelers say</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="reveal rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 p-7 hover:border-ember-400/30 transition-all"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <Quote className="w-8 h-8 text-ember-400/40 mb-4" />
              <div className="flex items-center gap-1 text-ember-300 mb-3">
                {[...Array(r.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-forest-100/80 text-sm leading-relaxed mb-5">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <img src={r.avatar} alt={r.name} className="w-11 h-11 rounded-full object-cover" />
                <div>
                  <p className="text-white font-semibold text-sm">{r.name}</p>
                  <p className="text-forest-100/50 text-xs">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
