import PageHeader from '../components/PageHeader';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import { useReveal } from '../useReveal';

export default function ContactPage() {
  useReveal();
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Let's create memorable experiences. Reach out to plan your next adventure, educational tour, or corporate outing."
        image="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      <section className="py-24 lg:py-32 bg-forest-950 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ember-500/10 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5">
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 reveal">
              <ContactInfo />
            </div>
            <div className="lg:col-span-3 reveal">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
