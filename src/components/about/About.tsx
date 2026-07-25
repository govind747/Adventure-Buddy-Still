import { CheckCircle2, Globe2 } from 'lucide-react';
import { company } from '../../data';

export default function About() {
  return (
    <section className="py-24 lg:py-32 bg-sand-50 bg-grid">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Mountain adventure" className="rounded-2xl shadow-xl object-cover h-56 w-full" />
                <img src="https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Camping" className="rounded-2xl shadow-xl object-cover h-44 w-full" />
              </div>
              <div className="space-y-4 pt-8">
                <img src="https://images.pexels.com/photos/2422497/pexels-photo-2422497.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Trekking group" className="rounded-2xl shadow-xl object-cover h-44 w-full" />
                <img src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=600" alt="River rafting" className="rounded-2xl shadow-xl object-cover h-56 w-full" />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-forest-800 text-white rounded-2xl shadow-2xl px-6 py-4 hidden sm:block">
              <p className="text-4xl font-extrabold font-display text-ember-400">{company.yearsExperience}+</p>
              <p className="text-sm text-forest-100/80 font-medium">Years of Trusted Travel</p>
            </div>
          </div>

          <div className="reveal">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-100 text-forest-700 text-xs font-bold uppercase tracking-[0.15em]">
              <Globe2 className="w-4 h-4" />
              About Adventure Buddy
            </span>
            <h2 className="mt-5 font-display font-extrabold text-forest-950 text-4xl lg:text-5xl leading-tight text-balance">
              Your trusted partner for{' '}
              <span className="text-forest-600">safe & exciting journeys</span>
            </h2>
            <p className="mt-5 text-lg text-forest-800/80 leading-relaxed">
              Adventure Buddy is a trusted travel, adventure, and event management company with{' '}
              <span className="font-semibold text-forest-700">{company.yearsExperience}+ years of experience</span> in
              organizing professionally managed tours across India. Formerly known as{' '}
              <span className="font-semibold text-forest-700">{company.formerName}</span>, we specialize in:
            </p>
            <div className="mt-7 grid sm:grid-cols-2 gap-x-5 gap-y-3">
              {company.specialties.map((s) => (
                <div key={s} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-ember-500 shrink-0" />
                  <span className="text-sm font-medium text-forest-800">{s}</span>
                </div>
              ))}
            </div>
            <p className="mt-7 text-base text-forest-800/70 leading-relaxed italic border-l-4 border-ember-400 pl-4">
              From Himalayan trekking to South India holidays, from educational tours to luxury camping experiences — Adventure Buddy creates memorable journeys filled with learning, fun, adventure, and comfort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
