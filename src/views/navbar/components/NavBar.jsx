import React from "react";
import { locales } from "../../lib/locales";
import "./styles.css";

const NavBar = () => {
  const language = locales["NAVBAR"];
  return (
    <nav className="navbar">
      <ul className="navbar__ul">
        <li className="navbar__item">
          <a
            className="navbar__anchor-tag"
            data-qa="navbar-home-link"
            href={language.HOME.URL}
          >
            {language.HOME.TEXT}
          </a>
        </li>

        <li className="navbar__item">
          <a
            className="navbar__anchor-tag"
            data-qa="navbar-comments-link"
            href={language.COMMENTS.URL}
          >
            {language.COMMENTS.TEXT}
          </a>
        </li>

        <li className="navbar__item">
          <a
            data-qa="navbar-github-link"
            className="navbar__anchor-tag"
            href={language.GITHUB_REPO.URL}
            target="_blank"
          >
            {language.GITHUB_REPO.TEXT}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
