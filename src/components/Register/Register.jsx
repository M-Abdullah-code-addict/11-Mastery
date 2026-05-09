import React from "react";
import { NavLink } from "react-router-dom";

function Register() {
  return (
    <section className="w-full min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">

        {/* Heading */}
        <div className="text-center mb-8">

          <h1 className="text-4xl font-extrabold text-white">
            Create Account
          </h1>

          <p className="text-gray-400 mt-3">
            Start your 11+ preparation journey today
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-5">

          <input
            type="text"
            placeholder="Full Name"
            className="bg-slate-900 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-400 text-white"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="bg-slate-900 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-400 text-white"
          />

          <input
            type="password"
            placeholder="Password"
            className="bg-slate-900 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-400 text-white"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="bg-slate-900 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-400 text-white"
          />

          <button
            type="submit"
            className="bg-orange-400 hover:bg-orange-500 transition-all duration-300 text-white font-semibold py-3 rounded-xl shadow-lg shadow-orange-500/20"
          >
            Create Account
          </button>
        </form>

        {/* Links */}
        <div className="text-center mt-6 text-sm text-gray-400">

          Already have an account?{" "}
          <NavLink
            to="/signin"
            className="text-orange-400 hover:underline"
          >
            Sign In
          </NavLink>

        </div>

      </div>
    </section>
  );
}

export default Register;