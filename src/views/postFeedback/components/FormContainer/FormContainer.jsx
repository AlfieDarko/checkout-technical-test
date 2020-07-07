import React from "react";
import { useForm } from "react-hook-form";
import { useCommentsFormState, useCommentsFormDispatch } from "#context";
import { postComment } from "#context";
import FeedbackForm from "../FeedbackForm";

const FormContainer = () => {
  const commentsFormState = useCommentsFormState();
  const commentsFormDispatch = useCommentsFormDispatch();
  const { handleSubmit, register, errors } = useForm();
  const { state, error, isLoading } = commentsFormState;

  const onSubmit = async (userInput) => {
    event.preventDefault();
    postComment(commentsFormDispatch, userInput);
  };

  return (
    <>
      <FeedbackForm
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        register={register}
        formErrors={errors}
        asyncStatus={state}
        formAsyncError={error}
        isLoading={isLoading}
      />
    </>
  );
};

export default FormContainer;
