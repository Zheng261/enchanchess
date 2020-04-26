import React from "react";

import SEO from "../components/seo";
import Page from "../components/page";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Page hideHomeButton>
    <SEO title="404: Not found" />
    <h1>404</h1>
    <h2>We Can't Find This Page.</h2>
    <p style={{ marginBottom: "20px" }}>Sure you got the right address?</p>
    <Link style={{ fontWeight: 600 }} to="/">
      Back to Home
    </Link>
  </Page>
);

export default NotFoundPage;
