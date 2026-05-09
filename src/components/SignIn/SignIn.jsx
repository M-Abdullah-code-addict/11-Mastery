import React, { useState } from "react";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    toast.success("Login successful (frontend only)");
  };

  return (
    <section className="w-full min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

        <h1 className="text-4xl font-bold text-white text-center mb-6">
          Welcome Back
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-400"
          />

          {/* Password */}
          <div className="relative">

            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-400"
            />

            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400 cursor-pointer"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </div>

          </div>

          <button className="bg-orange-400 hover:bg-orange-500 transition-all py-3 rounded-xl font-semibold text-white">
            Sign In
          </button>

        </form>
      </div>
    </section>
  );
}

export default SignIn;