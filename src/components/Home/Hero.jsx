import { heroImage } from "../../constants";
import { NavLink } from 'react-router-dom';

function Hero() {
  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex flex-col-reverse lg:flex-row justify-center items-center gap-10 lg:gap-20 px-5 sm:px-8 lg:px-20 py-10 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">

  {/* Left Side */}
  <div className="left max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left gap-5 z-10">

    {/* Heading */}
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
      Master Your
      <span className="text-orange-400"> 11+ </span>
      Preparation
    </h1>

    {/* Description */}
    <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
      Complete preparation for 11+ entry exams with practice materials,
      past papers, and expertly designed learning resources.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 mt-3 w-full sm:w-auto">
      <NavLink to={'/signup'}>
      <button className="bg-orange-400 hover:bg-orange-500 transition-all duration-300 text-white px-7 py-3 rounded-xl text-base sm:text-lg font-semibold shadow-lg shadow-orange-500/20">
        Get Started
      </button>
      </NavLink>

      <NavLink to={'/materials'}>

      <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition-all duration-300 px-7 py-3 rounded-xl text-base sm:text-lg font-semibold">
        Explore PDFs
      </button>
      </NavLink>

    </div>
  </div>

  {/* Right Side */}
  <div className="right relative flex justify-center items-center">

    {/* Glow */}
    <div className="absolute w-60 h-60 sm:w-80 sm:h-80 bg-orange-400/20 blur-3xl rounded-full"></div>

    {/* Hero Image */}
    <img
      className="relative w-65 sm:w-87.5 md:w-112.5 lg:w-137.5 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] animate-float"
      src={heroImage}
      alt="Student Image"
    />
  </div>
</div>
  )
}

export default Hero