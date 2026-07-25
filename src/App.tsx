import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DestinationsPage from './pages/DestinationsPage';
import DestinationDetail from './pages/DestinationDetailPage';
import TransportationPage from './pages/TransportationPage';
import TransportDetailPage from './pages/TransportDetailPage';
import SpiritualPage from './pages/SpiritualPage';
import HolyPackageDetailPage from './pages/HolyPackageDetailPage';
import WhyUsPage from './pages/WhyUsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-sand-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/destinations/:stateName" element={<DestinationsPage />} />
            <Route path="/destinations/:stateName/:placeName" element={<DestinationDetail />} />
            <Route path="/transportation" element={<TransportationPage />} />
            <Route path="/transportation/:vehicleName" element={<TransportDetailPage />} />
            <Route path="/spiritual" element={<SpiritualPage />} />
            <Route path="/spiritual/:packageName" element={<HolyPackageDetailPage />} />
            <Route path="/why-us" element={<WhyUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
