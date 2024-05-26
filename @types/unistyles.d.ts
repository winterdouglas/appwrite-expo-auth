import type { AppThemes } from "@/theme/themes";

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}
