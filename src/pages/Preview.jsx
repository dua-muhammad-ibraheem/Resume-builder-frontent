import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Download, Edit3 } from "lucide-react";

function Preview() {
  const location = useLocation();
  const resume = location.state?.resume;
      
  
  if (!resume) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F1ECDA] px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            No Resume Found
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Please create your resume first.
          </p>

          <Link
            to="/builder"
            className="mt-5 inline-flex rounded-lg bg-[#758695] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Go to Builder
          </Link>
        </div>
      </div>
    );
  }

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#F1ECDA]">

      {/* Header */}
      <header className="border-b border-[#758695]/15 bg-white print:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

          <Link
            to="/builder"
            state={{ resume }}
            className="flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-[#758695]"
          >
            <ArrowLeft size={18} />
            Back to Builder
          </Link>

          <div className="text-xl font-bold text-slate-900">
            Resume<span className="text-[#758695]">Builder</span>
          </div>

          <div className="flex items-center gap-2">

            <Link
              to="/builder"
              state={{ resume }}
              className="hidden items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:flex"
            >
              <Edit3 size={16} />
              Edit
            </Link>

            <button
              type="button"
              onClick={handleDownload}
              className="flex items-center gap-2 rounded-lg bg-[#758695] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              <Download size={16} />
              Download
            </button>

          </div>
        </div>
      </header>

      {/* Resume */}
      <main className="px-4 py-8 sm:px-6">

        <div
          id="resume-preview"
          className="mx-auto min-h-[1123px] w-full max-w-[794px] bg-white px-8 py-10 shadow-md sm:px-12 sm:py-12 print:max-w-none print:shadow-none"
        >

          {/* Header */}
          <div className="flex gap-5 border-b-2 border-[#758695] pb-6">

            {resume.image && (
              <img
                src={resume.image}
                alt="Profile"
                className="h-24 w-24 shrink-0 rounded-full object-cover"
              />
            )}

            <div className="min-w-0">
              <h1 className="text-3xl font-bold text-slate-900">
                {resume.fullName || "Your Name"}
              </h1>

              <p className="mt-1 text-lg font-medium text-[#758695]">
                {resume.jobTitle || "Professional Title"}
              </p>

              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500">
                {resume.email && <span>{resume.email}</span>}
                {resume.phone && <span>{resume.phone}</span>}
                {resume.location && <span>{resume.location}</span>}
              </div>

              <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#758695]">
                {resume.linkedin && <span>{resume.linkedin}</span>}
                {resume.portfolio && <span>{resume.portfolio}</span>}
              </div>
            </div>
          </div>

          {/* Summary */}
          {resume.summary && (
            <section className="mt-7">
              <h2 className="border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wider text-[#758695]">
                Profile
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {resume.summary}
              </p>
            </section>
          )}

          {/* Experience */}
          {resume.experience?.some(
            (item) =>
              item.jobTitle ||
              item.company ||
              item.description
          ) && (
            <section className="mt-7">
              <h2 className="border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wider text-[#758695]">
                Experience
              </h2>

              <div className="mt-4 space-y-5">
                {resume.experience.map((item, index) => {

                  if (
                    !item.jobTitle &&
                    !item.company &&
                    !item.description
                  ) {
                    return null;
                  }

                  return (
                    <div key={index}>
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="text-sm font-bold text-slate-800">
                            {item.jobTitle}
                          </h3>

                          <p className="text-sm text-slate-500">
                            {item.company}
                          </p>
                        </div>

                        {(item.startDate || item.endDate) && (
                          <p className="text-xs text-slate-400">
                            {item.startDate}

                            {item.startDate &&
                              item.endDate &&
                              " — "}

                            {item.endDate}
                          </p>
                        )}
                      </div>

                      {item.description && (
                        <p className="mt-2 text-sm leading-5 text-slate-600">
                          {item.description}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Education */}
          {resume.education?.some(
            (item) =>
              item.institution ||
              item.degree ||
              item.startYear ||
              item.endYear
          ) && (
            <section className="mt-7">
              <h2 className="border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wider text-[#758695]">
                Education
              </h2>

              <div className="mt-4 space-y-4">
                {resume.education.map((item, index) => {

                  if (
                    !item.institution &&
                    !item.degree &&
                    !item.startYear &&
                    !item.endYear
                  ) {
                    return null;
                  }

                  return (
                    <div key={index}>
                      <h3 className="text-sm font-bold text-slate-800">
                        {item.degree}
                      </h3>

                      <p className="text-sm text-slate-500">
                        {item.institution}
                      </p>

                      {(item.startYear || item.endYear) && (
                        <p className="text-xs text-slate-400">
                          {item.startYear}

                          {item.startYear &&
                            item.endYear &&
                            " — "}

                          {item.endYear}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Skills */}
          {resume.skills && (
            <section className="mt-7">
              <h2 className="border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wider text-[#758695]">
                Skills
              </h2>

              <div className="mt-3 flex flex-wrap gap-2">
                {resume.skills
                  .split(",")
                  .map((skill) => skill.trim())
                  .filter(Boolean)
                  .map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-slate-100 px-3 py-1.5 text-xs text-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {resume.project?.name && (
            <section className="mt-7">
              <h2 className="border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wider text-[#758695]">
                Projects
              </h2>

              <div className="mt-4">
                <h3 className="text-sm font-bold text-slate-800">
                  {resume.project.name}
                </h3>

                {resume.project.technologies && (
                  <p className="mt-1 text-xs font-medium text-[#758695]">
                    {resume.project.technologies}
                  </p>
                )}

                {resume.project.description && (
                  <p className="mt-2 text-sm leading-5 text-slate-600">
                    {resume.project.description}
                  </p>
                )}

                {resume.project.link && (
                  <p className="mt-1 text-xs text-slate-400">
                    {resume.project.link}
                  </p>
                )}
              </div>
            </section>
          )}

          {/* Certifications */}
          {resume.certification?.name && (
            <section className="mt-7">
              <h2 className="border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wider text-[#758695]">
                Certifications
              </h2>

              <div className="mt-4">
                <h3 className="text-sm font-bold text-slate-800">
                  {resume.certification.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {resume.certification.organization}
                </p>

                {resume.certification.year && (
                  <p className="text-xs text-slate-400">
                    {resume.certification.year}
                  </p>
                )}
              </div>
            </section>
          )}

          {/* Languages */}
          {resume.languages && (
            <section className="mt-7">
              <h2 className="border-b border-slate-200 pb-2 text-sm font-bold uppercase tracking-wider text-[#758695]">
                Languages
              </h2>

              <p className="mt-3 text-sm text-slate-600">
                {resume.languages}
              </p>
            </section>
          )}

        </div>

        <p className="mx-auto mt-4 max-w-[794px] text-center text-xs text-slate-400 print:hidden">
          Use your browser's print dialog and choose "Save as PDF" to download your resume.
        </p>

      </main>
    </div>
  );
}

export default Preview;