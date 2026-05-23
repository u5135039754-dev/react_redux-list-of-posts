import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../../types/Post';
type SelectedPostState = Post | null;
const initialState: SelectedPostState = null;
const selectedPostSlice = createSlice({
  name: 'selectedPost',
  initialState,
  reducers: {
    setSelectedPost(state, action: PayloadAction<Post>) {
      return action.payload;
    },
    clearSelectedPost: {
      reducer() {
        return null;
      },
      prepare() {
        return { payload: undefined } as const;
      },
    },
  },
});

export const { setSelectedPost, clearSelectedPost } = selectedPostSlice.actions;
export default selectedPostSlice.reducer;
