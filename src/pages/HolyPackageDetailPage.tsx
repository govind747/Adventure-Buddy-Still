import { Link, useParams } from 'react-router-dom';
import { Clock, Check, ArrowLeft, Phone, Calendar, MapPin, Mountain } from 'lucide-react';
import { holyPackages, company } from '../data';

export default function HolyPackageDetailPage() {
  const { packageName } = useParams();
  const pkg = holyPackages.find((p) => p.name === packageName);

  if (!pkg) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-forest-800 text-lg">Package not found.</p>
        <Link to="/spiritual" className="mt-4 inline-flex items-center gap-2 text-ember-600 font-semibold">
          <ArrowLeft className="w-4 h-4" /> Back to Spiritual Tours
        </Link>
      </div>
    );
  }

  const heroImg = pkg.heroImage || pkg.image;

  return (
    <>
      {/* Hero with background image */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt={pkg.name} className="w-full h-full object-cover animate-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-900/70 to-forest-950/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 w-full pt-32 pb-16">
          <nav className="flex items-center gap-1.5 text-sm text-forest-100/60 mb-4">
            <Link to="/" className="hover:text-ember-300 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/spiritual" className="hover:text-ember-300 transition-colors">Spiritual</Link>
            <span>/</span>
            <span className="text-ember-300">{pkg.name}</span>
          </nav>
          <h1 className="font-display font-extrabold text-white text-5xl lg:text-7xl text-balance animate-fade-up">
            {pkg.name}
          </h1>
          <p className="mt-4 text-lg text-ember-300 font-semibold animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {pkg.yatra}
          </p>
          {pkg.about && (
            <p className="mt-4 text-base text-forest-100/80 max-w-3xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.15s' }}>
              {pkg.about}
            </p>
          )}
          <div className="mt-6 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ember-500 text-white text-sm font-semibold">
              <Clock className="w-4 h-4" /> {pkg.duration}
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold">
              Starting from {pkg.price}
            </span>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-sm font-semibold hover:bg-white/25 transition-all"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left: About + Itinerary */}
            <div className="lg:col-span-2">
              {/* About */}
              {pkg.about && (
                <div className="mb-12">
                  <div className="flex items-center gap-2 mb-4">
                    <Mountain className="w-6 h-6 text-forest-600" />
                    <h2 className="font-display font-extrabold text-forest-950 text-3xl">About the Yatra</h2>
                  </div>
                  <p className="text-lg text-forest-800/80 leading-relaxed">{pkg.about}</p>
                </div>
              )}

              {/* Itinerary */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <MapPin className="w-6 h-6 text-forest-600" />
                  <h2 className="font-display font-extrabold text-forest-950 text-3xl">Day-wise Plan</h2>
                </div>
                <div className="relative">
                  <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-forest-200" />
                  <div className="space-y-6">
                    {pkg.itinerary.map((day, i) => (
                      <div key={i} className="reveal relative pl-16" style={{ transitionDelay: `${i * 40}ms` }}>
                        <div className="absolute left-0 top-0 grid place-items-center w-11 h-11 rounded-full bg-forest-700 text-white font-display font-bold text-sm shadow-lg">
                          {i + 1}
                        </div>
                        <div className="rounded-xl bg-white border border-sand-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center gap-2 mb-1">
                            <Calendar className="w-4 h-4 text-ember-500" />
                            <span className="text-xs font-bold uppercase tracking-wider text-ember-600">{day.day}</span>
                          </div>
                          <h3 className="font-display font-bold text-forest-950 text-lg">{day.title}</h3>
                          <p className="mt-1.5 text-sm text-forest-800/70 leading-relaxed">{day.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-5">
                {/* Inclusions */}
                <div className="rounded-2xl bg-forest-900 p-7 text-white shadow-xl">
                  <h3 className="font-display font-bold text-xl mb-4">Package Inclusions</h3>
                  <ul className="space-y-3">
                    {pkg.inclusions.map((inc) => (
                      <li key={inc} className="flex items-center gap-2.5 text-sm text-forest-100/80">
                        <Check className="w-5 h-5 text-ember-400 shrink-0" /> {inc}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Booking CTA */}
                <div className="rounded-2xl bg-white border border-sand-200 p-7 shadow-lg">
                  <h3 className="font-display font-bold text-forest-950 text-xl">Book This Yatra</h3>
                  <p className="mt-2 text-sm text-forest-800/60">Starting from</p>
                  <p className="text-3xl font-extrabold font-display text-forest-700">{pkg.price}</p>
                  <Link
                    to="/contact"
                    className="mt-5 w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-ember-500 text-white font-semibold hover:bg-ember-600 transition-colors"
                  >
                    Book Now
                  </Link>
                  <a
                    href={`tel:${company.phone[0]}`}
                    className="mt-3 w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-forest-50 border border-forest-100 text-forest-700 font-semibold hover:bg-forest-100 transition-colors"
                  >
                    <Phone className="w-4 h-4" /> {company.phone[0]}
                  </a>
                  <a
                    href={`https://wa.me/${company.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#1da851] transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
