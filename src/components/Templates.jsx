function Templates() {
  return (
    <section
      id="templates"
      className="bg-white px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#758695]">
            Templates
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Start with a professional design
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Pick a clean layout and focus on what matters most — your
            experience and skills.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-sm">
          <div className="rounded-2xl border border-[#758695]/20 bg-[#F1ECDA] p-4 shadow-sm">
            <div className="rounded-lg bg-white p-5 shadow-sm">
              <div className="flex gap-4 border-b border-slate-200 pb-4">
                <div className="h-12 w-12 rounded-full bg-[#758695]/20" />

                <div className="flex-1">
                  <div className="h-3.5 w-28 rounded bg-slate-800" />
                  <div className="mt-2 h-2 w-20 rounded bg-[#758695]" />
                </div>
              </div>

              <div className="mt-5 space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item}>
                    <div className="h-2.5 w-20 rounded bg-[#758695]" />
                    <div className="mt-2 h-2 w-full rounded bg-slate-200" />
                    <div className="mt-1.5 h-2 w-4/5 rounded bg-slate-200" />
                  </div>
                ))}
              </div>
            </div>

            <button className="mt-4 w-full rounded-lg bg-[#758695] py-2.5 text-sm font-semibold text-white transition hover:opacity-90">
              Use this template
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Templates;