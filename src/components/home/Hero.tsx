import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { company, stats } from '../../data';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Adi Kailash mountain"
          className="w-full h-full object-cover animate-slow-zoom"
          />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-950/85 via-forest-900/70 to-forest-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent" />
      </div>
      {/* Main Hero Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 w-full pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-ember-200 text-xs font-semibold uppercase tracking-[0.18em] animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-ember-400 animate-pulse" />
              {company.tagline}
            </span>
            
            <h1 className="mt-6 font-display font-extrabold text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-balance animate-fade-up">
              Explore India with{' '}
              <span className="text-ember-400">Adventure Buddy</span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-forest-100/90 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
              From Himalayan trekking to South India holidays, from educational tours to luxury camping — we create memorable journeys filled with learning, fun, adventure, and comfort.
            </p>
            
            <div className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <Link
                to="/destinations"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-ember-500 text-white font-semibold text-base hover:bg-ember-600 transition-all shadow-xl shadow-ember-500/30 hover:-translate-y-0.5"
              >
                Explore Destinations
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/spiritual"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-base hover:bg-white/20 transition-all"
              >
                <Play className="w-5 h-5 fill-current" />
                Spiritual Tours
              </Link>
            </div>
            
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl animate-fade-up" style={{ animationDelay: '0.3s' }}>
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-ember-400/50 pl-4">
                  <p className="text-3xl font-extrabold font-display text-white">{s.value}</p>
                  <p className="text-xs text-forest-100/70 font-medium mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Featured Image */}
          <div className="lg:col-span-5 flex justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/a.png"
                alt="Adiyogi Statue"
                className="w-full h-full object-cover rounded-2xl shadow-inner"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <span className="w-1 h-2 rounded-full bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}