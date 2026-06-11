const sampleProducts = [
  {
    name: "Coke Sakto",
    category: "Drinks",
    price: 15,
    stock: 24,
    status: "In Stock",
  },
  {
    name: "Bear Brand",
    category: "Milk",
    price: 13,
    stock: 5,
    status: "Low Stock",
  },
  {
    name: "Champion Hotdog Mini",
    category: "Frozen Goods",
    price: 50,
    stock: 0,
    status: "Out of Stock",
  },
];

function ProductsPage() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#1F2933]">Products</h2>
          <p className="mt-1 text-sm text-[#6B7280]">
            Product inventory cards will be managed here.
          </p>
        </div>

        <button className="rounded-2xl bg-[#2F6F4E] px-5 py-3 text-sm font-bold text-white">
          Add product
        </button>
      </div>

      <div className="rounded-3xl border border-[#E5E0D8] bg-white p-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full rounded-2xl border border-[#E5E0D8] bg-[#FAF7F0] px-4 py-3 text-sm outline-none focus:border-[#2F6F4E]"
        />
      </div>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {sampleProducts.map((product) => (
          <article
            key={product.name}
            className="rounded-3xl border border-[#E5E0D8] bg-white p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-bold text-[#1F2933]">{product.name}</h3>
                <p className="mt-1 text-sm text-[#6B7280]">
                  {product.category}
                </p>
              </div>

              <span className="rounded-full bg-[#FAF7F0] px-3 py-1 text-xs font-bold text-[#2F6F4E]">
                {product.status}
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-[#6B7280]">Stock</span>
              <span className="font-bold text-[#1F2933]">
                {product.stock} pcs
              </span>
            </div>

            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-[#6B7280]">Selling price</span>
              <span className="font-bold text-[#2F6F4E]">₱{product.price}</span>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default ProductsPage;
