import { Edit3, Eye, Trash2 } from "lucide-react";

function ResumeCard({ title, template, updated }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-[#758695]/20 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      
      <div className="flex h-64 items-center justify-center bg-[#F1ECDA] p-6">
        <div className="h-full w-44 rounded-md bg-white p-4 shadow-md">
          <div className="border-b border-slate-200 pb-3">
            <div className="h-3 w-20 rounded bg-slate-800" />
            <div className="mt-2 h-1.5 w-14 rounded bg-[#758695]" />
          </div>

          <div className="mt-4 space-y-3">
            <div>
              <div className="h-1.5 w-12 rounded bg-[#758695]" />
              <div className="mt-2 h-1 w-full rounded bg-slate-200" />
              <div className="mt-1 h-1 w-4/5 rounded bg-slate-200" />
            </div>

            <div>
              <div className="h-1.5 w-10 rounded bg-[#758695]" />
              <div className="mt-2 h-1 w-full rounded bg-slate-200" />
              <div className="mt-1 h-1 w-3/4 rounded bg-slate-200" />
            </div>

            <div>
              <div className="h-1.5 w-12 rounded bg-[#758695]" />
              <div className="mt-2 flex gap-1">
                <span className="h-3 w-8 rounded bg-slate-100" />
                <span className="h-3 w-10 rounded bg-slate-100" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-slate-900">
              {title}
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              {template} · Updated {updated}
            </p>
          </div>
        </div>

        <div className="mt-5 flex gap-2">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
            <Eye size={16} />
            Preview
          </button>

          <button className="flex items-center justify-center rounded-lg border border-slate-200 px-3 py-2 text-slate-600 transition hover:bg-slate-50">
            <Edit3 size={16} />
          </button>

          <button className="flex items-center justify-center rounded-lg border border-red-100 px-3 py-2 text-red-500 transition hover:bg-red-50">
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResumeCard;