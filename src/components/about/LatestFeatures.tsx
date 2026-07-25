import { latestFeatures } from '../../data';

export default function LatestFeatures() {
  return (
    <section className="py-24 lg:py-32 bg-forest-950 overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-ember-500/10 rounded-full blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-ember-300 text-xs font-bold uppercase tracking-[0.15em] border border-white/10">
            Latest Features
          </span>
          <h2 className="mt-5 font-display font-extrabold text-white text-4xl lg:text-5xl text-balance">
            New ways we are <span className="text-ember-400">serving you better</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestFeatures.map((f, i) => (
            <div
              key={f.title}
              className="reveal group rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 overflow-hidden hover:border-ember-400/40 transition-all"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="h-36 overflow-hidden">
                <img src={f.image} alt={f.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-white text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-forest-100/60 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
