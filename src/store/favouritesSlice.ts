import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Article } from "../types/Article";

interface FavoritesState {
  items: Article[];
}

const initialState: FavoritesState = { items: [] };

const favouritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Article>) => {
      if (!state.items.find((a) => a.url === action.payload.url)) {
        state.items.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((a) => a.url !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favouritesSlice.actions;
export default favouritesSlice.reducer;
