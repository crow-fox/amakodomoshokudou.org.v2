import { newtClient } from "../../../../libs/newt";
import { mockOrFetch } from "../../../../mock";
import { parseArea } from "../../../../schemas/area";
import { areasFixture } from "./fixture";

async function realFetchAreas() {
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

function mockFetchAreas(): Awaited<ReturnType<typeof realFetchAreas>> {
  return areasFixture;
}

export async function fetchAreas() {
  return await mockOrFetch({
    fetcher: realFetchAreas,
    mock: mockFetchAreas,
  });
}
