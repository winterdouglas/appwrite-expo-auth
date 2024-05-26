import { useCallback } from "react";
import type { OAuthProvider } from "react-native-appwrite";

import { callbackUrl, account, webAuth } from "@/lib/appwrite";
import { log } from "@/utils/log";

export const useOAuth2Session = () => {
  const createSession = useCallback(async (provider: OAuthProvider) => {
    try {
      const authUrl = account.createOAuth2Session(provider);

      if (!authUrl) return;

      await webAuth(authUrl.toString(), callbackUrl);
    } catch (error) {
      log(error);
    }
  }, []);

  const getSession = useCallback(async () => {
    try {
      return await account.getSession("current");
    } catch (error) {
      log(error);
    }
  }, []);

  return { createSession, getSession };
};
