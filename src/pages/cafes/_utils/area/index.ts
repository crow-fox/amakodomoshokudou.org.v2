import { newtClient } from "../../../../libs/newt";
import { type Area, parseArea } from "../../../../models/area";

export async function fetchAreas(): Promise<Area[]> {
  const { items } = await newtClient.getContents({
    appUid: "cafes",
    modelUid: "area",
    query: {
      select: ["_id", "name", "slug", "priority"],
      order: ["priority"],
    },
  });

  const areas = items.map((item) => parseArea(item));
  return areas;
}
