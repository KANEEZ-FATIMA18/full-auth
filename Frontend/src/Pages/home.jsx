import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-950 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold">
         SecureAuth
        </h1>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-5 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-[80vh]">

        <div className="backdrop-blur-xl bg-white/10 border border-white/20 px-5 py-2 rounded-full mb-6">
          ✨ Welcome to SecureAuth
        </div>

        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
          Modern Authentication
          <span className="text-indigo-400"> Experience</span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl text-lg">
          A beautifully designed React application with secure login,
          signup functionality, and a modern glassmorphism interface.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <Link
            to="/signup"
            className="px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 transition font-semibold"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition"
          >
            Login Now
          </Link>

        </div>

        {/* Floating Glass Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 w-full max-w-6xl">

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 hover:-translate-y-2 transition">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold">
              Secure Access
            </h3>
            <p className="text-gray-300 mt-3">
              Authentication system with protected routes and user security.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 hover:-translate-y-2 transition">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold">
              Fast Performance
            </h3>
            <p className="text-gray-300 mt-3">
              Built with React and modern development practices.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 hover:-translate-y-2 transition">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold">
              Modern UI
            </h3>
            <p className="text-gray-300 mt-3">
              Beautiful glassmorphism design with responsive layouts.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-gray-400 border-t border-white/10">
        © 2026 ShopSphere. All rights reserved.
      </footer>

    </div>
  );
};

export default Home;