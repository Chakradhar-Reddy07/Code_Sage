import DashboardLayout from "../components/dashboard/DashboardLayout";

function Notifications() {
  return (
    <DashboardLayout>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-4xl font-bold text-white">
          Notifications
        </h1>

        <p className="mt-4 max-w-2xl text-slate-300">
          Learning reminders, review completion updates, and achievement alerts will appear here.
        </p>
      </div>
    </DashboardLayout>
  );
}

export default Notifications;
