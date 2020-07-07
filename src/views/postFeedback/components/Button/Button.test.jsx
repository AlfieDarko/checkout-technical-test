import Button from "./index";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("<Button >", () => {
  let otherProps;
  beforeEach(() => {
    otherProps = {};
  });
  it("should be able to find button via data-testid", () => {
    render(<Button dataTestId="test-btn" {...otherProps}></Button>);
    expect(screen.queryByTestId("test-btn")).toBeInTheDocument();
  });

  it("should find the button disabled if isDisabled is passed in ", () => {
    otherProps.isDisabled = true;
    render(<Button dataTestId="test-btn" {...otherProps}></Button>);
    expect(screen.queryByRole("button")).toBeDisabled();
  });

  it("should NOT find the button disabled if it isnt passed in", () => {
    render(<Button dataTestId="test-btn" {...otherProps}></Button>);
    expect(screen.queryByRole("button")).not.toBeDisabled();
  });

  it("should find the button has the correct classnames when isDisabled is true", () => {
    otherProps.isDisabled = true;
    render(<Button dataTestId="test-btn" {...otherProps}></Button>);
    expect(screen.queryByTestId("test-btn")).toHaveClass("btn btn--disabled");
  });

  it("should find the button has the correct classnames when isSuccess is true", () => {
    otherProps.isSuccess = true;
    render(<Button dataTestId="test-btn" {...otherProps}></Button>);
    expect(screen.queryByTestId("test-btn")).toHaveClass("btn btn--green");
  });
});
