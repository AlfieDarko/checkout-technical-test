import ImageCard from "./index";
import React from "react";

import { locales } from "#views/lib/locales";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("<ImageCard />", () => {
  const language = locales["PIZZA_VIEW"];

  describe("Default Properties", () => {
    beforeEach(() => {
      render(<ImageCard />);
    });
    afterEach(() => {
      cleanup();
    });
    it("SHOULD exist", () => {
      expect(screen.getByTestId("image-card-component")).toBeInTheDocument();
    });

    it("SHOULD find the title with the correct default text content", () => {
      expect(screen.getByTestId("image-card-title")).toHaveTextContent(
        language.IMAGE_TITLE
      );
    });

    it("SHOULD find the img exists with the correct default properties", () => {
      expect(screen.getByTestId("image-card-picture")).toBeInTheDocument();
      expect(screen.getByTestId("image-card-picture")).toHaveProperty(
        "alt",
        `image of ${language.IMAGE_TITLE}`
      );
    });

    it("SHOULD find the description with the correct text content", () => {
      expect(screen.getByTestId("image-card-description")).toBeInTheDocument();
      expect(screen.getByTestId("image-card-description")).toHaveTextContent(
        language.DESCRIPTION
      );
    });
  });

  describe("Custom Properties", () => {
    const customProps = {
      title: "Vegan Pizza",
      description: "Vegan Pizza with vegan cheese and tofu",
      imageSrc: "/veganPizza.jpeg",
    };
    beforeEach(() => {
      render(<ImageCard {...customProps} />);
    });

    afterEach(() => {
      cleanup();
    });
    it("SHOULD find the title with the correct text content", () => {
      expect(screen.getByTestId("image-card-title")).toHaveTextContent(
        customProps.title
      );
    });

    it("SHOULD find the img exists with the correct properties", () => {
      expect(screen.getByTestId("image-card-picture")).toBeInTheDocument();
      expect(screen.getByTestId("image-card-picture")).toHaveProperty(
        "alt",
        `image of ${customProps.title}`
      );
    });

    it("SHOULD find the description with the correct text content", () => {
      expect(screen.getByTestId("image-card-description")).toHaveTextContent(
        customProps.description
      );
    });
  });
});
