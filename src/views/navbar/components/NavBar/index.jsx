import React from "react";
import NavigationList from "../NavigationList";
import NavigationItem from "../NavigationItem";
import { locales } from "../../../lib/locales";

const NavBar = () => {
  const language = locales["NAVBAR"];
  return (
    <NavigationList>
      <NavigationItem href={language.HOME.URL} dataTestId="navbar-link-home">
        {language.HOME.TEXT}
      </NavigationItem>
      <NavigationItem
        href={language.COMMENTS.URL}
        dataTestId="navbar-link-comments"
      >
        {language.COMMENTS.TEXT}
      </NavigationItem>
      <NavigationItem
        href={language.GITHUB_REPO.URL}
        dataTestId="navbar-link-github"
        target="_blank"
        isNoReferrer
      >
        {language.GITHUB_REPO.TEXT}
      </NavigationItem>
    </NavigationList>
  );
};

export default NavBar;
