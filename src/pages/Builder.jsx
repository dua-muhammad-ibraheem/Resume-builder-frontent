import { ArrowLeft, Download, Eye, Save } from "lucide-react";
import { Link } from "react-router-dom";

function Builder() {
  return (
    <div className="min-h-screen bg-[#F1ECDA]">

      {/* Header */}
      <header className="border-b border-[#758695]/15 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link
            to="/dashboard"
            className="flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-[#758695]"
          >
            <ArrowLeft size={18} />
            Back to Dashboard
          </Link>

          <div className="text-xl font-bold text-slate-900">
            Resume<span className="text-[#758695]">Builder</span>
          </div>

          <div className="flex items-center gap-2">
            <button className="hidden items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:flex">
              <Eye size={17} />
              Preview
            </button>

            <button className="flex items-center gap-2 rounded-lg bg-[#758695] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90">
              <Save size={17} />
              Save
            </button>
          </div>

        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-6 py-8">

        <div className="mb-8">
          <p className="text-sm font-medium text-[#758695]">
            Resume Builder
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            Create your resume
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Fill in your information to create a professional resume.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* Form */}
          <div className="space-y-6">

            {/* Resume Title */}
            <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#758695]/10">
              <h2 className="text-lg font-semibold text-slate-900">
                Resume Details
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Give your resume a name so you can easily find it later.
              </p>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Resume Title
                </label>

                <input
                  type="text"
                  placeholder="e.g. Frontend Developer Resume"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#758695] focus:ring-2 focus:ring-[#758695]/10"
                />
              </div>
            </section>

            {/* Personal Information */}
            <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#758695]/10">
              <h2 className="text-lg font-semibold text-slate-900">
                Personal Information
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Add your basic contact information.
              </p>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Professional Title
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. Frontend Developer"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Phone
                  </label>

                  <input
                    type="tel"
                    placeholder="+92 300 1234567"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Location
                  </label>

                  <input
                    type="text"
                    placeholder="City, Country"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

              </div>
            </section>

            {/* Profile Summary */}
            <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#758695]/10">
              <h2 className="text-lg font-semibold text-slate-900">
                Profile Summary
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Write a short professional summary about yourself.
              </p>

              <textarea
                rows="5"
                placeholder="Write a brief summary about your experience, skills and career goals..."
                className="mt-5 w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
              />
            </section>

            {/* Education */}
            <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#758695]/10">
              <h2 className="text-lg font-semibold text-slate-900">
                Education
              </h2>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Institution
                  </label>

                  <input
                    type="text"
                    placeholder="University / College name"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Degree
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. Bachelor's in Computer Science"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Graduation Year
                  </label>

                  <input
                    type="text"
                    placeholder="2026"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

              </div>
            </section>

            {/* Experience */}
            <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#758695]/10">
              <h2 className="text-lg font-semibold text-slate-900">
                Work Experience
              </h2>

              <div className="mt-5 space-y-5">

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Job Title
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. Frontend Developer"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Company
                  </label>

                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Description
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Describe your responsibilities and achievements..."
                    className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

              </div>
            </section>

            {/* Skills */}
            <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#758695]/10">
              <h2 className="text-lg font-semibold text-slate-900">
                Skills
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Add your key technical and professional skills.
              </p>

              <input
                type="text"
                placeholder="e.g. React, JavaScript, CSS, Git"
                className="mt-5 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
              />
            </section>

            {/* Projects */}
            <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#758695]/10">
              <h2 className="text-lg font-semibold text-slate-900">
                Projects & Certifications
              </h2>

              <div className="mt-5 space-y-5">

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Project / Certification Name
                  </label>

                  <input
                    type="text"
                    placeholder="Project or certification name"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Description
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Briefly describe it..."
                    className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

              </div>
            </section>

            {/* Languages */}
            <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#758695]/10">
              <h2 className="text-lg font-semibold text-slate-900">
                Languages
              </h2>

              <input
                type="text"
                placeholder="e.g. English, Urdu, Arabic"
                className="mt-5 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
              />
            </section>

            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#758695] py-3 font-semibold text-white transition hover:opacity-90">
              <Save size={18} />
              Save Resume
            </button>

          </div>

          {/* Preview */}
          <aside className="hidden lg:block">
            <div className="sticky top-6">

              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-semibold text-slate-900">
                  Live Preview
                </h2>

                <button className="flex items-center gap-2 text-sm font-medium text-[#758695]">
                  <Download size={16} />
                  Download
                </button>
              </div>

              <div className="aspect-[8.5/11] overflow-hidden rounded-lg bg-white p-8 shadow-md">

                <div className="border-b-2 border-[#758695] pb-5">
                  <div className="h-5 w-36 rounded bg-slate-800" />
                  <div className="mt-2 h-3 w-28 rounded bg-[#758695]" />
                  <div className="mt-3 h-2 w-48 rounded bg-slate-200" />
                </div>

                <div className="mt-6 space-y-5">

                  <div>
                    <div className="h-3 w-20 rounded bg-[#758695]" />
                    <div className="mt-3 h-2 w-full rounded bg-slate-200" />
                    <div className="mt-2 h-2 w-5/6 rounded bg-slate-200" />
                    <div className="mt-2 h-2 w-4/6 rounded bg-slate-200" />
                  </div>

                  <div>
                    <div className="h-3 w-20 rounded bg-[#758695]" />
                    <div className="mt-3 h-2 w-full rounded bg-slate-200" />
                    <div className="mt-2 h-2 w-5/6 rounded bg-slate-200" />
                  </div>

                  <div>
                    <div className="h-3 w-16 rounded bg-[#758695]" />
                    <div className="mt-3 h-2 w-full rounded bg-slate-200" />
                    <div className="mt-2 h-2 w-4/5 rounded bg-slate-200" />
                  </div>

                  <div>
                    <div className="h-3 w-14 rounded bg-[#758695]" />
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="h-5 w-12 rounded bg-slate-100" />
                      <span className="h-5 w-16 rounded bg-slate-100" />
                      <span className="h-5 w-14 rounded bg-slate-100" />
                    </div>
                  </div>

                </div>

              </div>

              <p className="mt-3 text-center text-xs text-slate-500">
                Your resume preview will update as you enter your information.
              </p>

            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}

export default Builder;