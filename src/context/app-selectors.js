export const selectAverageRatingsFromState = (state) => {
  if (!state || !state.feedback) return null;

  const { feedback } = state;
  const isRating = (item) => item?.rating;
  const getRatings = (item) => item?.rating;
  const addScores = (runningTotal, rating) => runningTotal + Number(rating);

  const numberOfReviews = feedback?.length;
  const averageReviews =
    feedback?.filter(isRating).map(getRatings).reduce(addScores, 0) /
    numberOfReviews;

  if (averageReviews) return Math.round(averageReviews * 1e1) / 1e1;
  // no type coercion needed
};
