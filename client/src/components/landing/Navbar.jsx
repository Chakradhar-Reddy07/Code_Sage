import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../../hooks/useAuth";

function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-6 left-0 right-0 z-50"
    >
      <div className="max-w-[1400px] mx-auto px-8">

        <div className="
          h-16
          rounded-full
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-2xl
          shadow-[0_10px_50px_rgba(0,0,0,.35)]
        ">

          <div className="h-full flex items-center justify-between px-8">

            {/* Logo */}

            <Link
              to="/"
              className="text-3xl font-black tracking-wide"
            >
              <span className="text-violet-400">
                Code
              </span>

              <span className="text-white">
                Sage
              </span>
            </Link>

            {/* Nav */}

            <nav className="hidden lg:flex items-center gap-10">

              <a
                href="#features"
                className="text-slate-300 hover:text-white transition"
              >
                Features
              </a>

              <a
                href="#workflow"
                className="text-slate-300 hover:text-white transition"
              >
                Workflow
              </a>

              <a
                href="#journey"
                className="text-slate-300 hover:text-white transition"
              >
                Journey
              </a>

              <a
                href="#pricing"
                className="text-slate-300 hover:text-white transition"
              >
                Pricing
              </a>

            </nav>

            {/* Buttons */}

            <div className="flex items-center gap-3">

              {isAuthenticated ? (

                <>

                  <Link to="/dashboard">

                    <button
                      className="
                        px-6
                        py-2.5
                        rounded-full
                        bg-gradient-to-r
                        from-violet-600
                        to-blue-600
                        text-white
                        font-semibold
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:shadow-[0_10px_35px_rgba(139,92,246,.45)]
                      "
                    >
                      Dashboard
                    </button>

                  </Link>

                  <span className="text-slate-300 text-sm">
                    {user?.name}
                  </span>

                  <button
                    onClick={handleLogout}
                    className="
                      px-4
                      py-2
                      rounded-full
                      text-slate-400
                      border
                      border-white/10
                      hover:text-white
                      hover:bg-white/5
                      transition
                      text-sm
                    "
                  >
                    Logout
                  </button>

                </>

              ) : (

                <>

                  <Link to="/login">

                    <button
                      className="
                        px-6
                        py-2.5
                        rounded-full
                        text-white
                        border
                        border-white/10
                        hover:bg-white/5
                        transition
                      "
                    >
                      Login
                    </button>

                  </Link>

                  <Link to="/signup">

                    <button
                      className="
                        px-7
                        py-2.5
                        rounded-full
                        bg-gradient-to-r
                        from-violet-600
                        to-blue-600
                        text-white
                        font-semibold
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:shadow-[0_10px_35px_rgba(139,92,246,.45)]
                      "
                    >
                      Get Started
                    </button>

                  </Link>

                </>

              )}

            </div>

          </div>

        </div>

      </div>

    </motion.header>
  );
}

export default Navbar;