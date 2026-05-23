/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from '../../types/Comment';

type CommentState = {
  items: Comment[];
  loaded: boolean;
  hasError: boolean;
  visible: boolean;
};
const initialState: CommentState = {
  items: [],
  loaded: false,
  hasError: false,
  visible: false,
};
const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments(state, action: PayloadAction<Comment[]>) {
      state.items = action.payload;
      state.loaded = true;
      state.hasError = false;
    },
    setError(state) {
      state.hasError = true;
      state.loaded = false;
    },
    setVisible(state, action: PayloadAction<boolean>) {
      state.visible = action.payload;
    },
    setLoaded(state, action: PayloadAction<boolean>) {
      state.loaded = action.payload;
    },
  },
});

export const { setComments, setError, setVisible, setLoaded } =
  commentsSlice.actions;
export default commentsSlice.reducer;
