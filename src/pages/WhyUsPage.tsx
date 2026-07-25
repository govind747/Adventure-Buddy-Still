import PageHeader from '../components/PageHeader';
import WhyUsFeatures from '../components/whyus/WhyUsFeatures';
import { useReveal } from '../useReveal';

export default function WhyUsPage() {
  useReveal();
  return (
    <>
      <PageHeader
        title="Why Choose Us"
        subtitle="Our hotels, tour managers, own transportation, local teams, and safety-first planning — the full Adventure Buddy advantage."
        image="https://images.pexels.com/photos/1534560/pexels-photo-1534560.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      <WhyUsFeatures />
    </>
  );
}
