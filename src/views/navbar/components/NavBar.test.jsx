import NavBar from "./NavBar";
import React from "react";

import { locales } from "#views/lib/locales";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const language = locales["NAVBAR"];

describe("<Navbar >", () => {
  beforeEach(() => {
    render(<NavBar />);
  });

  it("Navbar component div should exist", () => {
    expect(screen.getByTestId("navigation-list")).toBeInTheDocument();
  });

  it("should find the correct items for the home link", () => {
    expect(screen.getByTestId("navbar-link-home")).toHaveTextContent(
      language.HOME.TEXT
    );
  });

  it("should find the correct items for the comments link", () => {
    expect(screen.getByTestId("navbar-link-comments")).toHaveTextContent(
      language.COMMENTS.TEXT
    );
  });

  it("should find the correct items for github link", () => {
    expect(screen.getByTestId("navbar-link-github")).toHaveTextContent(
      language.GITHUB_REPO.TEXT
    );
    expect(screen.getByTestId("navbar-link-github")).toHaveProperty(
      "target",
      "_blank"
    );
  });
});
