import { newtClient } from "@/pages/_libs/newt";
import { parseArea } from "@/pages/_schemas/area";

export async function fetchAreas() {
  const { items } = await newtClient.getContents({
    appUid: "cafes",
    modelUid: "area",
    query: {
      select: ["_id", "_sys", "name", "slug", "priority"],
      order: ["priority"],
    },
  });

  const areas = items.map((item) => parseArea(item));
  return areas;
}
