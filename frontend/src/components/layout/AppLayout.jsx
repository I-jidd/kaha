import { Outlet } from "react-router";

import BottomNav from "./BottomNav";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#1F2933]">
      <Sidebar />

      <div className="min-h-screen md:pl-64">
        <Header />

        <main className="mx-auto w-full max-w-7xl px-4 py-4 pb-24 sm:px-6 lg:px-8 md:pb-8">
          <Outlet />
        </main>
      </div>

      <BottomNav />
    </div>
  );
}

export default AppLayout;
