import DashboardLayout from "../components/dashboard/DashboardLayout";
import { useAuth } from "../hooks/useAuth";

function Profile() {
  const { user } = useAuth();
  const displayName =
    user?.name || user?.username || user?.email || "CodeSage user";

  return (
    <DashboardLayout>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-4xl font-bold text-white">
          Profile
        </h1>

        <p className="mt-4 max-w-2xl text-slate-300">
          {displayName}
        </p>
      </div>
    </DashboardLayout>
  );
}

export default Profile;
