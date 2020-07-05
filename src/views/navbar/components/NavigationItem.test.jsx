import React from "react";
import NavigationItem from "./NavigationItem";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("<NavigationItem />", () => {
  const textContent = "HomePage";
  const props = {
    href: "https://google.com/",
    dataTestId: "nav-link-homepage",
    target: "_blank",
  };
  it("should be able to find the correct content", () => {
    render(<NavigationItem {...props}>{textContent} </NavigationItem>);

    expect(screen.getByTestId("nav-link-homepage")).toHaveTextContent(
      textContent
    );

    expect(screen.getByTestId("nav-link-homepage")).toHaveProperty(
      "target",
      "_blank"
    );

    expect(screen.getByTestId("nav-link-homepage")).toHaveProperty(
      "href",
      props.href
    );
  });
});
