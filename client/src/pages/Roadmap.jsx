import DashboardLayout from "../components/dashboard/DashboardLayout";

function Roadmap() {
  return (
    <DashboardLayout>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-4xl font-bold text-white">
          Learning Roadmap
        </h1>

        <p className="mt-4 max-w-2xl text-slate-300">
          Personalized roadmap generation is the next learning module after review history.
        </p>
      </div>
    </DashboardLayout>
  );
}

export default Roadmap;
