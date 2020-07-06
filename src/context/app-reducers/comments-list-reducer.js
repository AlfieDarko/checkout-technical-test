import { actionTypes } from "../constants";

const commentsListReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.GET_COMMENTS:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        feedback: action.feedback,
        status: action.status,
      };

    case actionTypes.GET_COMMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.error,
      };

    default:
      return state;
  }
};

export default commentsListReducer;
