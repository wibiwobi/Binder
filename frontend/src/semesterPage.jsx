import { useNavigate } from "react-router-dom";

const semesters = [
  { year: 2024, items: ["1st Sem", "2nd Sem"] },
  { year: 2023, items: ["1st Sem"] },
];

function ChevronIcon() {
  return (
    <svg
      className="h-5 w-5 text-[#55606f] transition group-hover:translate-x-0.5 group-hover:text-[#1f3a5f]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

function SemesterPage({ name = "Student" }) {
  const navigate = useNavigate();

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-white px-5 pb-10 pt-10 font-sans text-[#1c2430] antialiased sm:max-w-lg sm:px-6 sm:pt-16">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-[#55606f]">Welcome back</p>
          <h1 className="mt-1 text-3xl font-semibold leading-tight sm:text-4xl">
            Welcome, {name}
          </h1>
        </div>
        <button
          type="button"
          aria-label="Profile"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#e2e4e8] bg-white text-sm font-semibold transition hover:border-[#1f3a5f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f3a5f]"
        >
          {name[0]}
        </button>
      </header>

      {semesters.map(({ year, items }) => (
        <section key={year} className="mt-10" aria-labelledby={`year-${year}`}>
          <h2
            id={`year-${year}`}
            className="mb-3 text-right text-sm font-medium text-[#55606f]"
          >
            {year}
          </h2>
          <ul className="grid gap-3">
            {items.map((sem) => (
              <li key={sem}>
                <a
                  href={`#${year}-${sem.toLowerCase().replace(" ", "-")}`}
                  className="group flex min-h-[64px] items-center justify-between rounded-lg border border-[#e2e4e8] bg-white px-5 text-base font-medium transition hover:border-[#1f3a5f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f3a5f]"
                  onClick={() => {
                    navigate("/tools");
                  }}
                >
                  {sem}
                  <ChevronIcon />
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}

export default SemesterPage;
