import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-dvh bg-black"></div>
    </main>
  );
};

export default App;
