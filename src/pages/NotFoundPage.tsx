import Page from "../components/Page";

const NotFoundPage = () => (
  <Page eyebrow="Error 404" title="That page isn't here">
    <p className="doc-lead">
      The link may be old, or the address may have a typo. Everything on this
      site is a click away from the home page.
    </p>
    <p>
      <a className="button" href="/">Go to the home page</a>
    </p>
  </Page>
);
export default NotFoundPage;
