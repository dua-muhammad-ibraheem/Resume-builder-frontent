import { FileText, Palette, Download } from "lucide-react";

const icons = {
  FileText,
  Palette,
  Download,
};

function FeatureCard({ icon, title, description }) {
  const Icon = icons[icon];

  return (
    <div className="rounded-2xl border border-[#758695]/20 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#758695]/10 text-[#758695]">
        <Icon size={24} />
      </div>

      <h3 className="text-lg font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;