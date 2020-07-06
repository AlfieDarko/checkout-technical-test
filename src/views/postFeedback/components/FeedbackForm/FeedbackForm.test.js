import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import FeedbackForm from "./";
import { locales } from "#views/lib/locales";
import "@testing-library/jest-dom/extend-expect";

// TODO: beforeEach refactor

describe("<Feedback Form />", () => {
  const handleSubmit = jest.fn();
  const register = jest.fn();
  const onSubmit = jest.fn();
  const formErrors = {};
  const language = locales["POST_FEEDBACK"];

  it("should find the correct content on default", () => {
    render(
      <FeedbackForm
        handleSubmit={handleSubmit}
        register={register}
        formErrors={formErrors}
        onSubmit={onSubmit}
      />
    );

    expect(screen.getByTestId("feedback-form-submit-btn")).toHaveTextContent(
      language.SUBMIT_CTA.SUBMIT_COMMENT
    );

    expect(screen.getByTestId("feedback-form-legend")).toHaveTextContent(
      language.FORM_LEGEND
    );
  });

  describe("GIVEN the form posts successfully", () => {
    const asyncStatus = 200;
    it("SHOULD find the post success text in the form ", () => {
      render(
        <FeedbackForm
          handleSubmit={handleSubmit}
          register={register}
          formErrors={formErrors}
          onSubmit={onSubmit}
          asyncStatus={asyncStatus}
        />
      );
      expect(
        screen.getByTestId("feedback-form-success-text")
      ).toHaveTextContent(language.FORM_ASYNC_STATUS.SUCCESS);
    });

    it("SHOULD find the form submit button disabled", () => {
      render(
        <FeedbackForm
          handleSubmit={handleSubmit}
          register={register}
          formErrors={formErrors}
          onSubmit={onSubmit}
          asyncStatus={asyncStatus}
        />
      );

      expect(screen.getByTestId("feedback-form-submit-btn")).toBeDisabled();
    });
  });

  describe("GIVEN the form fails to post ", () => {
    const asyncStatus = 400;
    const formAsyncError = new Error();
    it("SHOULD find the post failure text in the form ", () => {
      render(
        <FeedbackForm
          handleSubmit={handleSubmit}
          register={register}
          formErrors={formErrors}
          onSubmit={onSubmit}
          asyncStatus={asyncStatus}
          formAsyncError={formAsyncError}
        />
      );

      expect(
        screen.getByTestId("feedback-form-failure-text")
      ).toHaveTextContent(language.FORM_ASYNC_STATUS.FAILURE);
    });

    it("SHOULD find the button still enabled", () => {
      render(
        <FeedbackForm
          handleSubmit={handleSubmit}
          register={register}
          formErrors={formErrors}
          onSubmit={onSubmit}
          asyncStatus={asyncStatus}
          formAsyncError={formAsyncError}
        />
      );
      expect(screen.getByTestId("feedback-form-submit-btn")).toBeEnabled();
    });
  });

  describe("GIVEN isLoading is true", () => {
    const isLoading = true;
    it("SHOULD find the loading spinner", () => {
      render(
        <FeedbackForm
          handleSubmit={handleSubmit}
          register={register}
          formErrors={formErrors}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      );

      expect(screen.getByTestId("loading-spinner")).toBeTruthy();
    });

    it("SHOULD find the button is disabled", () => {
      render(
        <FeedbackForm
          handleSubmit={handleSubmit}
          register={register}
          formErrors={formErrors}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      );
      expect(screen.getByTestId("feedback-form-submit-btn")).toBeDisabled();
    });
  });

  describe("Form Validation", () => {
    const formErrors = {
      name: {
        message: language.NAME.REQUIRED_TEXT,
      },
      email: {
        message: language.EMAIL.REQUIRED_TEXT,
      },
      rating: {
        message: language.RATING.REQUIRED_TEXT,
      },
      comment: {
        message: language.COMMENT.REQUIRED_TEXT,
      },
    };
    describe("GIVEN the formErrors object is present", () => {
      it("SHOULD find the correct validation messages for each input", () => {
        render(
          <FeedbackForm
            handleSubmit={handleSubmit}
            register={register}
            formErrors={formErrors}
            onSubmit={onSubmit}
          />
        );
        fireEvent.submit(screen.getByTestId("feedback-form-submit-btn"));

        expect(screen.getByTestId("name-form-error")).toBeInTheDocument();
        expect(screen.getByTestId("name-form-error")).toHaveTextContent(
          language.NAME.REQUIRED_TEXT
        );

        expect(screen.getByTestId("email-form-error")).toBeInTheDocument();
        expect(screen.getByTestId("email-form-error")).toHaveTextContent(
          language.EMAIL.REQUIRED_TEXT
        );

        expect(screen.getByTestId("rating-form-error")).toBeInTheDocument();
        expect(screen.getByTestId("rating-form-error")).toHaveTextContent(
          language.RATING.REQUIRED_TEXT
        );

        expect(screen.getByTestId("comment-form-error")).toBeInTheDocument();
        expect(screen.getByTestId("comment-form-error")).toHaveTextContent(
          language.COMMENT.REQUIRED_TEXT
        );
      });
    });
  });
});
