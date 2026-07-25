import PageHeader from '../components/PageHeader';
import StateSection from '../components/destinations/StateSection';
import { destinations } from '../data';
import { useReveal } from '../useReveal';

export default function DestinationsPage() {
  useReveal();
  const northStates = destinations.filter((d) => d.region === 'north');
  const southStates = destinations.filter((d) => d.region === 'south');

  return (
    <>
      <PageHeader
        title="Tour Destinations"
        subtitle="Explore India state-wise — from Himalayan peaks to South India backwaters."
        image="https://images.pexels.com/photos/2901208/pexels-photo-2901208.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* North India */}
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex items-center gap-3 mb-10">
            <span className="grid place-items-center w-12 h-12 rounded-xl bg-forest-700 text-white">
              <span className="font-display font-extrabold text-lg">N</span>
            </span>
            <div>
              <h2 className="font-display font-extrabold text-forest-950 text-3xl">North India Destinations</h2>
              <p className="text-sm text-forest-700/60">Himalayas, valleys & spiritual hubs</p>
            </div>
          </div>
          <div className="space-y-16">
            {northStates.map((s) => (
              <StateSection key={s.state} stateData={s} />
            ))}
          </div>
        </div>
      </section>

      {/* South India */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex items-center gap-3 mb-10">
            <span className="grid place-items-center w-12 h-12 rounded-xl bg-sky-600 text-white">
              <span className="font-display font-extrabold text-lg">S</span>
            </span>
            <div>
              <h2 className="font-display font-extrabold text-forest-950 text-3xl">South India Destinations</h2>
              <p className="text-sm text-forest-700/60">Beaches, backwaters & hill stations</p>
            </div>
          </div>
          <div className="space-y-16">
            {southStates.map((s) => (
              <StateSection key={s.state} stateData={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
