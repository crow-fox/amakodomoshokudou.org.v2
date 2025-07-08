import { newtClient } from "../../../../libs/newt";
import { type NewtCafe, parseCafe } from "../../../../models/cafe";

function decodeSrcAttribute<T extends { src: string }>(image: T): T {
  return {
    ...image,
    src: decodeURIComponent(image.src),
  };
}

export async function fetchCafes(): Promise<NewtCafe[]> {
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

export async function fetchCafesByAreaId(areaId: string): Promise<NewtCafe[]> {
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
