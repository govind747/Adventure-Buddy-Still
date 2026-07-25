import { transportFeatures } from '../../data';

const featureImages: Record<string, string> = {
  'Experienced Drivers': 'https://images.pexels.com/photos/376361/pexels-photo-376361.jpeg?auto=compress&cs=tinysrgb&w=600',
  'Safe & Comfortable Travel': 'https://images.pexels.com/photos/2598064/pexels-photo-2598064.jpeg?auto=compress&cs=tinysrgb&w=600',
  'GPS Supported Routes': 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600',
  'Pickup & Drop Services': 'https://images.pexels.com/photos/2061480/pexels-photo-2061480.jpeg?auto=compress&cs=tinysrgb&w=600',
  'North & South India Coverage': 'https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg?auto=compress&cs=tinysrgb&w=600',
};

export default function TransportFeatures() {
  return (
    <section className="py-20 bg-forest-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-ember-500/10 rounded-full blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-ember-300 text-xs font-bold uppercase tracking-[0.15em] border border-white/10">
            Transport Features
          </span>
          <h2 className="mt-5 font-display font-extrabold text-white text-4xl lg:text-5xl text-balance">
            Why our transport is <span className="text-ember-400">trusted</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {transportFeatures.map((f, i) => (
            <div
              key={f}
              className="reveal group rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 overflow-hidden hover:border-ember-400/40 transition-all"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="h-32 overflow-hidden">
                <img
                  src={featureImages[f] || 'https://images.pexels.com/photos/2061480/pexels-photo-2061480.jpeg?auto=compress&cs=tinysrgb&w=600'}
                  alt={f}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-sm">{f}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
