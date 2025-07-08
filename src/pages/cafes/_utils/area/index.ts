import { newtClient } from "../../../../libs/newt";
import { type Area, parseArea } from "../../../../models/area";

type NewtArea = {
  _id: string;
  name: string;
  slug: string;
  priority: number;
};

export async function fetchAreas(): Promise<Area[]> {
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
