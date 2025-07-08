import * as v from "valibot";

export const areaSchema = v.object({
  _id: v.string(),
  name: v.string(),
  slug: v.string(),
  priority: v.number(),
});

export type Area = v.InferOutput<typeof areaSchema>;

export function parseArea(data: unknown) {
  try {
    return v.parse(areaSchema, data);
  } catch (error) {
    throw new Error(`Invalid data: ${error}`);
  }
}
