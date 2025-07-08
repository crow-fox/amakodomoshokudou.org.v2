import { newtClient } from "../../../../../libs/newt";
import type { NewtArea } from "../../../../../libs/newt/types";
import { type Area, parseArea } from "../../../../../models/area";

async function fetchAreasUseNewt(): Promise<Area[]> {
  const { items } = await newtClient.getContents<NewtArea>({
    appUid: "cafes",
    modelUid: "area",
    query: {
      select: ["_id", "name", "slug", "priority"],
      order: ["priority"],
    },
  });

  return items.map((item) =>
    parseArea({
      ...item,
      id: item._id, //modelはidを使用するが、newtからは_idが返ってくるため変換する
    }),
  );
}

export async function fetchAreas(): Promise<Area[]> {
  return await fetchAreasUseNewt();
}
