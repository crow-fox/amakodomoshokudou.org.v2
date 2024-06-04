import { newtSysSchema } from "@/pages/_schemas/newt";
import { number, object, string, type InferOutput, parse } from "valibot";

export const newtAreaSchema = object({
  _id: string(),
  _sys: newtSysSchema,
  name: string(),
  slug: string(),
  priority: number(),
});

export type NewtArea = InferOutput<typeof newtAreaSchema>;

export function parseArea(data: unknown) {
  try {
    return parse(newtAreaSchema, data);
  } catch (error) {
    throw new Error(`Invalid data: ${error}`);
  }
}
