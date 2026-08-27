import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ResumeMockup from "../components/ResumeMockup";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Templates from "../components/Templates";

function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F1ECDA]">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
      <section className="px-6 py-16 sm:py-20">
  <div className="mx-auto flex min-h-[calc(100vh-145px)] max-w-7xl items-center justify-center">
    <div className="max-w-3xl text-center">

      <span className="inline-block rounded-full bg-[#758695]/15 px-4 py-2 text-sm font-medium text-[#758695]">
        Professional Resume Builder
      </span>

      <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
        Build a resume that
        <span className="block text-[#758695]">
          gets you noticed.
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        Create a professional resume in minutes with our simple and
        easy-to-use resume builder. Choose a template, add your details,
        and make your next opportunity count.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button className="rounded-lg bg-[#758695] px-7 py-3 font-semibold text-white transition duration-200 hover:opacity-90">
          Create My Resume
        </button>

        <button className="rounded-lg border border-[#758695]/40 bg-white px-7 py-3 font-semibold text-[#758695] transition duration-200 hover:bg-[#758695]/10">
          View Templates
        </button>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
        <span>✓ Easy to use</span>
        <span>✓ Professional templates</span>
        <span>✓ Download as PDF</span>
      </div>

    </div>
  </div>
</section>

        <Features />
        <HowItWorks />
        <Templates />

        {/* CTA */}
        <section className="bg-[#758695] px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to build your next resume?
            </h2>

            <p className="mt-4 text-white/80">
              Turn your experience into a professional resume that represents
              you at your best.
            </p>

            <button className="mt-8 rounded-lg bg-[#F1ECDA] px-7 py-3 font-semibold text-slate-900 transition hover:bg-white">
              Start Building
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;