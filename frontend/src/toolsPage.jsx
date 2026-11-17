import "./App.css";
import { useNavigate } from "react-router-dom";

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

function BackIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M15 6l-6 6 6 6" />
    </svg>
  );
}

function ToolsPage({
  name = "Student",
  semester = "1st Sem · 2024",
  next = { time: "9:00 AM", subject: "Funda", type: "Lecture" },
}) {
  const navigate = useNavigate();

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-white px-5 pb-10 pt-10 font-sans text-[#1c2430] antialiased sm:max-w-lg sm:px-6 sm:pt-16">
      <header className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Back"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#e2e4e8] bg-white text-[#55606f] transition hover:border-[#1f3a5f] hover:text-[#1f3a5f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f3a5f]"
            onClick={() => {
              navigate("/");
            }}
          >
            <BackIcon />
          </button>
          <p className="text-sm font-medium text-[#55606f]">{semester}</p>
        </div>

        <button
          type="button"
          aria-label="Profile"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#e2e4e8] bg-white text-sm font-semibold transition hover:border-[#1f3a5f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f3a5f]"
        >
          {name[0]}
        </button>
      </header>

      <section
        aria-label="Quick note mode"
        className="relative mt-6 min-h-[180px] overflow-hidden rounded-lg sm:min-h-[200px]"
      >
        {/* DRAW: upper-left triangle */}
        <button
          type="button"
          className="absolute inset-0 flex items-start justify-start bg-[#1f3a5f] p-5 text-2xl font-semibold text-white transition hover:bg-[#274a78] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 calc(100% - 4px))" }}
        >
          Draw
        </button>

        {/* TYPE: lower-right triangle */}
        <button
          type="button"
          className="absolute inset-0 flex items-end justify-end bg-[#e8edf4] p-5 text-2xl font-semibold text-[#1f3a5f] transition hover:bg-[#dbe4f0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#1f3a5f]"
          style={{ clipPath: "polygon(100% 4px, 100% 100%, 0 100%)" }}
        >
          Type
        </button>
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

export default ToolsPage;
