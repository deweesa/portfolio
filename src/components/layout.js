import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./layout.module.css";
import Navbar from "./Navbar";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="m-auto">
      <title>Asa DeWeese | {pageTitle}</title>
      {/*<header className={siteTitle}>
        {data.site.siteMetadata.title} | is this the one
      </header>*/}
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
