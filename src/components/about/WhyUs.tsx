import { whyChoose } from '../../data';

export default function WhyUs() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ember-100 text-ember-700 text-xs font-bold uppercase tracking-[0.15em]">
            Why Choose Us
          </span>
          <h2 className="mt-5 font-display font-extrabold text-forest-950 text-4xl lg:text-5xl text-balance">
            The Adventure Buddy <span className="text-forest-600">advantage</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyChoose.map((item, i) => (
            <div
              key={item.title}
              className="reveal group relative rounded-2xl bg-sand-50 border border-sand-200 overflow-hidden hover:shadow-xl hover:border-forest-300 transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="h-32 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-forest-950 text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-forest-800/60 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
