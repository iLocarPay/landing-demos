import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import TrustBar from "./components/TrustBar.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Journey from "./components/Journey.jsx";
import Ambience from "./components/Ambience.jsx";
import Reviews from "./components/Reviews.jsx";
import Faq from "./components/Faq.jsx";
import Location from "./components/Location.jsx";
import FinalCta from "./components/FinalCta.jsx";
import Footer from "./components/Footer.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Journey />
        <Ambience />
        <Reviews />
        <Faq />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
