import DashboardLayout from "../components/dashboard/DashboardLayout";

function Interview() {
  return (
    <DashboardLayout>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-4xl font-bold text-white">
          Interview Preparation
        </h1>

        <p className="mt-4 max-w-2xl text-slate-300">
          Coding practice, hints, mock interviews, and AI evaluation will build on the review and roadmap modules.
        </p>
      </div>
    </DashboardLayout>
  );
}

export default Interview;
