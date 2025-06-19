import { type InferOutput, number, object, parse, string } from "valibot";

export const newtAreaSchema = object({
  _id: string(),
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
