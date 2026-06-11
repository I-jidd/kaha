import api from "../api/axios";
import { useEffect, useState } from "react";

const stats = [
  {
    label: "Today sales",
    value: "₱0.00",
  },
  {
    label: "Today profit",
    value: "₱0.00",
  },
  {
    label: "Transactions",
    value: "0",
  },
  {
    label: "Low stock",
    value: "0",
  },
];

function HomePage() {
  const [healthStatus, setHealthStatus] = useState({
    loading: true,
    message: "",
    error: "",
  });

  useEffect(() => {
    async function checkBackendHealth() {
      try {
        const response = await api.get("/api/health");

        setHealthStatus({
          loading: false,
          message: response.data.message,
          error: "",
        });
      } catch {
        setHealthStatus({
          loading: false,
          message: "",
          error: "Backend is not reachable",
        });
      }
    }

    checkBackendHealth();
  }, []);

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-[#E5E0D8] bg-white p-5 sm:p-6">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2F6F4E]">
          Dashboard
        </p>

        <h2 className="mt-3 text-3xl font-bold text-[#1F2933] sm:text-4xl">
          Good day, store owner.
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6B7280] sm:text-base">
          This is your Kaha dashboard shell. Real sales, profit, and inventory
          data will appear here after we build the database and core modules.
        </p>

        <div className="mt-5 rounded-2xl border border-[#E5E0D8] bg-[#FAF7F0] p-4">
          <p className="text-sm font-bold text-[#1F2933]">Backend connection</p>

          <div className="mt-2 flex items-center gap-2 text-sm">
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                healthStatus.message
                  ? "bg-[#2F6F4E]"
                  : healthStatus.loading
                    ? "bg-[#B7791F]"
                    : "bg-[#B42318]"
              }`}
            ></span>

            <span className="font-semibold text-[#1F2933]">
              {healthStatus.loading && "Checking backend..."}
              {healthStatus.message && healthStatus.message}
              {healthStatus.error && healthStatus.error}
            </span>
          </div>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-3xl border border-[#E5E0D8] bg-white p-5"
          >
            <p className="text-sm font-semibold text-[#6B7280]">{stat.label}</p>
            <p className="mt-2 text-2xl font-bold text-[#1F2933]">
              {stat.value}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default HomePage;
