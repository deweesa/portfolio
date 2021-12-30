import * as React from "react";
import { Link } from "gatsby";

export default function Navbar() {
  const navLinkItem = "px-6";
  const activeStyle = { color: "red" };
  const navTabs = [
    { name: "Home", endpoint: "/" },
    { name: "About", endpoint: "/about" },
    { name: "Blog", endpoint: "/blog" },
  ];

  return (
    <nav>
      <ul className="flex flex-row justify-end my-3">
        {navTabs.map((tabInfo) => {
          return (
            <li>
              <Link
                to={tabInfo.endpoint}
                activeStyle={activeStyle}
                className={navLinkItem}
              >
                {tabInfo.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
  /*return (
    <nav>
      <ul className="flex flex-row justify-end my-3">
        <li>
          <Link to="/" activeStyle={activeStyle} className={navLinkItem}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={navLinkItem}>
            About
          </Link>
        </li>
        <li>
          <Link to="/blog" className={navLinkItem}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );*/
}
