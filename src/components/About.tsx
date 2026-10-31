const experience = [
  {
    role: "Project Manager, Software",
    org: "American Heritage Worldwide",
    dates: "Mar 2023 – Present",
    body: "I run the software team's daily scrum, manage developer tasks, report performance and metrics to the product owner, and extend our React and TypeScript projects.",
  },
  {
    role: "Web Developer",
    org: "Network Providers, Inc.",
    dates: "Jan 2023 – Present",
    body: "I build and maintain websites for clients with React, Next.js, TypeScript and WordPress.",
  },
  {
    role: "Network Administrator",
    org: "Network Providers, Inc.",
    dates: "Oct 2020 – May 2023",
    body: "I managed over 1,000 student and 200 faculty accounts and devices, plus the file servers, wireless access points, domains and DNS servers behind them.",
  },
];

const education = [
  {
    role: "Web Development Bootcamp",
    org: "University of Utah",
    dates: "Jun – Nov 2022",
    body: "Six months of JavaScript, React, MongoDB and MySQL. I finished second in a cohort of 80.",
  },
  {
    role: "High School Diploma",
    org: "American Heritage School",
    dates: "2016",
    body: "Graduated with honors.",
  },
];

const skills = [
  {
    group: "Web",
    items: ["React", "TypeScript", "JavaScript", "HTML & CSS", "Tailwind", "Vite", "Next.js", "Shopify", "WordPress", "Figma"],
  },
  {
    group: "Accessibility",
    items: ["ADA compliance", "WCAG 2.1 AA", "Accessibility audits", "Remediation"],
  },
  {
    group: "Infrastructure",
    items: ["DNS", "Networking", "VLANs", "VPNs", "OpenWrt", "Docker", "Self-hosting", "AWS"],
  },
  {
    group: "Leadership",
    items: ["Scrum", "Project management", "Client communication"],
  },
];

const Timeline = ({ items }: { items: typeof experience }) => (
  <ol className="timeline">
    {items.map((item) => (
      <li key={item.role + item.org}>
        <p className="timeline-dates">{item.dates}</p>
        <h4>{item.role}</h4>
        <p className="timeline-org">{item.org}</p>
        <p>{item.body}</p>
      </li>
    ))}
  </ol>
);

const About = () => {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about-grid">
          <div className="section-head about-intro">
            <p className="eyebrow">About me</p>
            <h2 id="about-title">From network closets to front-end code</h2>
            <p>
              I started out in IT, keeping school networks, servers and DNS
              running. In 2022 I took the University of Utah's web development
              bootcamp and found the work I love: building websites people
              actually enjoy using.
            </p>
            <p>
              Today I manage a software team at American Heritage Worldwide,
              build sites at Network Providers, and take on freelance projects
              for businesses across Idaho, Utah and beyond. That mix means I can
              talk to developers, business owners and IT staff in their own
              language.
            </p>
            <a className="text-link" href="https://www.linkedin.com/in/benjamin-bushman/" target="_blank" rel="noopener noreferrer">
              See my LinkedIn<span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </div>
          <div className="resume">
            <h3>Experience</h3>
            <Timeline items={experience} />
            <h3>Education</h3>
            <Timeline items={education} />
          </div>
        </div>

        <div className="skills">
          <h3>Skills</h3>
          <div className="skills-grid">
            {skills.map((s) => (
              <div key={s.group}>
                <h4>{s.group}</h4>
                <ul className="tags">
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
