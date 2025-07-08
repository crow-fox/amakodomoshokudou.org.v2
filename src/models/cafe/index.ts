import {
  type InferOutput,
  nullable,
  number,
  object,
  parse,
  string,
} from "valibot";
import { areaSchema } from "../area";

export const cafeSchema = object({
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
  area: areaSchema,
  address: string(),
  schedule: string(),
  host: string(),
  contact: string(),
});

export type Cafe = InferOutput<typeof cafeSchema>;

export function parseCafe(data: unknown) {
  try {
    return parse(cafeSchema, data);
  } catch (error) {
    throw new Error(`Invalid data: ${error}`);
  }
}
