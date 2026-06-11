function ReportsPage() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold text-[#1F2933]">Reports</h2>
        <p className="mt-1 text-sm text-[#6B7280]">
          Sales, profit, product, and category reports will be shown here.
        </p>
      </div>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {["Total sales", "Total profit", "Transactions", "Average sale"].map(
          (label) => (
            <article
              key={label}
              className="rounded-3xl border border-[#E5E0D8] bg-white p-5"
            >
              <p className="text-sm font-semibold text-[#6B7280]">{label}</p>
              <p className="mt-2 text-2xl font-bold text-[#1F2933]">₱0.00</p>
            </article>
          ),
        )}
      </section>

      <section className="rounded-3xl border border-[#E5E0D8] bg-white p-5">
        <h3 className="font-bold text-[#1F2933]">Weekly sales trend</h3>
        <div className="mt-4 flex h-64 items-center justify-center rounded-2xl bg-[#FAF7F0] text-sm font-semibold text-[#6B7280]">
          Chart placeholder
        </div>
      </section>
    </div>
  );
}

export default ReportsPage;
