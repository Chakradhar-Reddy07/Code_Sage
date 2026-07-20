import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Code2,
  History,
  BookOpen,
  Brain,
  BarChart3,
  Settings,
  User,
  Bell,
  LifeBuoy,
  LogOut,
} from "lucide-react";
import { useSidebar } from "../../hooks/useSidebar";
import { useAuth } from "../../hooks/useAuth";
import ConfirmDialog from "../ui/ConfirmDialog";

const menu = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: Code2,
    label: "Code Review",
    path: "/review",
    exact: true,
  },
  {
    icon: History,
    label: "Review History",
    path: "/review/history",
  },
  {
    icon: BookOpen,
    label: "Roadmaps",
    path: "/roadmap",
  },
  {
    icon: BarChart3,
    label: "Analytics",
    path: "/analytics",
  },
  {
    icon: Brain,
    label: "Interview Prep",
    path: "/interview",
  },
  {
    icon: User,
    label: "Profile",
    path: "/profile",
  },
  {
    icon: Bell,
    label: "Notifications",
    path: "/notifications",
  },
  {
    icon: Settings,
    label: "Settings",
    path: "/settings",
  },
  {
    icon: LifeBuoy,
    label: "Help & Support",
    path: "/help",
  },
];

function Sidebar() {
  const { open, closeSidebar } = useSidebar();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);

  const confirmLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      {open ? (
        <button
          type="button"
          aria-label="Close sidebar overlay"
          onClick={closeSidebar}
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
        />
      ) : null}

      <aside
        className={`fixed left-0 top-0 z-40 h-screen border-r border-white/10 bg-[#0B1120] transition-all duration-300 ${
          open
            ? "w-72 translate-x-0"
            : "w-72 -translate-x-full lg:w-20 lg:translate-x-0"
        }`}
      >

        <div className={open ? "p-8" : "hidden p-5 lg:block"}>
          <Link
            to="/"
            onClick={() => {
              if (window.innerWidth < 1024) {
                closeSidebar();
              }
            }}
            aria-label="Go to landing page"
            className="block"
          >
            <h2
              className={`font-black text-white ${
                open ? "text-3xl" : "text-center text-xl"
              }`}
            >
              <span className="text-violet-400">
                {open ? "Code" : "C"}
              </span>
              {open ? "Sage" : "S"}
            </h2>
          </Link>

          {open && user ? (
            <div className="mt-6 rounded-2xl bg-white/5 px-4 py-3">
              <p className="text-sm font-medium text-white truncate">
                {user.name}
              </p>
              <p className="text-xs text-slate-400 truncate">
                {user.email}
              </p>
            </div>
          ) : null}
        </div>

        <nav className={open ? "px-5" : "px-3 pt-5 lg:pt-2"}> 

          {menu.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.label}
                to={item.path}
                title={item.label}
                end={item.exact}
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    closeSidebar();
                  }
                }}
                className={({ isActive }) =>
                  `mb-3 flex items-center rounded-2xl py-4 transition-all ${
                    open
                      ? "gap-4 px-5"
                      : "justify-center px-0"
                  } ${
                    isActive
                      ? "bg-violet-600 text-white"
                      : "text-slate-300 hover:bg-violet-500/10 hover:text-white"
                  }`
                }
              >
                <Icon size={22} />

                {open ? <span>{item.label}</span> : null}
              </NavLink>
            );
          })}

        </nav>

        <div className={open ? "px-5 pb-6" : "flex justify-center px-3 pb-6"}>
          <button
            onClick={() => setShowLogout(true)}
            title="Logout"
            className={`flex items-center rounded-2xl py-4 text-slate-400 transition-all hover:text-red-400 ${
              open
                ? "w-full gap-4 px-5"
                : "justify-center px-0"
            }`}
          >
            <LogOut size={22} />

            {open ? <span>Logout</span> : null}
          </button>
        </div>

        <ConfirmDialog
          isOpen={showLogout}
          title="Logout"
          message="Are you sure you want to log out?"
          onConfirm={confirmLogout}
          onCancel={() => setShowLogout(false)}
        />
      </aside>
    </>
  );
}

export default Sidebar;
