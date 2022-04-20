import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeState } from '@/Theme/_shared';
import { theme } from '@/Theme/common/index';

export type ThemeStoreState = {
  dark: boolean;
  theme: ThemeState;
};

const initialState: ThemeStoreState = {
  dark: false,
  theme: theme,
};

export const themeSlice = createSlice({
  name: 'Theme',
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.dark = action.payload;
    },
    setTheme: (state, action: PayloadAction<ThemeState>) => {
      return { ...state, theme: action.payload };
    },
  },
  extraReducers: {},
});

export const { setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
