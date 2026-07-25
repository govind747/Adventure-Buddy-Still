import PageHeader from '../components/PageHeader';
import TransportCard from '../components/transportation/TransportCard';
import TransportFeatures from '../components/transportation/TransportFeatures';
import { useReveal } from '../useReveal';

export default function TransportationPage() {
  useReveal();
  return (
    <>
      <PageHeader
        title="Transport Services"
        subtitle="Complete transportation solutions for all tour and event requirements — from luxury coaches to SUVs."
        image="https://images.pexels.com/photos/2061480/pexels-photo-2061480.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      <section className="py-20 bg-sand-50">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <h2 className="font-display font-extrabold text-forest-950 text-4xl lg:text-5xl text-balance">
              Our <span className="text-forest-600">Fleet</span>
            </h2>
            <p className="mt-4 text-forest-800/70 text-lg">
              We operate our own fleet — no third-party outsourcing. Click any vehicle for full details.
            </p>
          </div>
          <TransportCard />
        </div>
      </section>
      <TransportFeatures />
    </>
  );
}
