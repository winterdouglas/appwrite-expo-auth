import type { StyleProp, ViewStyle } from "react-native";
import { Pressable, Text } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

type ButtonProps = {
  text: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export const Button = ({ text, onPress, style }: ButtonProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        { opacity: pressed ? 0.4 : 1 },
        styles.pressable,
        style,
      ]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  pressable: {
    alignItems: "center",
    backgroundColor: theme.colors.button,
    padding: theme.spacing.$2,
  },
  text: {
    color: theme.colors.typography,
  },
}));
