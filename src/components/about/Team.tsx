import { team } from '../../data';

export default function Team() {
  return (
    <section className="py-24 lg:py-32 bg-sand-50 bg-grid">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-100 text-forest-700 text-xs font-bold uppercase tracking-[0.15em]">
            Our Team
          </span>
          <h2 className="mt-5 font-display font-extrabold text-forest-950 text-4xl lg:text-5xl text-balance">
            Meet the <span className="text-forest-600">people behind the adventures</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div
              key={member.name}
              className="reveal group rounded-2xl bg-white border border-sand-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="h-64 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-forest-950 text-lg">{member.name}</h3>
                <p className="text-ember-600 text-sm font-semibold">{member.role}</p>
                <p className="mt-2 text-sm text-forest-800/60 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
