import {
  Home,
  MoreHorizontal,
  Package,
  ReceiptText,
  ShoppingCart,
} from "lucide-react";
import { NavLink } from "react-router";

const navItems = [
  {
    label: "Home",
    path: "/",
    icon: Home,
  },
  {
    label: "Sell",
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
    icon: ReceiptText,
  },
  {
    label: "More",
    path: "/more",
    icon: MoreHorizontal,
  },
];

function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#E5E0D8] bg-white px-2 py-2 md:hidden">
      <div className="grid grid-cols-5 gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex min-h-14 flex-col items-center justify-center rounded-2xl px-2 text-xs font-semibold transition ${
                  isActive
                    ? "bg-[#FAF7F0] text-[#2F6F4E]"
                    : "text-[#6B7280] hover:text-[#2F6F4E]"
                }`
              }
            >
              <Icon size={20} strokeWidth={2.2} />
              <span className="mt-1">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomNav;
