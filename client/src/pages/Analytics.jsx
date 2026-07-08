import DashboardLayout from "../components/dashboard/DashboardLayout";

function Analytics() {
  return (
    <DashboardLayout>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-4xl font-bold text-white">
          Analytics
        </h1>

        <p className="mt-4 max-w-2xl text-slate-300">
          Review trends, score history, language usage, and concept analysis will use the saved review data.
        </p>
      </div>
    </DashboardLayout>
  );
}

export default Analytics;
