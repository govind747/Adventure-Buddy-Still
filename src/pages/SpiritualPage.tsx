import SpiritualHero from '../components/spiritual/SpiritualHero';
import HolyPlaces from '../components/spiritual/HolyPlaces';
import HolyPackages from '../components/spiritual/HolyPackages';
import SpiritualWhyUs from '../components/spiritual/SpiritualWhyUs';
import { useReveal } from '../useReveal';

export default function SpiritualPage() {
  useReveal();
  return (
    <>
      <SpiritualHero />
      <HolyPlaces />
      <HolyPackages />
      <SpiritualWhyUs />
    </>
  );
}
