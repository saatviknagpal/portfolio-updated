import { education, profile, projects, recognition, work } from "@/data/site";

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.12em] text-muted">{children}</h2>
  );
}

function Chevron() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className="size-3.5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-90"
    >
      <path d="M6 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24">
      <header className="flex items-baseline justify-between">
        <span className="font-medium">{profile.name}</span>
        <a href={profile.resume} {...ext} className="link font-mono text-sm text-muted">
          Resume ↗
        </a>
      </header>

      <section className="mt-16 sm:mt-24">
        <p className="text-2xl leading-snug font-medium tracking-tight sm:text-[1.75rem]">
          Hi, I&apos;m Saatvik. I&apos;m a full-stack engineer. I build AI agents, and the evals that
          tell me whether they work.
        </p>
        <p className="mt-5 leading-relaxed text-muted">
          At Mercor I built eval tooling for model benchmarks, from the backend pipelines to the
          dashboards people used every day. On my own I build agents, like a dental front desk that
          books real appointments, and I write evals for them before I trust them. I live in{" "}
          {profile.location}. Outside of work I&apos;m usually cooking
          something I haven&apos;t made before, or playing table tennis.
        </p>
        <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm">
          <a className="link" href={`mailto:${profile.email}`}>Email</a>
          <a className="link" href={profile.github} {...ext}>GitHub</a>
          <a className="link" href={profile.linkedin} {...ext}>LinkedIn</a>
        </nav>
      </section>

      <section className="mt-20 sm:mt-24">
        <Heading>Selected work</Heading>
        <ul className="border-t border-border">
          {projects.map((p) => (
            <li key={p.title} className="border-b border-border">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-start gap-3 py-4">
                  <span className="mt-1.5"><Chevron /></span>
                  <span className="flex-1">
                    <span className="flex items-baseline justify-between gap-4">
                      <span className="font-medium">{p.title}</span>
                      <span className="font-mono text-xs text-muted">{p.year}</span>
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">{p.hook}</span>
                  </span>
                </summary>
                <div className="pb-5 pl-[1.625rem] text-sm leading-relaxed">
                  <p>{p.details}</p>
                  <p className="mt-3 font-mono text-xs text-muted">{p.stack}</p>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} {...ext} className="link">
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </details>
            </li>
          ))}
        </ul>
        <a href={profile.github} {...ext} className="link mt-4 inline-block font-mono text-sm text-muted">
          More on GitHub →
        </a>
      </section>

      <section className="mt-20 sm:mt-24">
        <Heading>Work</Heading>
        <ul className="border-t border-border">
          {work.map((j, i) => (
            <li key={j.company} className="border-b border-border">
              <details className="group" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-start gap-3 py-4">
                  <span className="mt-1.5"><Chevron /></span>
                  <span className="flex flex-1 flex-wrap items-baseline justify-between gap-x-4">
                    <span>
                      <span className="font-medium">{j.company}</span>
                      <span className="text-muted"> · {j.role}</span>
                    </span>
                    <span className="font-mono text-xs text-muted">{j.years}</span>
                  </span>
                </summary>
                <ul className="space-y-2 pb-5 pl-[1.625rem] text-sm leading-relaxed">
                  {j.bullets.map((b) => (
                    <li key={b} className="relative pl-4 before:absolute before:left-0 before:text-muted before:content-['–']">
                      {b}
                    </li>
                  ))}
                </ul>
                {j.links && (
                  <div className="-mt-2 flex flex-wrap gap-x-4 pb-5 pl-[1.625rem] font-mono text-xs">
                    {j.links.map((l) => (
                      <a key={l.href} href={l.href} {...ext} className="link">
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </details>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20 grid gap-12 sm:mt-24 sm:grid-cols-2">
        <div>
          <Heading>Education</Heading>
          <ul className="space-y-3 text-sm">
            {education.map((e) => (
              <li key={e.school}>
                <div className="flex justify-between gap-4">
                  <span className="font-medium">{e.school}</span>
                  <span className="font-mono text-xs text-muted">{e.years}</span>
                </div>
                <div className="text-muted">{e.detail}</div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Heading>Recognition</Heading>
          <ul className="space-y-3 text-sm">
            {recognition.map((r) => (
              <li key={r.what}>
                <div className="flex justify-between gap-4">
                  <span className="font-medium">{r.what}</span>
                  <span className="font-mono text-xs text-muted">{r.years}</span>
                </div>
                <div className="text-muted">{r.where}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="mt-24 flex flex-wrap justify-between gap-4 border-t border-border pt-6 font-mono text-xs text-muted">
        <span>{profile.name} · {profile.location}</span>
        <a className="link" href={`mailto:${profile.email}`}>{profile.email}</a>
      </footer>
    </main>
  );
}
