import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="flex min-h-[calc(100vh-149px)] items-center justify-center bg-white px-6 pb-20 pt-6 sm:px-8 sm:pb-20 sm:pt-8 lg:px-6">
      <section className="w-full">
        <div className="mx-auto flex max-w-300 flex-col items-center justify-between gap-16 lg:flex-row">
          <div className="w-full max-w-140">
            <p className="text-xs font-semibold tracking-[0.08em] text-[#4F46E5]">
              INTERACTIVE CSS PLAYGROUND
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[#18181B] sm:text-5xl lg:text-6xl">
              Build layouts.
              <br />
              Understand CSS.
            </h1>

            <p className="mt-6 max-w-130 text-base leading-7 text-[#71717A] sm:text-lg">
              Experiment with Flexbox and Grid, see your changes instantly, and
              generate CSS you can actually use.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/playground"
                className="flex h-12 items-center justify-center rounded-lg bg-[#4F46E5] px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#4338CA]"
              >
                Open Playground
              </Link>

              <a
                href="https://github.com/sohelkhan-07/devconnect-css-layout-playground"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center rounded-lg border border-[#E4E4E7] bg-white px-5 text-sm font-semibold text-[#18181B] transition-colors duration-200 hover:bg-[#F4F4F5]"
              >
                View on GitHub
              </a>
            </div>
          </div>

          <div className="w-full max-w-125 rounded-xl border border-[#E4E4E7] bg-[#F7F7F5] p-4">
            <div className="overflow-hidden rounded-lg border border-[#E4E4E7] bg-white">
              <div className="flex h-12 items-center justify-between border-b border-[#E4E4E7] px-4">
                <div className="h-2.5 w-20 rounded bg-[#18181B]" />

                <div className="flex gap-2">
                  <div className="h-2 w-8 rounded bg-[#E4E4E7]" />
                  <div className="h-2 w-8 rounded bg-[#E4E4E7]" />
                </div>
              </div>

              <div className="grid min-h-70 grid-cols-[90px_1fr] sm:grid-cols-[110px_1fr]">
                <div className="border-r border-[#E4E4E7] bg-[#FAFAFA] p-3 sm:p-4">
                  <div className="h-2 w-12 rounded bg-[#A1A1AA]" />

                  <div className="mt-5 space-y-3">
                    <div className="h-8 rounded border border-[#E4E4E7] bg-white" />
                    <div className="h-8 rounded border border-[#E4E4E7] bg-white" />
                    <div className="h-8 rounded border border-[#E4E4E7] bg-white" />
                  </div>
                </div>

                <div className="flex items-center justify-center bg-[#F4F4F5] p-4 sm:p-8">
                  <div className="grid w-full max-w-65 grid-cols-2 gap-2 rounded-lg border border-dashed border-[#A1A1AA] p-3 sm:grid-cols-3 sm:gap-3 sm:p-5">
                    <div className="flex h-12 items-center justify-center rounded-md bg-[#4F46E5] text-sm font-semibold text-white sm:h-14">
                      1
                    </div>

                    <div className="flex h-12 items-center justify-center rounded-md bg-[#4F46E5] text-sm font-semibold text-white sm:h-14">
                      2
                    </div>

                    <div className="flex h-12 items-center justify-center rounded-md bg-[#4F46E5] text-sm font-semibold text-white sm:h-14">
                      3
                    </div>

                    <div className="flex h-12 items-center justify-center rounded-md bg-[#4F46E5] text-sm font-semibold text-white sm:h-14">
                      4
                    </div>

                    <div className="flex h-12 items-center justify-center rounded-md bg-[#4F46E5] text-sm font-semibold text-white sm:h-14">
                      5
                    </div>

                    <div className="flex h-12 items-center justify-center rounded-md bg-[#4F46E5] text-sm font-semibold text-white sm:h-14">
                      6
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
