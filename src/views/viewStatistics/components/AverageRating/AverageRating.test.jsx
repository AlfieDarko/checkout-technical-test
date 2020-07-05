import React from "react";
import AverageRating from "./AverageRating";
import { render, fireEvent, screen } from "../../../../../test-utils";
import "@testing-library/jest-dom/extend-expect";
// import { render, fireEvent, waitFor, screen } from "@testing-library/react";

describe("<Average Rating>", () => {
  it("should find the AverageRating & its correct contents when there is no reviews ", () => {
    render(<AverageRating />);

    expect(screen.getByTestId("average-rating-component")).toBeInTheDocument();
    expect(
      screen.getByTestId("average-rating-no-reviews-text")
    ).toHaveTextContent("There are no reviews at the moment");
  });

  it("should find the correct contents when there is a review", () => {
    const props = {
      averageRating: 5,
      numberOfReviews: 2,
    };
    render(<AverageRating {...props} />);

    expect(
      screen.queryByTestId("average-rating-no-reviews-text")
    ).not.toBeInTheDocument();

    expect(
      screen.getByTestId("average-rating-review-content")
    ).toBeInTheDocument();

    expect(
      screen.queryByTestId("average-rating-review-content")
    ).toBeInTheDocument();

    expect(screen.queryByTestId("average-rating-count")).toHaveTextContent(
      `${props.averageRating}`
    );
    expect(screen.queryByTestId("reviews-count")).toHaveTextContent(
      `from ${props.numberOfReviews} reviews`
    );
  });
});
