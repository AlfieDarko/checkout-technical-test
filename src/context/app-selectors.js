export const selectChartDataFromState = (commentsListState) => {
  let chartDataSchema = [
    {
      rating: "1",
      total: 0,
    },
    {
      rating: "2",
      total: 0,
    },
    {
      rating: "3",
      total: 0,
    },
    {
      rating: "4",
      total: 0,
    },
    {
      rating: "5",
      total: 0,
    },
  ];

  chartDataSchema.forEach((ratingObject) => {
    commentsListState.feedback.forEach((item) => {
      if (ratingObject.rating == item.rating) {
        ratingObject.total++;
      }
    });
  });

  return chartDataSchema;
};

export const selectAverageRatingsFromState = ({ feedback }) => {
  const isRating = (item) => item?.rating;
  const getRatings = (item) => item?.rating;
  const addScores = (runningTotal, rating) => runningTotal + rating;
  const numberOfReviews = feedback?.length;
  const averageReviews =
    feedback?.filter(isRating).map(getRatings).reduce(addScores, 0) /
    numberOfReviews;

  if (averageReviews) return Math.round(averageReviews * 1e1) / 1e1;
  // no type coercion needed
};
