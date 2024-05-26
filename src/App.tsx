import "react-native-url-polyfill/auto";
import "@/theme/unistyles";

import { SafeAreaView } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { StatusBar } from "expo-status-bar";

import { LoginScreen } from "@/features/auth/screens/LoginScreen";

export const App = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <LoginScreen />
    </SafeAreaView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
}));
