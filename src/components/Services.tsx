const services = [
  {
    title: "Websites",
    body: "Custom sites designed around your business, built in React so they load fast and work on every phone. I write the pages to be found on Google and easy to update.",
  },
  {
    title: "Accessibility",
    body: "I audit sites against the ADA and WCAG 2.1 AA and fix what fails: contrast, keyboard use, screen reader labels, forms and media. Accessible sites reach more customers and carry less legal risk.",
  },
  {
    title: "Launch & setup",
    body: "I take care of the parts people forget: domains, DNS, SSL and business email, and I get your site running on a reliable hosting provider. When you need a change, you call me, not a support queue.",
  },
  {
    title: "IT & networking",
    body: "I've worked in IT since 2019, from the help desk to running a school network with over 1,000 student and 200 staff accounts. I set up office Wi-Fi, firewalls, VLANs and VPNs, and help you plan servers or cloud storage.",
  },
];

const Services = () => {
  return (
    <section className="section section-tint" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-head">
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Services;
