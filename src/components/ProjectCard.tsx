import { Project } from "../data/projects";

const ProjectCard = ({
  project,
  large,
}: {
  project: Project;
  large?: boolean;
}) => {
  const domain = project.url.replace(/^https?:\/\//, "");
  return (
    <article className={`project ${large ? "project-large" : ""}`}>
      <div className="project-shot">
        <img
          src={`/img/work/${project.slug}.webp`}
          alt=""
          width="1200"
          height="750"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="project-body">
        <h3>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            {project.name}
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </h3>
        <p className="project-domain">
          <span className="live-dot" aria-hidden="true" />
          {domain}
        </p>
        {project.place && <p className="project-place">{project.place}</p>}
        <p>{project.summary}</p>
        <ul className="tags" aria-label="Built with">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};
export default ProjectCard;
