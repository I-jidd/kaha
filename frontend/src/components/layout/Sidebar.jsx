import {
  BarChart3,
  Home,
  MoreHorizontal,
  Package,
  ReceiptText,
  ShoppingCart,
} from "lucide-react";
import { NavLink } from "react-router";

const navItems = [
  {
    label: "Dashboard",
    path: "/",
    icon: Home,
  },
  {
    label: "Sell / POS",
    path: "/sell",
    icon: ShoppingCart,
  },
  {
    label: "Products",
    path: "/products",
    icon: Package,
  },
  {
    label: "Reports",
    path: "/reports",
    icon: BarChart3,
  },
  {
    label: "More",
    path: "/more",
    icon: MoreHorizontal,
  },
];

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-[#E5E0D8] bg-white p-4 md:block">
      <div className="rounded-3xl bg-[#FAF7F0] p-4">
        <p className="text-xl font-bold text-[#2F6F4E]">Kaha</p>
        <p className="mt-1 text-sm text-[#6B7280]">
          Sales and inventory tracker
        </p>
      </div>

      <nav className="mt-6 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "bg-[#2F6F4E] text-white"
                    : "text-[#6B7280] hover:bg-[#FAF7F0] hover:text-[#2F6F4E]"
                }`
              }
            >
              <Icon size={20} strokeWidth={2.2} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-[#E5E0D8] bg-[#FAF7F0] p-4">
        <div className="flex items-center gap-3">
          <ReceiptText className="text-[#D99A3D]" size={22} />
          <div>
            <p className="text-sm font-bold text-[#1F2933]">MVP Mode</p>
            <p className="text-xs text-[#6B7280]">Foundation phase</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
