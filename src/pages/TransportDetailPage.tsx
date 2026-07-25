import { Link, useParams } from 'react-router-dom';
import { Users, Check, ArrowLeft, Phone, ShieldCheck, Navigation } from 'lucide-react';
import { transportation, company } from '../data';

export default function TransportDetailPage() {
  const { vehicleName } = useParams();
  const vehicle = transportation.find((t) => t.name === vehicleName);

  if (!vehicle) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-forest-800 text-lg">Vehicle not found.</p>
        <Link to="/transportation" className="mt-4 inline-flex items-center gap-2 text-ember-600 font-semibold">
          <ArrowLeft className="w-4 h-4" /> Back to Transportation
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-forest-950/90 via-forest-900/75 to-forest-950/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5">
          <nav className="flex items-center gap-1.5 text-sm text-forest-100/60 mb-4">
            <Link to="/" className="hover:text-ember-300 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/transportation" className="hover:text-ember-300 transition-colors">Transportation</Link>
            <span>/</span>
            <span className="text-ember-300">{vehicle.name}</span>
          </nav>
          <h1 className="font-display font-extrabold text-white text-5xl lg:text-6xl">{vehicle.name}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ember-500 text-white text-sm font-semibold">
              <Users className="w-4 h-4" /> {vehicle.capacity}
            </span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
                <img src={vehicle.image} alt={vehicle.name} className="w-full h-72 object-cover" />
              </div>
              <h2 className="font-display font-extrabold text-forest-950 text-3xl mb-4">Overview</h2>
              <p className="text-lg text-forest-800/80 leading-relaxed">{vehicle.desc}</p>

              <h3 className="mt-10 font-display font-bold text-forest-950 text-xl mb-5">Vehicle Features</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {vehicle.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-sand-200 shadow-sm">
                    <span className="grid place-items-center w-8 h-8 rounded-lg bg-forest-100 text-forest-700 shrink-0">
                      <Check className="w-4 h-4" />
                    </span>
                    <span className="text-sm font-medium text-forest-800">{f}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-forest-50 border border-forest-100">
                  <ShieldCheck className="w-8 h-8 text-forest-600 mb-3" />
                  <h4 className="font-display font-bold text-forest-950">Safety First</h4>
                  <p className="text-sm text-forest-800/60 mt-1">Regular maintenance and pre-trip safety inspections.</p>
                </div>
                <div className="p-5 rounded-xl bg-sky-50 border border-sky-100">
                  <Navigation className="w-8 h-8 text-sky-600 mb-3" />
                  <h4 className="font-display font-bold text-forest-950">GPS Tracked</h4>
                  <p className="text-sm text-forest-800/60 mt-1">Real-time route monitoring for complete peace of mind.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28 rounded-2xl bg-forest-900 p-7 text-white shadow-xl">
                <h3 className="font-display font-bold text-xl">Book {vehicle.name}</h3>
                <p className="mt-3 text-sm text-forest-100/70">Get a customized quote for your group with our {vehicle.name}.</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-forest-100/80">
                  <Users className="w-4 h-4 text-ember-400" /> Capacity: {vehicle.capacity}
                </div>
                <Link
                  to="/contact"
                  className="mt-6 w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-ember-500 text-white font-semibold hover:bg-ember-600 transition-colors"
                >
                  Get a Quote
                </Link>
                <a
                  href={`tel:${company.phone[0]}`}
                  className="mt-3 w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-colors"
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
      </section>
    </>
  );
}
