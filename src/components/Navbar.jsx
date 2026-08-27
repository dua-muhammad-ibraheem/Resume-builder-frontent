import { FileText } from "lucide-react";

function Navbar() {
  return (
    <nav className="border-b border-[#758695]/20 bg-[#F1ECDA]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#758695] text-white">
            <FileText size={20} />
          </div>

          <span className="text-xl font-bold tracking-tight text-slate-900">
            ResumeCraft
          </span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-slate-700 transition hover:text-[#758695]"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-medium text-slate-700 transition hover:text-[#758695]"
          >
            How it works
          </a>

          <a
            href="#templates"
            className="text-sm font-medium text-slate-700 transition hover:text-[#758695]"
          >
            Templates
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden text-sm font-medium text-slate-700 transition hover:text-[#758695] sm:block">
            Log in
          </button>

          <button className="rounded-lg bg-[#758695] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;