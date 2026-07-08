import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816]">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-8 py-24">

        {/* CTA */}

        <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-violet-500/10 to-blue-500/10 backdrop-blur-xl p-16 text-center">

          <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Ready to Become a Better Developer?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Join CodeSage today and let AI guide every step of your coding
            journey.
          </p>

          <button className="mt-10 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_rgba(139,92,246,.4)]">
            Start Learning Free
          </button>

        </div>

        {/* Footer Grid */}

        <div className="mt-24 grid gap-12 md:grid-cols-4">

          {/* Brand */}

          <div>

            <h2 className="text-2xl font-black text-white sm:text-3xl">
              <span className="text-violet-400">Code</span>Sage
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              AI-powered coding mentor helping students become confident
              software engineers.
            </p>

          </div>

          {/* Product */}

          <div>

            <h3 className="font-semibold text-white">
              Product
            </h3>

            <ul className="mt-6 space-y-4 text-slate-400">

              <li>AI Code Review</li>

              <li>Learning Roadmaps</li>

              <li>Interview Prep</li>

              <li>Analytics</li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="font-semibold text-white">
              Company
            </h3>

            <ul className="mt-6 space-y-4 text-slate-400">

              <li>About</li>

              <li>Blog</li>

              <li>Careers</li>

              <li>Contact</li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="font-semibold text-white">
              Connect
            </h3>

            <div className="mt-6 flex gap-4">

              <button className="rounded-xl border border-white/10 p-3 text-slate-300 transition hover:border-violet-500 hover:text-white">
                <FaGithub className="h-5 w-5" />
              </button>

              <button className="rounded-xl border border-white/10 p-3 text-slate-300 transition hover:border-violet-500 hover:text-white">
                <FaLinkedin className="h-5 w-5" />
              </button>

              <button className="rounded-xl border border-white/10 p-3 text-slate-300 transition hover:border-violet-500 hover:text-white">
                <FaXTwitter className="h-5 w-5" />
              </button>

              <button className="rounded-xl border border-white/10 p-3 text-slate-300 transition hover:border-violet-500 hover:text-white">
                <Mail className="h-5 w-5" />
              </button>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row">

          <p>
            © 2026 CodeSage. All rights reserved.
          </p>

          <div className="flex gap-8">

            <button className="hover:text-white">
              Privacy
            </button>

            <button className="hover:text-white">
              Terms
            </button>

            <button className="hover:text-white">
              Cookies
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;