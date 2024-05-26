import type { TextProps as RNTextProps } from "react-native";
import { Text as RNText } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export type TextProps = RNTextProps;

export const Text = ({ style, ...props }: TextProps) => {
  const { styles } = useStyles(stylesheet);

  return <RNText {...props} style={[styles.text, style]} />;
};

const stylesheet = createStyleSheet((theme) => ({
  text: {
    color: theme.colors.typography,
  },
}));
