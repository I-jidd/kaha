const sampleProducts = [
  {
    name: "Coke Sakto",
    price: 15,
    stock: 24,
  },
  {
    name: "Lucky Me Pancit Canton",
    price: 18,
    stock: 12,
  },
  {
    name: "Kopiko Brown",
    price: 12,
    stock: 8,
  },
];

function SellPage() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-[#1F2933]">Sell / POS</h2>
          <p className="mt-1 text-sm text-[#6B7280]">
            Fast product search and cart flow will be built here.
          </p>
        </div>

        <div className="rounded-3xl border border-[#E5E0D8] bg-white p-4">
          <input
            type="text"
            placeholder="Search product..."
            className="w-full rounded-2xl border border-[#E5E0D8] bg-[#FAF7F0] px-4 py-3 text-sm outline-none focus:border-[#2F6F4E]"
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {sampleProducts.map((product) => (
            <article
              key={product.name}
              className="rounded-3xl border border-[#E5E0D8] bg-white p-4"
            >
              <h3 className="font-bold text-[#1F2933]">{product.name}</h3>
              <p className="mt-1 text-sm text-[#6B7280]">
                Stock: {product.stock} pcs
              </p>

              <div className="mt-4 flex items-center justify-between">
                <p className="font-bold text-[#2F6F4E]">₱{product.price}</p>
                <button className="rounded-2xl bg-[#2F6F4E] px-4 py-2 text-sm font-bold text-white">
                  Add
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className="hidden rounded-3xl border border-[#E5E0D8] bg-white p-5 lg:block">
        <h3 className="font-bold text-[#1F2933]">Cart</h3>
        <p className="mt-2 text-sm text-[#6B7280]">
          Desktop cart panel will stay here while selling.
        </p>

        <div className="mt-6 rounded-2xl bg-[#FAF7F0] p-4 text-sm text-[#6B7280]">
          No items yet.
        </div>
      </aside>

      <button className="fixed bottom-20 left-4 right-4 rounded-2xl bg-[#2F6F4E] px-5 py-4 text-sm font-bold text-white shadow-sm md:hidden">
        View Cart • 0 items • ₱0
      </button>
    </div>
  );
}

export default SellPage;
