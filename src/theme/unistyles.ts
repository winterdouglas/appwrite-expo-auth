import { UnistylesRegistry } from "react-native-unistyles";

import type { AppThemes } from "./themes";
import { darkTheme, lightTheme } from "./themes";

UnistylesRegistry.addThemes({
  light: lightTheme,
  dark: darkTheme,
}).addConfig({
  adaptiveThemes: true,
});

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}
