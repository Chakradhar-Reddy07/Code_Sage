import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useLocation } from "react-router-dom";
import { useSidebar } from "../../hooks/useSidebar";

function DashboardLayout({ children }) {
  const { open } = useSidebar();
  const location = useLocation();
  const isReviewWorkspace = location.pathname === "/review";

  return (
    <div className="min-h-screen bg-[#050816]">

      <Sidebar />

      <div
        className={`transition-all duration-300 ${
          open ? "lg:ml-72" : "lg:ml-20"
        }`}
      >

        <Topbar />

        <main
          className={isReviewWorkspace ? "p-4 lg:p-5" : "p-6 lg:p-8"}
        >

          {children}

        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;
