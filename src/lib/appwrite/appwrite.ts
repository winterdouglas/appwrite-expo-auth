import { Account, Client } from "react-native-appwrite";

export const endpoint = process.env.EXPO_PUBLIC_API_URL;

export const projectId = process.env.EXPO_PUBLIC_PROJECT_ID;

export const callbackUrlPrefix = "appwrite-callback";

export const callbackUrl = `${callbackUrlPrefix}-${projectId}`;

export const client = new Client();

client.setEndpoint(endpoint).setProject(projectId);

export const account = new Account(client);
