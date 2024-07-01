import { mockOrFetch } from "@/mock";
import { newtClient } from "@/pages/_libs/newt";
import { parseCafe } from "@/pages/_schemas/cafe";
import { isMockAreaId } from "@/pages/cafes/_utils/area/fixture";
import { cafesFixtureFactory } from "@/pages/cafes/_utils/cafe/fixture";

function decodeSrcAttribute<T extends { src: string }>(image: T): T {
  return {
    ...image,
    src: decodeURIComponent(image.src),
  };
}

export async function realFetchCafes() {
  const { items } = await newtClient.getContents({
    appUid: "cafes",
    modelUid: "cafe",
    query: {
      select: [
        "_id",
        "name",
        "slug",
        "image",
        "area",
        "address",
        "schedule",
        "host",
        "contact",
      ],
    },
  });

  const cafes = items.map((item) => {
    const cafe = parseCafe(item);

    return {
      ...cafe,
      // decodeしないとうまく動作しない
      image: cafe.image === null ? null : decodeSrcAttribute(cafe.image),
    };
  });

  return cafes;
}

async function mockFetchCafes(): ReturnType<typeof realFetchCafes> {
  return cafesFixtureFactory(20, "all");
}

export async function fetchCafes() {
  return await mockOrFetch({
    fetcher: realFetchCafes,
    mock: mockFetchCafes,
  });
}

export async function realFetchCafesByAreaId(areaId: string) {
  const { items } = await newtClient.getContents({
    appUid: "cafes",
    modelUid: "cafe",
    query: {
      select: [
        "_id",
        "_sys",
        "name",
        "slug",
        "image",
        "area",
        "address",
        "schedule",
        "host",
        "contact",
      ],
      area: areaId,
    },
  });

  const cafes = items.map((item) => {
    const cafe = parseCafe(item);

    return {
      ...cafe,
      // decodeしないとうまく動作しない
      image: cafe.image === null ? null : decodeSrcAttribute(cafe.image),
    };
  });

  return cafes;
}

function mockFetchCafesByAreaId(
  areaId: string,
): Awaited<ReturnType<typeof realFetchCafesByAreaId>> {
  return cafesFixtureFactory(10, isMockAreaId(areaId));
}

export async function fetchCafesByAreaId(areaId: string) {
  return await mockOrFetch({
    fetcher: () => realFetchCafesByAreaId(areaId),
    mock: () => mockFetchCafesByAreaId(areaId),
  });
}
