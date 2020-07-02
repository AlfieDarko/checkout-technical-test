import React, { useReducer } from "react";
import {
  CommentsFormStateContext,
  CommentsFormDispatchContext,
  CommentsListStateContext,
  CommentsListDispatchContext,
} from "./app-context";
import {
  initCommentsFormState,
  initCommentsListState,
} from "./app-initial-state";
import { commentsFormReducer, commentsListReducer } from "./app-reducers";

export const AppProvider = ({ children }) => {
  const [commentsFormState, commentsFormDispatch] = useReducer(
    commentsFormReducer,
    initCommentsFormState
  );

  const [commentsListState, commentsListDispatch] = useReducer(
    commentsListReducer,
    initCommentsListState
  );

  return (
    <CommentsListStateContext.Provider value={commentsListState}>
      <CommentsListDispatchContext.Provider value={commentsListDispatch}>
        <CommentsFormStateContext.Provider value={commentsFormState}>
          <CommentsFormDispatchContext.Provider value={commentsFormDispatch}>
            {children}
          </CommentsFormDispatchContext.Provider>
        </CommentsFormStateContext.Provider>
      </CommentsListDispatchContext.Provider>
    </CommentsListStateContext.Provider>
  );
};
