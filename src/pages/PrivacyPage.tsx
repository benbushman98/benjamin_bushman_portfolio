import Page from "../components/Page";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const NewTab = () => <span className="visually-hidden"> (opens in a new tab)</span>;

const PrivacyPage = () => (
  <Page title="Privacy policy" updated="October 31, 2026">
    <p className="doc-lead">
      This is my personal portfolio site. It has no accounts, no advertising
      and no analytics, and it doesn't use cookies of its own to track you. Here
      is everything it does collect, and why.
    </p>

    <h2>Who I am</h2>
    <p>
      This site is run by Benjamin Bushman. You can reach me at{" "}
      <a href="mailto:info@benjaminbushman.com">info@benjaminbushman.com</a> or{" "}
      <a href="tel:+18013721410">801-372-1410</a>.
    </p>

    <h2>The contact form</h2>
    <p>
      When you send a message, the form sends your name, email address and
      message to my inbox through a service called{" "}
      <a href="https://www.emailjs.com/legal/privacy-policy/" {...ext}>EmailJS<NewTab /></a>.
      I use what you send only to reply to you. I don't sell it, share it or add
      you to a mailing list.
    </p>

    <h2>Google reCAPTCHA</h2>
    <p>
      The contact form is protected by Google reCAPTCHA to stop spam. To tell
      people from bots, reCAPTCHA collects information such as your IP address
      and details about your browser and device, and it may set cookies. It
      also loads its own scripts and fonts from Google's servers. That
      information goes to Google and is covered by the{" "}
      <a href="https://policies.google.com/privacy" {...ext}>Google Privacy Policy<NewTab /></a>{" "}
      and{" "}
      <a href="https://policies.google.com/terms" {...ext}>Terms of Service<NewTab /></a>.
      reCAPTCHA loads only on the home page, where the form is.
    </p>

    <h2>Hosting</h2>
    <p>
      This site is hosted on GitHub Pages. Like most web hosts, GitHub may log
      visitors' IP addresses to keep the service secure. See the{" "}
      <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" {...ext}>GitHub Privacy Statement<NewTab /></a>.
    </p>

    <h2>Fonts and other files</h2>
    <p>
      This site's own fonts, images and code are served from this site, and it
      doesn't use any analytics or advertising services. The accessibility,
      privacy and error pages load nothing from other companies at all.
    </p>

    <h2>Links to other sites</h2>
    <p>
      The portfolio links to sites I built for clients. Once you follow a link,
      that site's own privacy policy applies.
    </p>

    <h2>Children</h2>
    <p>This site isn't directed at children under 13, and I don't knowingly collect their information.</p>

    <h2>Your choices</h2>
    <p>
      If you've sent me a message and want it deleted, email{" "}
      <a href="mailto:info@benjaminbushman.com">info@benjaminbushman.com</a> and
      I'll remove it.
    </p>

    <h2>Changes</h2>
    <p>If this policy changes, I'll update it here and change the date at the top.</p>
  </Page>
);
export default PrivacyPage;
