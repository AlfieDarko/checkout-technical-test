import React, { useEffect } from "react";
import {
  useCommentsListState,
  useCommentsListDispatch,
  useCommentsFormState,
} from "#context";
import { getAllComments } from "#context/app-actions";
import FeedbackCard from "./FeedbackCard";
import "./styles.css";

const FeedbackItems = ({ feedback }) => {
  return (
    <div className="grid-wrapper-2col">
      {feedback?.map((item) => (
        <FeedbackCard key={item.id} item={item} />
      ))}
    </div>
  );
};

const ListContainer = () => {
  const commentsListState = useCommentsListState();
  const commentsFormState = useCommentsFormState();
  const commentsListDispatch = useCommentsListDispatch();
  const { feedback } = commentsListState;

  useEffect(() => {
    getAllComments(commentsListDispatch);
  }, [commentsFormState.status]);

  // TODO: isLoading
  return (
    <>
      <FeedbackItems feedback={feedback} />
    </>
  );
};

export default ListContainer;
