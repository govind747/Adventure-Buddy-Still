import { Flame } from 'lucide-react';

export default function SpiritualHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Spiritual temple"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-950/92 via-forest-900/80 to-sand-900/70" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 w-full pt-28 pb-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-ember-200 text-xs font-semibold uppercase tracking-[0.18em] animate-fade-in">
            <Flame className="w-4 h-4" />
            Spiritual & Char Dham Tours
          </span>
          <h1 className="mt-6 font-display font-extrabold text-white text-5xl lg:text-7xl leading-[1.05] text-balance animate-fade-up">
            Sacred journeys across <span className="text-ember-400">India's holy sites</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-forest-100/80 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Embark on spiritually enriching journeys with complete facilities, VIP assistance, and dedicated senior citizen support.
          </p>
        </div>
      </div>
    </section>
  );
}
