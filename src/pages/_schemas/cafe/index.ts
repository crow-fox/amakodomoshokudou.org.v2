import { newtAreaSchema } from "@/pages/_schemas/area";
import { newtSysSchema } from "@/pages/_schemas/newt";
import { number, object, string, type Input, nullable, parse } from "valibot";

export const newtCafeSchema = object({
  _id: string(),
  _sys: newtSysSchema,
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

export type NewtCafe = Input<typeof newtCafeSchema>;

export function parseCafe(data: unknown) {
  try {
    return parse(newtCafeSchema, data);
  } catch (error) {
    throw new Error(`Invalid data: ${error}`);
  }
}
