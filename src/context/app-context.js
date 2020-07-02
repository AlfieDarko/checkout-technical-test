import { createContext, useContext } from "react";

export const CommentsListStateContext = createContext();
export const CommentsListDispatchContext = createContext();
export const CommentsFormStateContext = createContext();
export const CommentsFormDispatchContext = createContext();

export const useCommentsListState = () => {
  const context = useContext(CommentsListStateContext);
  if (context === undefined) {
    throw new Error(
      "useCommentsListState() must be used within a CommentsList Provider. Check your providers."
    );
  }
  return context;
};

export const useCommentsListDispatch = () => {
  const context = useContext(CommentsListDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useCommentsListDispatch() must be used within a CommentsList Provider. Check your providers."
    );
  }
  return context;
};

export const useCommentsFormState = () => {
  const context = useContext(CommentsFormStateContext);
  if (context === undefined) {
    throw new Error(
      "useCommentsFormState() must be used within a CommentsForm Provider. Check your providers."
    );
  }

  return context;
};

export const useCommentsFormDispatch = () => {
  const context = useContext(CommentsFormDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useCommentsFormDispatch() must be used within a CommentsForm Provider. Check your providers."
    );
  }

  return context;
};
