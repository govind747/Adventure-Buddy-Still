import Hero from '../components/home/Hero';
import TopDestinations from '../components/home/TopDestinations';
import Services from '../components/home/Services';
import HotPackages from '../components/home/HotPackages';
import Reviews from '../components/home/Reviews';
import CTA from '../components/home/CTA';
import LatestDestinations from '../components/home/LatestDestinations';
import { useReveal } from '../useReveal';

export default function HomePage() {
  useReveal();
  return (
    <>
      <Hero />
      <TopDestinations />
      <Services />
      <HotPackages />
      <Reviews />
      <CTA />
      <LatestDestinations />
    </>
  );
}
