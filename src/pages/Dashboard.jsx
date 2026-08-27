import { Plus, Search, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

import ResumeCard from "../components/ResumeCard";

const resumes = [
  {
    title: "My Professional Resume",
    template: "Classic",
    updated: "2 days ago",
  },
  {
    title: "Frontend Developer Resume",
    template: "Modern",
    updated: "5 days ago",
  },
  {
    title: "Software Engineer Resume",
    template: "Minimal",
    updated: "1 week ago",
  },
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F1ECDA]">

      {/* Header */}
      <header className="border-b border-[#758695]/15 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link to="/" className="text-2xl font-bold text-slate-900">
            Resume<span className="text-[#758695]">Builder</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-slate-500 sm:block">
              Welcome back!
            </span>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#758695] text-sm font-semibold text-white">
              DU
            </div>
          </div>

        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-6 py-10">

        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-[#758695]">
              Dashboard
            </p>

            <h1 className="mt-1 text-3xl font-bold text-slate-900">
              My Resumes
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Create, edit and manage your professional resumes.
            </p>
          </div>

          <Link
            to="/builder"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#758695] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            <Plus size={18} />
            Create Resume
          </Link>
        </div>

        {/* Search & Filter */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search resumes..."
              className="w-full rounded-lg border border-[#758695]/20 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#758695]"
            />
          </div>

          <button className="flex items-center justify-center gap-2 rounded-lg border border-[#758695]/20 bg-white px-5 py-3 text-sm font-medium text-slate-700">
            <SlidersHorizontal size={17} />
            Filter
          </button>

        </div>

        {/* Resume Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* Create New Card */}
          {/* <Link
            to="/builder"
            className="flex min-h-[370px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#758695]/30 bg-white/50 p-6 text-center transition hover:border-[#758695] hover:bg-white"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#758695]/10 text-[#758695]">
              <Plus size={26} />
            </div>

            <h3 className="mt-4 font-semibold text-slate-900">
              Create a new resume
            </h3>

            <p className="mt-2 max-w-xs text-sm text-slate-500">
              Start from scratch and build your professional resume.
            </p>
          </Link> */}

          {resumes.map((resume) => (
            <ResumeCard
              key={resume.title}
              title={resume.title}
              template={resume.template}
              updated={resume.updated}
            />
          ))}

        </div>

      </main>
    </div>
  );
}

export default Dashboard;