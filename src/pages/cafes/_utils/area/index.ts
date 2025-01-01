import { newtClient } from "../../../../libs/newt";
import { parseArea, type NewtArea } from "../../../../schemas/area";

export async function fetchAreas(): Promise<NewtArea[]> {
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
