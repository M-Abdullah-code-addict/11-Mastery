import {
  instagramLogo,
  facebookLogo,
  logo,
  pages,
} from "./../../constants";

import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-slate-950 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Left Section */}
          <div className="flex flex-col gap-5">

            <NavLink
              to={pages[0].route}
              className="flex items-center gap-3"
            >

              <img
                className="w-20 h-20 drop-shadow-[0_0_20px_rgba(251,146,60,0.25)]"
                src={logo}
                alt="Logo"
              />

              <h1 className="text-2xl font-bold text-white">
                11+
                <span className="text-orange-400"> Mastery</span>
              </h1>
            </NavLink>

            <p className="text-gray-400 leading-relaxed max-w-md">
              An academy that helps students prepare for 11+ exams
              with structured practice materials and expert learning
              resources.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5">

            <h2 className="text-xl font-semibold text-white">
              Quick Links
            </h2>

            <div className="flex flex-col gap-3">

              {pages.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.route}
                  className={({ isActive }) =>
                    `transition-all duration-300 hover:text-orange-400 w-fit ${
                      isActive
                        ? "text-orange-400"
                        : "text-gray-300"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-5">

            <h2 className="text-xl font-semibold text-white">
              Follow Us
            </h2>

            <p className="text-gray-400">
              Stay connected with us on social media for updates,
              learning tips, and new practice materials.
            </p>

            <div className="flex gap-4">

              <a
                href="#"
                className="bg-white/5 hover:bg-orange-400/20 border border-white/10 hover:border-orange-400 transition-all duration-300 p-3 rounded-xl"
              >
                <img
                  className="w-7 h-7"
                  src={instagramLogo}
                  alt="Instagram Logo"
                />
              </a>

              <a
                href="#"
                className="bg-white/5 hover:bg-orange-400/20 border border-white/10 hover:border-orange-400 transition-all duration-300 p-3 rounded-xl"
              >
                <img
                  className="w-7 h-7"
                  src={facebookLogo}
                  alt="Facebook Logo"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2026 11+ Mastery. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Built for smarter 11+ preparation 🚀
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;