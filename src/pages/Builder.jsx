import { useState } from "react";
import { ArrowLeft, Download, Eye, ImagePlus, Save, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const initialData = {
  title: "",
  fullName: "",
  jobTitle: "",
  email: "",
  phone: "",
  location: "",
  linkedin: "",
  portfolio: "",
  summary: "",
  image: "",
  education: {
    institution: "",
    degree: "",
    startYear: "",
    endYear: "",
  },
  experience: {
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  },
  skills: "",
  project: {
    name: "",
    description: "",
    technologies: "",
    link: "",
  },
  certification: {
    name: "",
    organization: "",
    year: "",
  },
  languages: "",
};

function Builder() {
  const [resume, setResume] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setResume((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNestedChange = (section, e) => {
    const { name, value } = e.target;

    setResume((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [name]: value,
      },
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setResume((prev) => ({
      ...prev,
      image: imageUrl,
    }));
  };

  const removeImage = () => {
    setResume((prev) => ({
      ...prev,
      image: "",
    }));
  };

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
            <button
              type="button"
              className="hidden items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:flex"
            >
              <Eye size={17} />
              Preview
            </button>

            <button
              type="button"
              className="flex items-center gap-2 rounded-lg bg-[#758695] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              <Save size={17} />
              Save
            </button>
          </div>

        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">

        <div className="mb-8">
          <p className="text-sm font-medium text-[#758695]">
            Resume Builder
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            Create your resume
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Add your information and build a professional resume.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* FORM */}
          <div className="space-y-6">

            {/* Resume Details */}
            <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#758695]/10">
              <h2 className="text-lg font-semibold text-slate-900">
                Resume Details
              </h2>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Resume Title
                </label>

                <input
                  name="title"
                  value={resume.title}
                  onChange={handleChange}
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
                Add the information you want employers to see.
              </p>

              {/* Image */}
              <div className="mt-6 flex items-center gap-5">

                <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-[#758695]/30 bg-[#F1ECDA]">

                  {resume.image ? (
                    <img
                      src={resume.image}
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <ImagePlus
                      size={28}
                      className="text-[#758695]"
                    />
                  )}

                </div>

                <div>
                  <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                    <ImagePlus size={16} />
                    Upload Photo

                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>

                  {resume.image && (
                    <button
                      type="button"
                      onClick={removeImage}
                      className="ml-2 text-sm text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  )}

                  <p className="mt-2 text-xs text-slate-400">
                    JPG or PNG. Optional.
                  </p>
                </div>

              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Full Name
                  </label>

                  <input
                    name="fullName"
                    value={resume.fullName}
                    onChange={handleChange}
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Professional Title
                  </label>

                  <input
                    name="jobTitle"
                    value={resume.jobTitle}
                    onChange={handleChange}
                    type="text"
                    placeholder="Frontend Developer"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email
                  </label>

                  <input
                    name="email"
                    value={resume.email}
                    onChange={handleChange}
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Phone
                  </label>

                  <input
                    name="phone"
                    value={resume.phone}
                    onChange={handleChange}
                    type="tel"
                    autoComplete="tel"
                    placeholder="+92 300 1234567"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Location
                  </label>

                  <input
                    name="location"
                    value={resume.location}
                    onChange={handleChange}
                    type="text"
                    autoComplete="address-level2"
                    placeholder="Karachi, Pakistan"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    LinkedIn
                  </label>

                  <input
                    name="linkedin"
                    value={resume.linkedin}
                    onChange={handleChange}
                    type="url"
                    placeholder="linkedin.com/in/yourname"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Portfolio / Website
                  </label>

                  <input
                    name="portfolio"
                    value={resume.portfolio}
                    onChange={handleChange}
                    type="url"
                    placeholder="yourportfolio.com"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

              </div>
            </section>

            {/* Summary */}
            <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#758695]/10">

              <h2 className="text-lg font-semibold text-slate-900">
                Professional Summary
              </h2>

              <textarea
                name="summary"
                value={resume.summary}
                onChange={handleChange}
                rows="5"
                placeholder="Write a short professional summary..."
                className="mt-5 w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
              />

            </section>

            {/* Experience */}
            <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#758695]/10">

              <h2 className="text-lg font-semibold text-slate-900">
                Work Experience
              </h2>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Job Title
                  </label>

                  <input
                    name="jobTitle"
                    value={resume.experience.jobTitle}
                    onChange={(e) =>
                      handleNestedChange("experience", e)
                    }
                    type="text"
                    placeholder="Frontend Developer"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Company
                  </label>

                  <input
                    name="company"
                    value={resume.experience.company}
                    onChange={(e) =>
                      handleNestedChange("experience", e)
                    }
                    type="text"
                    placeholder="Company name"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Start Date
                  </label>

                  <input
                    name="startDate"
                    value={resume.experience.startDate}
                    onChange={(e) =>
                      handleNestedChange("experience", e)
                    }
                    type="month"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    End Date
                  </label>

                  <input
                    name="endDate"
                    value={resume.experience.endDate}
                    onChange={(e) =>
                      handleNestedChange("experience", e)
                    }
                    type="month"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Description
                  </label>

                  <textarea
                    name="description"
                    value={resume.experience.description}
                    onChange={(e) =>
                      handleNestedChange("experience", e)
                    }
                    rows="4"
                    placeholder="Describe your responsibilities and achievements..."
                    className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

              </div>
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
                    name="institution"
                    value={resume.education.institution}
                    onChange={(e) =>
                      handleNestedChange("education", e)
                    }
                    type="text"
                    placeholder="University / College"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Degree
                  </label>

                  <input
                    name="degree"
                    value={resume.education.degree}
                    onChange={(e) =>
                      handleNestedChange("education", e)
                    }
                    type="text"
                    placeholder="Bachelor's in Computer Science"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Start Year
                  </label>

                  <input
                    name="startYear"
                    value={resume.education.startYear}
                    onChange={(e) =>
                      handleNestedChange("education", e)
                    }
                    type="text"
                    placeholder="2022"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    End Year
                  </label>

                  <input
                    name="endYear"
                    value={resume.education.endYear}
                    onChange={(e) =>
                      handleNestedChange("education", e)
                    }
                    type="text"
                    placeholder="2026"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
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
                Separate skills with commas.
              </p>

              <input
                name="skills"
                value={resume.skills}
                onChange={handleChange}
                type="text"
                placeholder="React, JavaScript, HTML, CSS, Git"
                className="mt-5 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
              />

            </section>

            {/* Project */}
            <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#758695]/10">

              <h2 className="text-lg font-semibold text-slate-900">
                Projects
              </h2>

              <div className="mt-5 space-y-5">

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Project Name
                  </label>

                  <input
                    name="name"
                    value={resume.project.name}
                    onChange={(e) =>
                      handleNestedChange("project", e)
                    }
                    type="text"
                    placeholder="Resume Builder App"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Technologies
                  </label>

                  <input
                    name="technologies"
                    value={resume.project.technologies}
                    onChange={(e) =>
                      handleNestedChange("project", e)
                    }
                    type="text"
                    placeholder="React, Tailwind CSS, MongoDB"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Project Link
                  </label>

                  <input
                    name="link"
                    value={resume.project.link}
                    onChange={(e) =>
                      handleNestedChange("project", e)
                    }
                    type="url"
                    placeholder="github.com/yourproject"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Description
                  </label>

                  <textarea
                    name="description"
                    value={resume.project.description}
                    onChange={(e) =>
                      handleNestedChange("project", e)
                    }
                    rows="4"
                    placeholder="Describe your project..."
                    className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

              </div>
            </section>

            {/* Certification */}
            <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#758695]/10">

              <h2 className="text-lg font-semibold text-slate-900">
                Certifications
              </h2>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Certification
                  </label>

                  <input
                    name="name"
                    value={resume.certification.name}
                    onChange={(e) =>
                      handleNestedChange("certification", e)
                    }
                    type="text"
                    placeholder="Certification name"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Organization
                  </label>

                  <input
                    name="organization"
                    value={resume.certification.organization}
                    onChange={(e) =>
                      handleNestedChange("certification", e)
                    }
                    type="text"
                    placeholder="Issuing organization"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Year
                  </label>

                  <input
                    name="year"
                    value={resume.certification.year}
                    onChange={(e) =>
                      handleNestedChange("certification", e)
                    }
                    type="text"
                    placeholder="2026"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
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
                name="languages"
                value={resume.languages}
                onChange={handleChange}
                type="text"
                placeholder="English, Urdu, Arabic"
                className="mt-5 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#758695]"
              />

            </section>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#758695] py-3 font-semibold text-white transition hover:opacity-90"
            >
              <Save size={18} />
              Save Resume
            </button>

          </div>

          {/* LIVE PREVIEW */}
          <aside className="hidden lg:block">
            <div className="sticky top-6">

              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-semibold text-slate-900">
                  Live Preview
                </h2>

                <button
                  type="button"
                  className="flex items-center gap-2 text-sm font-medium text-[#758695]"
                >
                  <Download size={16} />
                  Download
                </button>
              </div>

              <div className="min-h-[520px] overflow-hidden rounded-lg bg-white p-7 shadow-md">

                {/* Preview Header */}
                <div className="flex gap-4 border-b-2 border-[#758695] pb-4">

                  {resume.image && (
                    <img
                      src={resume.image}
                      alt="Profile"
                      className="h-16 w-16 shrink-0 rounded-full object-cover"
                    />
                  )}

                  <div className="min-w-0">
                    <h2 className="text-xl font-bold text-slate-900">
                      {resume.fullName || "Your Name"}
                    </h2>

                    <p className="mt-1 text-sm font-medium text-[#758695]">
                      {resume.jobTitle || "Professional Title"}
                    </p>

                    <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-[8px] text-slate-500">
                      {resume.email && <span>{resume.email}</span>}
                      {resume.phone && <span>{resume.phone}</span>}
                      {resume.location && <span>{resume.location}</span>}
                    </div>

                    <div className="mt-1 flex flex-wrap gap-2 text-[8px] text-[#758695]">
                      {resume.linkedin && <span>{resume.linkedin}</span>}
                      {resume.portfolio && <span>{resume.portfolio}</span>}
                    </div>
                  </div>

                </div>

                {/* Summary */}
                {resume.summary && (
                  <div className="mt-5">
                    <h3 className="text-[10px] font-bold uppercase tracking-wider text-[#758695]">
                      Profile
                    </h3>

                    <p className="mt-2 text-[9px] leading-4 text-slate-600">
                      {resume.summary}
                    </p>
                  </div>
                )}

                {/* Experience */}
                {(resume.experience.jobTitle ||
                  resume.experience.company ||
                  resume.experience.description) && (
                  <div className="mt-5">
                    <h3 className="text-[10px] font-bold uppercase tracking-wider text-[#758695]">
                      Experience
                    </h3>

                    <div className="mt-2">
                      <p className="text-[10px] font-semibold text-slate-800">
                        {resume.experience.jobTitle}
                      </p>

                      <p className="text-[9px] text-slate-500">
                        {resume.experience.company}
                      </p>

                      {(resume.experience.startDate ||
                        resume.experience.endDate) && (
                        <p className="text-[8px] text-slate-400">
                          {resume.experience.startDate}{" "}
                          {resume.experience.startDate &&
                            resume.experience.endDate &&
                            "—"}{" "}
                          {resume.experience.endDate}
                        </p>
                      )}

                      <p className="mt-1 text-[9px] leading-4 text-slate-600">
                        {resume.experience.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* Education */}
                {(resume.education.institution ||
                  resume.education.degree) && (
                  <div className="mt-5">
                    <h3 className="text-[10px] font-bold uppercase tracking-wider text-[#758695]">
                      Education
                    </h3>

                    <p className="mt-2 text-[10px] font-semibold text-slate-800">
                      {resume.education.degree}
                    </p>

                    <p className="text-[9px] text-slate-500">
                      {resume.education.institution}
                    </p>

                    {(resume.education.startYear ||
                      resume.education.endYear) && (
                      <p className="text-[8px] text-slate-400">
                        {resume.education.startYear}{" "}
                        {resume.education.startYear &&
                          resume.education.endYear &&
                          "—"}{" "}
                        {resume.education.endYear}
                      </p>
                    )}
                  </div>
                )}

                {/* Skills */}
                {resume.skills && (
                  <div className="mt-5">
                    <h3 className="text-[10px] font-bold uppercase tracking-wider text-[#758695]">
                      Skills
                    </h3>

                    <div className="mt-2 flex flex-wrap gap-1">
                      {resume.skills
                        .split(",")
                        .map((skill) => skill.trim())
                        .filter(Boolean)
                        .map((skill) => (
                          <span
                            key={skill}
                            className="rounded bg-slate-100 px-2 py-1 text-[8px] text-slate-600"
                          >
                            {skill}
                          </span>
                        ))}
                    </div>
                  </div>
                )}

                {/* Project */}
                {(resume.project.name ||
                  resume.project.description) && (
                  <div className="mt-5">
                    <h3 className="text-[10px] font-bold uppercase tracking-wider text-[#758695]">
                      Projects
                    </h3>

                    <p className="mt-2 text-[10px] font-semibold text-slate-800">
                      {resume.project.name}
                    </p>

                    {resume.project.technologies && (
                      <p className="text-[8px] text-[#758695]">
                        {resume.project.technologies}
                      </p>
                    )}

                    <p className="mt-1 text-[9px] leading-4 text-slate-600">
                      {resume.project.description}
                    </p>
                  </div>
                )}

                {/* Certification */}
                {resume.certification.name && (
                  <div className="mt-5">
                    <h3 className="text-[10px] font-bold uppercase tracking-wider text-[#758695]">
                      Certifications
                    </h3>

                    <p className="mt-2 text-[10px] font-semibold text-slate-800">
                      {resume.certification.name}
                    </p>

                    <p className="text-[8px] text-slate-500">
                      {resume.certification.organization}{" "}
                      {resume.certification.year &&
                        `• ${resume.certification.year}`}
                    </p>
                  </div>
                )}

                {/* Languages */}
                {resume.languages && (
                  <div className="mt-5">
                    <h3 className="text-[10px] font-bold uppercase tracking-wider text-[#758695]">
                      Languages
                    </h3>

                    <p className="mt-2 text-[9px] text-slate-600">
                      {resume.languages}
                    </p>
                  </div>
                )}

              </div>

              <p className="mt-3 text-center text-xs text-slate-500">
                Your resume updates as you type.
              </p>

            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}

export default Builder;