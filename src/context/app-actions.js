import axios from "axios";
import { ALFEEDLY_URL, actionTypes } from "./constants";

export const postComment = async (dispatch, userInput) => {
  dispatch({ type: actionTypes.POST_COMMENT });
  try {
    let response = await axios.post(ALFEEDLY_URL, {
      feedback: userInput,
    });
    dispatch({
      type: actionTypes.POST_COMMENT_SUCCESS,
      payload: response,
      status: response.status,
    });
  } catch (error) {
    dispatch({ type: actionTypes.POST_COMMENT_FAILURE, error });
  }
};

export const getAllComments = async (dispatch) => {
  dispatch({ type: actionTypes.GET_COMMENTS });
  try {
    let response = await axios.get(ALFEEDLY_URL);
    dispatch({
      type: actionTypes.GET_COMMENTS_SUCCESS,
      feedback: response.data.feedback,
      status: response.status,
    });
  } catch (error) {
    dispatch({ type: actionTypes.POST_COMMENT_FAILURE, error });
  }
};
