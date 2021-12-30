import * as React from "react";
import { Link } from "gatsby";

export default function Navbar() {
  const navLinkItem = "px-6 font-weight";
  const activeStyle = {
    /*color: "red"*/
  };

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
                className="px-6 font-medium"
              >
                {tabInfo.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
