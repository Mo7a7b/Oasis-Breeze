import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <div className="flex-center h-[100vh]">
      <h1 className="text-2xl text-yellow-400">Hello, GSAP</h1>
    </div>
  );
};

export default App;
