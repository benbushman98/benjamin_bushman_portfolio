const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Benjamin Bushman</p>
        <nav aria-label="Footer">
          <ul className="footer-links">
            <li><a href="/accessibility/">Accessibility</a></li>
            <li><a href="/privacy/">Privacy</a></li>
            <li><a href="/sitemap.xml">Sitemap</a></li>
            <li><a href="https://github.com/benbushman98" target="_blank" rel="noopener noreferrer">GitHub<span className="visually-hidden"> (opens in a new tab)</span></a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
export default Footer;
