import { useState } from "react";
import { ScrollView } from "react-native";
import { OAuthProvider } from "react-native-appwrite";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { useOAuth2Session } from "@/features/auth/hooks/useOAuth2Session";
import { beautify } from "@/utils/log";

export const LoginScreen = () => {
  const { styles } = useStyles(stylesheet);
  const [session, setSession] = useState<string>("");
  const { createSession, getSession } = useOAuth2Session();

  const login = async () => {
    await createSession(OAuthProvider.Google);

    const session = await getSession();

    if (!session) return;

    setSession(beautify(session));
  };

  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      contentContainerStyle={styles.scrollViewContainer}>
      <Button onPress={login} text="Login with Google" />
      <Text selectable>{session}</Text>
    </ScrollView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  scrollViewContainer: {
    gap: theme.spacing.$4,
    padding: theme.spacing.$4,
  },
}));
