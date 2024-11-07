import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Feature } from "./components/Features";
import { Faq } from "./components/Faq";
import { Pricing } from "./components/Pricing";
import { Pro } from "./components/Pro";
import { Footer } from "./components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <Faq/>
      <Pricing/>
      <Pro/>
      <Footer/>
    </div>
  );
}
