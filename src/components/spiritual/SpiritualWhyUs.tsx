import { Check, Bell } from 'lucide-react';

const facilityIcons = [
  { label: 'Hotel Stay', emoji: '🏨' },
  { label: 'Meals', emoji: '🍽️' },
  { label: 'Transport', emoji: '🚌' },
  { label: 'VIP Assistance', emoji: '👑' },
  { label: 'Group Packages', emoji: '👥' },
  { label: 'Senior Citizen Support', emoji: '🤝' },
];

export default function SpiritualWhyUs() {
  return (
    <section className="py-24 lg:py-32 bg-sand-50">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ember-100 text-ember-700 text-xs font-bold uppercase tracking-[0.15em]">
            What We Offer
          </span>
          <h2 className="mt-5 font-display font-extrabold text-forest-950 text-4xl lg:text-5xl text-balance">
            Complete <span className="text-forest-600">tour facilities</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {facilityIcons.map((f, i) => (
            <div
              key={f.label}
              className="reveal group flex items-center gap-4 p-5 rounded-xl bg-white border border-sand-200 hover:shadow-lg hover:border-ember-300 transition-all"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="grid place-items-center w-12 h-12 rounded-xl bg-ember-50 text-2xl">{f.emoji}</span>
              <span className="text-forest-900 font-semibold text-sm">{f.label}</span>
              <Check className="w-5 h-5 text-ember-500 ml-auto" />
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 rounded-xl bg-forest-50 border border-forest-100 flex items-center gap-4 reveal">
          <Bell className="w-6 h-6 text-forest-600 shrink-0" />
          <p className="text-forest-800 text-sm font-medium">
            Senior citizen support and VIP assistance available on all spiritual tours. Group packages for families, institutions, and religious organizations.
          </p>
        </div>
      </div>
    </section>
  );
}
