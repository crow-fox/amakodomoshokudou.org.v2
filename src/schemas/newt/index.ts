import { object, string, type InferOutput } from "valibot";

export const newtSysSchema = object({
  createdAt: string(),
  updatedAt: string(),
  raw: object({
    createdAt: string(),
    updatedAt: string(),
    firstPublishedAt: string(),
    publishedAt: string(),
  }),
});

export type NewtSys = InferOutput<typeof newtSysSchema>;
