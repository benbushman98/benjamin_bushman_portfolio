const services = [
  { name: "Plex", role: "Media server", body: "Streams my media library to the TVs, phones and computers in the house." },
  { name: "Nextcloud", role: "Private cloud", body: "File sync and sharing I host myself, so files live on hardware I control." },
  { name: "Docker", role: "Containers", body: "Services run in containers, which keeps updates and rebuilds quick and clean." },
  { name: "OpenWrt", role: "Router", body: "Open-source router firmware that gives full control of routing, firewall and Wi-Fi." },
  { name: "VLANs", role: "Segmentation", body: "Splits one network into separate segments, so devices only reach what they need to." },
  { name: "VPN", role: "Remote access", body: "Encrypted access back to the home network from anywhere." },
];

const HomeLab = () => {
  return (
    <section className="section section-tint" id="homelab" aria-labelledby="homelab-title">
      <div className="container homelab-grid">
        <div className="section-head">
          <p className="eyebrow">After hours</p>
          <h2 id="homelab-title">My home lab</h2>
          <p>
            I run my own servers at home. It's where I try new tools before
            they go anywhere near a client, and it's why I'm comfortable with
            what happens after a site ships: servers, DNS, certificates and
            security.
          </p>
        </div>
        <ul className="lab">
          {services.map((s) => (
            <li key={s.name}>
              <p className="lab-role">{s.role}</p>
              <h3>{s.name}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default HomeLab;
