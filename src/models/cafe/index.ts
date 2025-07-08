import {
  type InferOutput,
  nullable,
  number,
  object,
  parse,
  string,
} from "valibot";
import { newtAreaSchema } from "../area";

export const newtCafeSchema = object({
  _id: string(),
  name: string(),
  slug: string(),
  image: nullable(
    object({
      src: string(),
      width: number(),
      height: number(),
      fileName: string(),
    }),
  ),
  area: newtAreaSchema,
  address: string(),
  schedule: string(),
  host: string(),
  contact: string(),
});

export type NewtCafe = InferOutput<typeof newtCafeSchema>;

export function parseCafe(data: unknown) {
  try {
    return parse(newtCafeSchema, data);
  } catch (error) {
    throw new Error(`Invalid data: ${error}`);
  }
}
