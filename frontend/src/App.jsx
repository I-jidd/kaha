import { useEffect, useState } from "react";
import "./index.css";
import api from "./api/axios";

const sampleProducts = [
  {
    name: "Coke Sakto",
    category: "Drinks",
    price: 15,
    stock: 24,
  },
  {
    name: "Lucky Me Pancit Canton",
    category: "Noodles",
    price: 18,
    stock: 12,
  },
  {
    name: "Kopiko Brown",
    category: "Coffee",
    price: 12,
    stock: 8,
  },
];

function App() {
  const [healthStatus, setHealthStatus] = useState({
    loading: true,
    data: null,
    error: "",
  });

  useEffect(() => {
    async function checkBackendHealth() {
      try {
        const response = await api.get("/api/health");

        setHealthStatus({
          loading: false,
          data: response.data,
          error: "",
        });
      } catch {
        setHealthStatus({
          loading: false,
          data: null,
          error: "Backend is not reachable",
        });
      }
    }

    checkBackendHealth();
  }, []);

  return (
    <main className="min-h-screen bg-[#FAF7F0] px-4 py-6 text-[#1F2933] sm:px-6 lg:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-48px)] w-full max-w-5xl items-center">
        <div className="grid w-full gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="rounded-3xl border border-[#E5E0D8] bg-white p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#2F6F4E]">
              Kaha MVP
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-[#1F2933] sm:text-5xl lg:text-6xl">
              Sales and inventory tracking for sari-sari stores.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#6B7280]">
              Kaha helps store owners record sales, monitor stock, track profit,
              and prepare clean data for future business insights.
            </p>

            <div className="mt-6 rounded-2xl border border-[#E5E0D8] bg-[#FAF7F0] p-4">
              <p className="text-sm font-bold text-[#1F2933]">
                Backend connection
              </p>

              <div className="mt-2 flex items-center gap-2 text-sm">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    healthStatus.data
                      ? "bg-[#2F6F4E]"
                      : healthStatus.loading
                        ? "bg-[#B7791F]"
                        : "bg-[#B42318]"
                  }`}
                ></span>

                <span className="font-semibold text-[#1F2933]">
                  {healthStatus.loading && "Checking backend..."}
                  {healthStatus.data && healthStatus.data.message}
                  {healthStatus.error && healthStatus.error}
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button className="rounded-2xl bg-[#2F6F4E] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#24543B]">
                Start selling
              </button>

              <button className="rounded-2xl border border-[#E5E0D8] bg-white px-5 py-3 text-sm font-bold text-[#2F6F4E] transition hover:border-[#2F6F4E]">
                View products
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-[#E5E0D8] bg-white p-5">
            <div className="flex items-center justify-between border-b border-[#E5E0D8] pb-4">
              <div>
                <p className="text-sm font-bold text-[#1F2933]">
                  Sample products
                </p>
                <p className="text-sm text-[#6B7280]">
                  Frontend and backend preview
                </p>
              </div>

              <span className="rounded-full bg-[#FAF7F0] px-3 py-1 text-xs font-bold text-[#2F6F4E]">
                Live
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {sampleProducts.map((product) => (
                <article
                  key={product.name}
                  className="rounded-2xl border border-[#E5E0D8] bg-[#FAF7F0] p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="font-bold text-[#1F2933]">
                        {product.name}
                      </h2>
                      <p className="mt-1 text-sm text-[#6B7280]">
                        {product.category}
                      </p>
                    </div>

                    <p className="font-bold text-[#2F6F4E]">₱{product.price}</p>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="text-[#6B7280]">Current stock</span>
                    <span className="font-semibold text-[#1F2933]">
                      {product.stock} pcs
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
