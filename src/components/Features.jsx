import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "FileText",
    title: "Easy Resume Builder",
    description:
      "Create and organize your resume with a simple, intuitive builder.",
  },
  {
    icon: "Palette",
    title: "Professional Templates",
    description:
      "Choose clean and modern templates designed to make a strong impression.",
  },
  {
    icon: "Download",
    title: "Download as PDF",
    description:
      "Preview your finished resume and download it as a professional PDF.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="bg-[#F1ECDA] px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#758695]">
            Features
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to build a great resume
          </h2>

          <p className="mt-4 text-slate-600">
            Simple tools that help you create a professional resume without
            unnecessary complexity.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;