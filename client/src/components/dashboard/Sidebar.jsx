import { Link, NavLink } from "react-router-dom";
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
} from "lucide-react";
import { useSidebar } from "../../hooks/useSidebar";

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
        </div>

        <nav className={open ? "px-5" : "px-3 pt-5 lg:pt-2"}>

          {menu.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.label}
                to={item.path}
                title={item.label}
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
      </aside>
    </>
  );
}

export default Sidebar;
