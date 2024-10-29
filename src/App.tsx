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
    <div className="min-h-screen relative h-full w-full bg-slate-950 text-white overflow-x-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="bg-gradient-to-b from-black via-blue-900 to-black opacity-90 absolute inset-0" />
        <div className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-700/30 via-blue-900/20 to-transparent opacity-70 absolute -top-32 left-1/3 w-[120vw] h-[120vh] rotate-45" />
        <div className="bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-blue-700/20 to-transparent opacity-60 absolute bottom-0 right-0 w-[80vw] h-[80vh] -rotate-45" />

        {/* Content Layer */}
        <div className="relative z-10">
          <Navbar
            onEnrollClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Hero />
          <Program />
          <BYDP />
          <div className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 ">
            <Mentors />
            <SkillsAndTools />
          </div>

          <div className="bg-gradient-to-b from-black via-blue-900 to-black opacity-90 relative -z-100 inset-0">
            <Pricing />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
