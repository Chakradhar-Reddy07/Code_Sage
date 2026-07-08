import { Bell, Menu, Search } from "lucide-react";
import { useSidebar } from "../../hooks/useSidebar";

function Topbar() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="flex h-16 items-center justify-between border-b border-white/10 px-4 lg:px-5">

      <div className="flex items-center gap-3">

        <button
          type="button"
          onClick={toggleSidebar}
          title="Toggle sidebar"
          className="rounded-xl border border-white/10 p-3 text-white transition hover:bg-white/10"
        >
          <Menu size={20} />
        </button>

        <div className="relative hidden sm:block">

          <Search
            size={18}
            className="absolute left-4 top-4 text-slate-500"
          />

          <input
            placeholder="Search..."
            className="
              w-64
              rounded-xl
              border
              border-white/10
              bg-white/5
              py-3
              pl-11
              pr-4
              text-white
              outline-none
              lg:w-80
            "
          />

        </div>

      </div>

      <button
        type="button"
        title="Notifications"
        className="rounded-xl border border-white/10 p-3 text-white transition hover:bg-white/10"
      >

        <Bell />

      </button>

    </header>
  );
}

export default Topbar;
