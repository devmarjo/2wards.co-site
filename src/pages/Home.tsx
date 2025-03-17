import { About } from "@/components/About";
import { Cta } from "@/components/Cta";
// import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
// import { Newsletter } from "@/components/Newsletter";
// import { Pricing } from "@/components/Pricing";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Services } from "@/components/Services";
import { Sponsors } from "@/components/Sponsors";
// import { Team } from "@/components/Team";
// import { Testimonials } from "@/components/Testimonials";
import { ContactDialog } from "@/components/ContactDialog";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Cta />
      <Services />
      <Sponsors />
      {/* <Testimonials /> */}
      {/* <Team /> */}
      <Features />
      {/* <Pricing /> */}
      {/* <Newsletter /> */}
      
      {/* <FAQ /> */}
      <Footer />
      <ScrollToTop />
      <ContactDialog />
    </>
  );
}

export default HomePage;
