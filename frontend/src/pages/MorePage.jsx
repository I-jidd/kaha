const groups = [
  {
    title: "Store",
    links: ["Store settings", "Restock history", "Stock movements"],
  },
  {
    title: "Account",
    links: ["Profile", "Change password", "Logout"],
  },
];

function MorePage() {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-2xl font-bold text-[#1F2933]">More</h2>
        <p className="mt-1 text-sm text-[#6B7280]">
          Mobile-friendly menu for store and account options.
        </p>
      </div>

      {groups.map((group) => (
        <section
          key={group.title}
          className="rounded-3xl border border-[#E5E0D8] bg-white p-4"
        >
          <h3 className="px-2 text-sm font-bold text-[#2F6F4E]">
            {group.title}
          </h3>

          <div className="mt-3 divide-y divide-[#E5E0D8]">
            {group.links.map((link) => (
              <button
                key={link}
                className="flex w-full items-center justify-between px-2 py-4 text-left text-sm font-semibold text-[#1F2933]"
              >
                <span>{link}</span>
                <span className="text-[#6B7280]">›</span>
              </button>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default MorePage;
