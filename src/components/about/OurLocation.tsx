import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { company } from '../../data';

export default function OurLocation() {
  return (
    <section className="py-24 lg:py-32 bg-forest-950 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-ember-300 text-xs font-bold uppercase tracking-[0.15em] border border-white/10">
              Our Location
            </span>
            <h2 className="mt-5 font-display font-extrabold text-white text-4xl lg:text-5xl text-balance">
              Tours available <span className="text-ember-400">across India</span>
            </h2>
            <p className="mt-5 text-forest-100/70 text-lg leading-relaxed">
              Adventure Buddy operates tours across North India and South India. Whether you want to trek the Himalayas or relax on Goas beaches, we have a package for you.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-ember-500/15 text-ember-400">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-xs text-forest-100/50 uppercase tracking-wider font-semibold">Coverage</p>
                  <p className="text-white font-bold">North India & South India</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-ember-500/15 text-ember-400">
                  <Phone className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-xs text-forest-100/50 uppercase tracking-wider font-semibold">Call Us</p>
                  <p className="text-white font-bold">{company.phone[0]} / {company.phone[1]}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-ember-500/15 text-ember-400">
                  <Mail className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-xs text-forest-100/50 uppercase tracking-wider font-semibold">Email</p>
                  <p className="text-white font-bold break-all">{company.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-ember-500/15 text-ember-400">
                  <Clock className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-xs text-forest-100/50 uppercase tracking-wider font-semibold">Hours</p>
                  <p className="text-white font-bold">Mon – Sun: 8:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2901208/pexels-photo-2901208.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="India landscapes"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
