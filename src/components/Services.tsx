const services = [
  {
    title: "Websites",
    body: "Custom sites designed around your business, built in React so they load fast and work on every phone. I write the pages to be found on Google and easy to update.",
    points: ["Design and build", "Mobile first", "Search basics"],
  },
  {
    title: "Accessibility",
    body: "I audit sites against the ADA and WCAG 2.1 AA and fix what fails: contrast, keyboard use, screen reader labels, forms and media. Accessible sites reach more customers and carry less legal risk.",
    points: ["ADA audits", "WCAG fixes", "Existing sites too"],
  },
  {
    title: "Hosting & care",
    body: "I set up and look after the parts people forget: domains, DNS, SSL, business email and backups. When something breaks, you call me, not a support queue.",
    points: ["Domains and DNS", "Business email", "Updates"],
  },
  {
    title: "IT & networking",
    body: "I've managed networks since 2020, including one with over 1,000 student and 200 staff accounts. I set up office Wi-Fi, firewalls, VLANs and VPNs, and help you plan servers or cloud storage.",
    points: ["Wi-Fi and firewalls", "VLANs and VPNs", "Servers"],
  },
];

const Services = () => {
  return (
    <section className="section section-tint" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">For businesses</p>
          <h2 id="services-title">What I can do for you</h2>
          <p>
            Most clients come to me for a website. They stay because I can handle
            the rest of it, too.
          </p>
        </div>
        <ul className="services">
          {services.map((service) => (
            <li className="service" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
              <ul className="service-points">
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Services;
