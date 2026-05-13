import { logo, pages } from "../../constants";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch()


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
                  isActive ? "text-orange-400" : "text-gray-200"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          {user && (
            <div className="flex items-center gap-4">
              {/* USER CARD */}
              <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-lg">
                <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-white font-bold text-lg">
                  {user.name?.charAt(0).toUpperCase()}
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">
                    {user.name}
                  </span>

                  <span className="text-xs text-zinc-400">{user.email}</span>
                </div>
              </div>

              {/* LOGOUT BUTTON */}
              <button
                onClick={() => {
                  dispatch(logout());
                }}
                className="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold transition-all duration-300 shadow-lg shadow-red-500/20"
              >
                Logout
              </button>
            </div>
          )}

          {!user && (
            <>
              <NavLink to="/signin">
                <button className="px-5 py-2.5 rounded-xl border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition-all duration-300 font-semibold">
                  Sign In
                </button>
              </NavLink>

              <NavLink to="/signup">
                <button className="px-5 py-2.5 rounded-xl bg-orange-400 hover:bg-orange-500 transition-all duration-300 text-white font-semibold shadow-lg shadow-orange-500/20">
                  Register
                </button>
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
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
                    isActive ? "text-orange-400" : "text-gray-200"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* AUTH SECTION */}
          {user ? (
            <div className="flex flex-col gap-2 pt-3 border-t border-gray-800">
              <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-zinc-900 border border-zinc-800">
                <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-white font-bold">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>

                <div className="flex flex-col">
                  <span className="text-white font-semibold text-sm">
                    {user?.name}
                  </span>
                  <span className="text-gray-400 text-xs">{user?.email}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <NavLink to={"/signin"}>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-full px-5 py-3 rounded-xl border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition-all duration-300 font-semibold"
                >
                  Sign In
                </button>
              </NavLink>

              <NavLink to={"/signup"}>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-full px-5 py-3 rounded-xl bg-orange-400 hover:bg-orange-500 transition-all duration-300 text-white font-semibold shadow-lg shadow-orange-500/20"
                >
                  Register
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
