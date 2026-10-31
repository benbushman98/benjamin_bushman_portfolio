import { projects } from "../data/projects";

const Hero = () => {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Web developer · Network administrator · Idaho</p>
          <h1 id="hero-title">
            I build websites for businesses, and I keep the servers behind them
            running.
          </h1>
          <p className="lead">
            I'm Benjamin Bushman. I design and build fast, accessible websites,
            from local shops in the Bear Lake Valley to companies across Utah
            and beyond. Before I wrote code, I ran networks, so I look after
            everything a site depends on too: hosting, DNS, email and security.
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
            <dt>Network admin since</dt>
            <dd>2020</dd>
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
