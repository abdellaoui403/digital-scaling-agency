import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Portfolio from "./sections/Portfolio.jsx";
import Download from "./sections/Download.jsx";
import Footer from "./sections/Footer.jsx";
import Testimonial from "./sections/Testimonial.jsx";


const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Faq />
      <Portfolio />
      <Download />
      <Testimonial/>
      <Pricing />
      <Footer />
    </main>
  );
};

export default App;
