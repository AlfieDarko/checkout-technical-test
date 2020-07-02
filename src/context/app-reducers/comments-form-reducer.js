import { actionTypes } from "../constants";

const commentsFormReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.POST_COMMENT:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.POST_COMMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        payload: action.payload,
        status: action.status,
      };

    case actionTypes.POST_COMMENT_FAILURE:
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

export default commentsFormReducer;
