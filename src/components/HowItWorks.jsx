const steps = [
  {
    number: "01",
    title: "Add your details",
    description:
      "Enter your personal information, education, experience, skills and projects.",
  },
  {
    number: "02",
    title: "Choose a template",
    description:
      "Select a professional layout that matches your career and personal style.",
  },
  {
    number: "03",
    title: "Download your resume",
    description:
      "Preview your resume and download a polished PDF ready for applications.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-white px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#758695]">
            How it works
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Create your resume in three simple steps
          </h2>

          <p className="mt-4 text-slate-600">
            No complicated tools. Just add your information, choose a design,
            and you're ready to go.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#758695] text-lg font-bold text-white">
                {step.number}
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>

              <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;