import Page from "../components/Page";

const AccessibilityPage = () => (
  <Page eyebrow="Accessibility" title="Accessibility statement" updated="October 31, 2026">
    <p className="doc-lead">
      I help businesses make their websites work for everyone, so I hold my own
      site to the same standard. This site is designed to meet the Web Content
      Accessibility Guidelines (WCAG) 2.2 at Level AA.
    </p>

    <h2>What I've done</h2>
    <ul>
      <li>Every page uses proper headings, landmarks and lists, so screen readers can move through it easily.</li>
      <li>Everything works with a keyboard alone, with a visible focus outline and a “Skip to content” link at the top of each page.</li>
      <li>Text and controls meet WCAG AA color contrast.</li>
      <li>The layout reflows down to a 320 pixel wide screen and holds up when text is enlarged to 200%.</li>
      <li>Images have text alternatives. Screenshots that repeat a project's name next to them are marked as decorative.</li>
      <li>Every form field has a visible label, and form errors and confirmations are announced to screen readers.</li>
      <li>Links that open in a new tab say so to screen readers.</li>
      <li>Animation is minimal and turns off if your device asks for reduced motion.</li>
    </ul>

    <h2>How it's tested</h2>
    <p>
      Every page on this site has been checked with the axe automated
      accessibility tester and tested by hand with a keyboard, at desktop and
      phone sizes.
    </p>

    <h2>Known limitations</h2>
    <ul>
      <li>
        The contact form uses Google reCAPTCHA to block spam. reCAPTCHA is a
        third-party tool I don't control, and its image challenges can be hard
        to complete for some people. If it gets in your way, please email{" "}
        <a href="mailto:info@benjaminbushman.com">info@benjaminbushman.com</a>{" "}
        or call <a href="tel:+18013721410">801-372-1410</a> instead.
      </li>
      <li>
        The portfolio links to websites I built for clients. Those sites are
        owned and maintained by each client, and this statement covers this
        site only.
      </li>
    </ul>

    <h2>Tell me about a problem</h2>
    <p>
      If anything on this site is hard to use, I want to know. Email{" "}
      <a href="mailto:info@benjaminbushman.com">info@benjaminbushman.com</a> or
      call <a href="tel:+18013721410">801-372-1410</a>. Tell me the page, what
      you were trying to do, and the device or assistive technology you use,
      and I'll work to fix it.
    </p>
  </Page>
);
export default AccessibilityPage;
