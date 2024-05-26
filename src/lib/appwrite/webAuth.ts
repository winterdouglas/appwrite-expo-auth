import * as WebBrowser from "expo-web-browser";

import { handleIncomingCookie } from "./handleIncomingCookie";

export const webAuth = async (authUrl: string, callbackUrl: string) => {
  const browserResult = await WebBrowser.openAuthSessionAsync(
    authUrl,
    callbackUrl,
  );

  if (browserResult.type !== "success") {
    return false;
  }

  return handleIncomingCookie(browserResult.url);
};
