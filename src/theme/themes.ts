import { colorPalette } from "./colorPalette";
import { spacing } from "./spacing";

export const lightTheme = {
  colors: {
    typography: colorPalette.$neutral0,
    background: colorPalette.$neutral100,
    button: colorPalette.$blue60,
  },
  spacing,
} as const;

export const darkTheme: typeof lightTheme = {
  colors: {
    typography: colorPalette.$neutral100,
    background: colorPalette.$neutral0,
    button: colorPalette.$blue60,
  },
  spacing,
} as const;

export type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};
