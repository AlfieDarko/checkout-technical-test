import React, { useEffect } from "react";
import AverageRating from "./AverageRating";
import {
  useCommentsListState,
  useCommentsFormState,
  useCommentsListDispatch,
} from "#context/app-context";
import { getAllComments } from "#context/app-actions";
import { selectAverageRatingsFromState } from "#context/app-selectors";

const AverageRatingContainer = () => {
  const commentsListState = useCommentsListState();
  const commentsFormState = useCommentsFormState();
  const commentsListDispatch = useCommentsListDispatch();

  const averageRating = selectAverageRatingsFromState(commentsListState);
  const { feedback, isLoading } = commentsListState;
  const numberOfReviews = feedback?.length;
  useEffect(() => {
    getAllComments(commentsListDispatch);
  }, [commentsFormState.status]);

  return (
    <>
      <AverageRating
        isLoading={isLoading}
        numberOfReviews={numberOfReviews}
        averageRating={averageRating}
      />
    </>
  );
};

export default AverageRatingContainer;
