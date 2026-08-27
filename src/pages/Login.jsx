import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-[#F1ECDA] px-6 py-12">
      <div className="mx-auto flex min-h-[80vh] max-w-md items-center justify-center">
        <div className="w-full rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[#758695]/15 sm:p-10">

          <div className="text-center">
            <span className="text-2xl font-bold text-slate-900">
              Resume<span className="text-[#758695]">Builder</span>
            </span>

            <h1 className="mt-8 text-3xl font-bold text-slate-900">
              Welcome back
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Login to continue building your resumes.
            </p>
          </div>

          <form className="mt-8 space-y-5">

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#758695] focus:ring-2 focus:ring-[#758695]/10"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-medium text-slate-700">
                  Password
                </label>

                <button
                  type="button"
                  className="text-xs font-medium text-[#758695] hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#758695] focus:ring-2 focus:ring-[#758695]/10"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#758695] py-3 font-semibold text-white transition hover:opacity-90"
            >
              Login
            </button>

          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-[#758695] hover:underline"
            >
              Get Started
            </Link>
          </p>

          <Link
            to="/"
            className="mt-6 block text-center text-sm text-slate-400 hover:text-[#758695]"
          >
            ← Back to Home
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Login;