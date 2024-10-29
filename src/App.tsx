import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Program from "./components/Program";
import BYDP from "./components/BYDP";
import Mentors from "./components/Mentors";
import SkillsAndTools from "./components/SkillsAndTools";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen relative  h-full w-full bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Program />
      <BYDP />
      <Mentors />
      <SkillsAndTools />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
