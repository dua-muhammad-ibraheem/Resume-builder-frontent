import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F1ECDA]">
      <Navbar />

      <main className="flex-1">
        <section className="mx-auto flex min-h-[calc(100vh-145px)] max-w-7xl items-center justify-center px-6 py-20">
          <div className="max-w-3xl text-center">
            <span className="mb-5 inline-block rounded-full bg-[#758695]/15 px-4 py-2 text-sm font-medium text-[#758695]">
              Professional Resume Builder
            </span>

            <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Build a resume that
              <span className="block text-[#758695]">
                gets you noticed.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Create a professional resume in minutes with our simple,
              powerful resume builder. Choose a template, add your
              experience, and make your next career move.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button className="rounded-lg bg-[#758695] px-6 py-3 font-semibold text-white transition hover:opacity-90">
                Create My Resume
              </button>

              <button className="rounded-lg border border-[#758695]/40 bg-white px-6 py-3 font-semibold text-[#758695] transition hover:bg-[#758695]/10">
                View Templates
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;