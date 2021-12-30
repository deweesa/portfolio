import * as React from "react";
import { Link } from "gatsby";

export default function Navbar() {
  const navLinkItem = "px-6";

  return (
    <nav>
      <ul className="flex flex-row justify-end mb-3 bg-red-900">
        <li>
          <Link to="/" className={navLinkItem}>
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
  );
}
