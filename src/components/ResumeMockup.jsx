function ResumeMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-4 rounded-3xl bg-[#758695]/10 blur-2xl" />

      <div className="relative rotate-1 rounded-xl bg-white p-6 shadow-2xl ring-1 ring-slate-200">
        
        <div className="flex gap-5 border-b border-slate-200 pb-5">
          <div className="h-16 w-16 rounded-full bg-[#758695]/20" />

          <div>
            <div className="h-4 w-36 rounded bg-slate-800" />
            <div className="mt-2 h-2.5 w-24 rounded bg-[#758695]" />
            <div className="mt-3 h-2 w-44 rounded bg-slate-200" />
          </div>
        </div>

        <div className="mt-5">
          <div className="h-3 w-24 rounded bg-[#758695]" />

          <div className="mt-3 space-y-2">
            <div className="h-2 w-full rounded bg-slate-200" />
            <div className="h-2 w-11/12 rounded bg-slate-200" />
            <div className="h-2 w-4/5 rounded bg-slate-200" />
          </div>
        </div>

        <div className="mt-6">
          <div className="h-3 w-20 rounded bg-[#758695]" />

          <div className="mt-3 space-y-2">
            <div className="h-2 w-full rounded bg-slate-200" />
            <div className="h-2 w-10/12 rounded bg-slate-200" />
          </div>
        </div>

        <div className="mt-6">
          <div className="h-3 w-16 rounded bg-[#758695]" />

          <div className="mt-3 flex flex-wrap gap-2">
            <span className="h-6 w-16 rounded bg-slate-100" />
            <span className="h-6 w-20 rounded bg-slate-100" />
            <span className="h-6 w-14 rounded bg-slate-100" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default ResumeMockup;