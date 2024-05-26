import * as v from "valibot";

const EnvSchema = v.object({
  EXPO_PUBLIC_API_URL: v.string(),
  EXPO_PUBLIC_PROJECT_ID: v.string(),
});

const parsedEnv = v.parse(EnvSchema, process.env);

type ParsedEnv = typeof parsedEnv;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends ParsedEnv {}
  }
}
