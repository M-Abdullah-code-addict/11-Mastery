import { logo, pages } from "../../constants";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-slate-950/70 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 sm:px-8 lg:px-12 py-3">

        {/* Logo */}
        <div className="logo flex items-center gap-2 cursor-pointer">

          <img
            className="w-16 h-16 sm:w-18 sm:h-18 drop-shadow-[0_0_15px_rgba(251,146,60,0.25)]"
            src={logo}
            alt="Logo"
          />

          <h1 className="text-white text-xl sm:text-2xl font-bold">
            11+
            <span className="text-orange-400"> Mastery</span>
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-lg font-medium">

          {pages.map((item) => (
            <NavLink
              key={item.id}
              to={item.route}
              className={({ isActive }) =>
                `transition-all duration-300 hover:text-orange-400 ${
                  isActive
                    ? "text-orange-400"
                    : "text-gray-200"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">

          <NavLink to={"/signin"}>
          <button className="px-5 py-2.5 rounded-xl border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition-all duration-300 font-semibold">
            Sign In
          </button>
          </NavLink>
          <NavLink to={"/signup"}>
          <button className="px-5 py-2.5 rounded-xl bg-orange-400 hover:bg-orange-500 transition-all duration-300 text-white font-semibold shadow-lg shadow-orange-500/20">
            Register
          </button>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white"
        >
          {
            menuOpen
              ? <X size={30} />
              : <Menu size={30} />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen
            ? "max-h-125 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <div className="flex flex-col gap-5 px-6 pb-6 pt-2 bg-slate-950/95 backdrop-blur-xl">

          {/* Mobile Links */}
          <div className="flex flex-col gap-4 text-lg">

            {pages.map((item) => (
              <NavLink
                key={item.id}
                to={item.route}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `transition-all duration-300 hover:text-orange-400 ${
                    isActive
                      ? "text-orange-400"
                      : "text-gray-200"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">

            <NavLink to={"/signin"}>

              <button className="w-full px-5 py-3 rounded-xl border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition-all duration-300 font-semibold">
              Sign In
            </button>
            </NavLink>

            <NavLink to={"/signup"}>
            <button className="w-full px-5 py-3 rounded-xl bg-orange-400 hover:bg-orange-500 transition-all duration-300 text-white font-semibold shadow-lg shadow-orange-500/20">
              Register
            </button>
            </NavLink>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;