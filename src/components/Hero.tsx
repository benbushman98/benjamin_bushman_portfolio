import { projects } from "../data/projects";

const Hero = () => {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Software developer · IT background · Idaho</p>
          <h1 id="hero-title">
            I build websites that are fast, accessible and set up right.
          </h1>
          <p className="lead">
            I'm Benjamin Bushman. I design and build websites for local shops in
            the Bear Lake Valley and companies across Utah and beyond. Before I
            wrote code, I ran networks, so I also handle the setup most
            developers hand off: domains, DNS, business email, and hosting with
            a provider you can trust.
          </p>
          <div className="hero-actions">
            <a className="button" href="#work">
              See my work
            </a>
            <a className="button button-quiet" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
        <figure className="hero-photo">
          <img
            src="/img/benjamin-bushman.webp"
            alt="Benjamin Bushman standing in a green field"
            width="500"
            height="500"
          />
        </figure>
      </div>
      <div className="container">
        <dl className="facts">
          <div>
            <dt>Live sites</dt>
            <dd>{projects.length}</dd>
          </div>
          <div>
            <dt>Accessibility</dt>
            <dd>ADA &amp; WCAG</dd>
          </div>
          <div>
            <dt>Working in IT since</dt>
            <dd>2019</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>React &amp; TypeScript</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};
export default Hero;
