import BackgroundGlow from "../landing/BackgroundGlow";

function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816]">

      <BackgroundGlow />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">

        <div className="w-full max-w-md">

          <div className="mb-10 text-center">

            <h1 className="text-5xl font-black text-white">

              <span className="text-violet-400">
                Code
              </span>

              Sage

            </h1>

            <h2 className="mt-8 text-3xl font-bold text-white">

              {title}

            </h2>

            <p className="mt-3 text-slate-400">

              {subtitle}

            </p>

          </div>

          {children}

        </div>

      </div>

    </div>
  );
}

export default AuthLayout;