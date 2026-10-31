import { useState } from "react";
import { Category, categoryLabels, projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

type Filter = Category | "all";

const filters: Filter[] = ["all", "local", "company", "app", "group"];

const Work = () => {
  const [filter, setFilter] = useState<Filter>("all");
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter(
    (p) => !p.featured && (filter === "all" || p.category === filter)
  );

  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="section-head">
          <h2 id="work-title">Sites I've designed and built</h2>
          <p>
            Every site here is live, and every one was built by me. Click any of
            them to see it in action.
          </p>
        </div>

        <div className="featured-grid">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} large />
          ))}
        </div>

        <div className="more-head">
          <h3 className="more-title">More projects</h3>
          <div className="filters" role="group" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f}
                className="filter"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {f === "all" ? "All" : categoryLabels[f]}
              </button>
            ))}
          </div>
        </div>
        <p className="visually-hidden" aria-live="polite">
          Showing {rest.length} projects
        </p>
        <div className="project-grid">
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Work;
