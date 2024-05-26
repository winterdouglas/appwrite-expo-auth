import { AppwriteException } from "react-native-appwrite";

import type { Cookie } from "@react-native-cookies/cookies";
import CookieManager from "@react-native-cookies/cookies";

import { parseQueryParams } from "@/utils/uri";

import { callbackUrlPrefix } from "./appwrite";

export const handleIncomingCookie = async (url: string): Promise<boolean> => {
  if (!url.includes(callbackUrlPrefix)) {
    throw new AppwriteException(
      "Invalid OAuth2 Response. Invalid callback url.",
      500,
    );
  }

  const queryParams = parseQueryParams(url);

  if (!queryParams.key || !queryParams.secret || !queryParams.domain) {
    throw new AppwriteException(
      "Invalid OAuth2 Response. Key, Secret and Domain not available.",
      500,
    );
  }

  const domainUrl = new URL(`https://${queryParams.domain}`);

  const cookie: Cookie = {
    name: queryParams.key,
    value: queryParams.secret,
    path: queryParams.path,
    expires: queryParams.expires,
    secure: "secure" in queryParams,
    httpOnly: "httpOnly" in queryParams,
    domain: domainUrl.hostname,
  };

  return CookieManager.set(domainUrl.toString(), cookie);
};
