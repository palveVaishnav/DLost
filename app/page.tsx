import { Footer } from "./components/Footer";
import HeroSection from "./components/HeroSection";
import { NavigationBar } from "./components/NavigationBar";
import Secondsection from "./components/SecondSection";
import Testimonials from "./components/Testimonials";
import ThirdSection from "./components/ThirdSection";

export default function Home() {
  return (
    <div>
      <div className="fixed top-0 w-full z-10">
        <NavigationBar />
      </div>
      <HeroSection />
      <Secondsection />
      <ThirdSection />
      <Testimonials />
      <Footer />
    </div>
  )
}