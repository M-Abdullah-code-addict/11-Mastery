import { useState } from "react";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import { registerUser } from "../../api/authapi"

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirm = e.target.confirm.value;

    if (!name || !email || !password || !confirm) {
      toast.error("All fields are required");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    if (password !== confirm) {
      toast.error("Passwords do not match");
      return;
    }
  
    const result = registerUser({name, email, password})
    console.log(result)
  };

  return (
    <section className="w-full min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
        <h1 className="text-4xl font-bold text-white text-center mb-6">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-400"
          />

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

          <input
            name="confirm"
            type="password"
            placeholder="Confirm Password"
            className="bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-400"
          />

          <button className="bg-orange-400 hover:bg-orange-500 transition-all py-3 rounded-xl font-semibold text-white">
            Create Account
          </button>
        </form>
      </div>
    </section>
  );
}

export default Register;
