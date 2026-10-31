const experience = [
  {
    role: "Software Developer",
    org: "American Heritage Worldwide",
    dates: "Mar 2023 – Present · Remote",
    body: "I build and extend the organization's React and TypeScript projects.",
  },
  {
    role: "Project Manager",
    org: "American Heritage Worldwide",
    dates: "May 2024 – Aug 2026",
    body: "I ran the software team's daily scrum, managed developer tasks, and reported performance and metrics to the product owner.",
  },
  {
    role: "Full Stack Developer",
    org: "Network Providers, Inc.",
    dates: "Feb 2023 – Present · Part-time",
    body: "I build custom websites and their back ends for the company's clients with React and Node.js.",
  },
  {
    role: "Instructional Staff, Coding Bootcamp",
    org: "University of Utah Professional Education",
    dates: "Dec 2022 – Mar 2024",
    body: "After finishing the bootcamp, I stayed on to help new students through the curriculum: APIs and JSON, CSS and Bootstrap, the command line, databases, React and Git.",
  },
  {
    role: "Network Administrator",
    org: "Network Providers, Inc.",
    dates: "Apr 2021 – May 2023",
    body: "On-site at American Heritage School, a Network Providers client. I managed over 1,000 student and 200 faculty accounts and devices, plus the file servers, wireless access points, domains and DNS servers behind them.",
  },
  {
    role: "Help Desk Technician",
    org: "Network Providers, Inc.",
    dates: "Oct 2020 – Apr 2021",
    body: "I supported more than 50 business clients on the help desk.",
  },
  {
    role: "Help Desk Support",
    org: "SB Tech Guys",
    dates: "Oct 2019 – Oct 2022 · Part-time",
    body: "I troubleshot hardware and software problems for remote clients.",
  },
  {
    role: "Computer Technician",
    org: "TAMS Computer Recycling and Sales",
    dates: "Jul 2019 – Oct 2020",
    body: "I worked on the desktop team, handling computers that clients sent in.",
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
    body: "React, TypeScript and Node.js every day, plus Next.js, Vite, Tailwind, Shopify, WordPress, Git and Figma.",
  },
  {
    group: "Accessibility",
    body: "ADA and WCAG 2.1 AA audits and fixes, for new builds and existing sites.",
  },
  {
    group: "Infrastructure",
    body: "DNS, networking, VLANs, VPNs, OpenWrt, Docker, self-hosting and AWS, built on years of help desk and hardware work.",
  },
  {
    group: "Leadership",
    body: "Scrum and agile, project management, teaching, and working directly with clients.",
  },
];

const Timeline = ({ items }: { items: typeof experience }) => (
  <ol className="timeline">
    {items.map((item) => (
      <li key={item.role + item.org}>
        <h4>{item.role}</h4>
        <p className="timeline-org">
          {item.org}
          <span className="timeline-dates"> · {item.dates}</span>
        </p>
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
            <h2 id="about-title">From network closets to front-end code</h2>
            <p>
              I started in IT in 2019, fixing computers and working help desks,
              and went on to run the network for American Heritage School. In
              2022 I took the University of Utah's web development bootcamp and
              found the work I love: building websites people actually enjoy
              using. I liked it enough to stay on as instructional staff for
              the next class.
            </p>
            <p>
              Today I'm a software developer at American Heritage Worldwide,
              where I also spent two years as the software team's project
              manager. I build client sites part-time at Network Providers and
              take on freelance projects for businesses across Idaho, Utah and
              beyond. That mix means I can talk to developers, business owners
              and IT staff in their own language.
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
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
