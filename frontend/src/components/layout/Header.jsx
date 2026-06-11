function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#E5E0D8] bg-[#FAF7F0]/95 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div>
          <p className="text-sm font-bold text-[#2F6F4E] md:hidden">Kaha</p>
          <h1 className="text-lg font-bold text-[#1F2933] sm:text-xl">
            Store Overview
          </h1>
        </div>

        <div className="rounded-full border border-[#E5E0D8] bg-white px-3 py-1.5 text-xs font-bold text-[#2F6F4E]">
          Phase 1
        </div>
      </div>
    </header>
  );
}

export default Header;
