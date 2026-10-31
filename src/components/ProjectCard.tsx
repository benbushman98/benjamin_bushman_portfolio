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
      <img
        className="project-shot"
        src={`/img/work/${project.slug}.webp`}
        alt=""
        width="1200"
        height="750"
        loading="lazy"
        decoding="async"
      />
      <h3>
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          {project.name}
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
      </h3>
      <p className="project-domain">{domain}</p>
      <p>{project.summary}</p>
    </article>
  );
};
export default ProjectCard;
