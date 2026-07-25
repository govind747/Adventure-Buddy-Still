import PageHeader from '../components/PageHeader';
import About from '../components/about/About';
import OurServices from '../components/about/OurServices';
import OurLocation from '../components/about/OurLocation';
import Team from '../components/about/Team';
import WhyUs from '../components/about/WhyUs';
import LatestFeatures from '../components/about/LatestFeatures';
import { useReveal } from '../useReveal';

export default function AboutPage() {
  useReveal();
  return (
    <>
      <PageHeader
        title="About Adventure Buddy"
        subtitle="12+ years of trusted travel, adventure, and event management across India."
        image="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      <About />
      <OurServices />
      <OurLocation />
      <Team />
      <WhyUs />
      <LatestFeatures />
    </>
  );
}
