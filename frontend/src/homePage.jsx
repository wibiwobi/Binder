import "./App.css";

const links = [
  { label: "Saved Quicknotes", href: "#quicknotes" },
  { label: "Central", href: "#central" },
  { label: "Calendar", href: "#calendar" },
  { label: "Subjects", href: "#subjects" },
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

export default function Dashboard({
  name = "Student",
  semester = "1st Sem · 2024",
  next = { time: "9:00 AM", subject: "Funda", type: "Lecture" },
}) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-white px-5 pb-10 pt-10 font-sans text-[#1c2430] antialiased sm:max-w-lg sm:px-6 sm:pt-16">
      <header className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium text-[#55606f]">{semester}</p>
        <button
          type="button"
          aria-label="Profile"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#e2e4e8] bg-white text-sm font-semibold transition hover:border-[#1f3a5f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f3a5f]"
        >
          {name[0]}
        </button>
      </header>

      <section
        aria-label="Up next"
        className="mt-6 flex min-h-[180px] flex-col justify-between rounded-lg bg-[#1f3a5f] p-5 text-white sm:min-h-[200px]"
      >
        <div>
          <p className="text-xs font-semibold tracking-widest">UP NEXT</p>
          <p className="mt-2 text-3xl font-semibold leading-tight">
            {next.subject}
          </p>
        </div>
        <div className="flex items-end justify-between text-base">
          <span className="font-medium">{next.time}</span>
          <span>{next.type}</span>
        </div>
      </section>

      <hr className="my-6 border-[#e2e4e8]" />

      <nav aria-label="Sections">
        <ul className="grid gap-3">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="group flex min-h-[64px] items-center justify-between rounded-lg border border-[#e2e4e8] bg-white px-5 text-base font-medium transition hover:border-[#1f3a5f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f3a5f]"
              >
                {label}
                <ChevronIcon />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
