import { mockOrFetch } from "@/mock";
import { newtClient } from "@/libs/newt";
import { parseArea } from "@/pages/_schemas/area";
import { areasFixture } from "@/pages/cafes/_utils/area/fixture";

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
