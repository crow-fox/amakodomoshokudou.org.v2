import { newtClient } from "@/pages/_libs/newt";
import { parseCafe } from "@/pages/_schemas/cafe";

function decodeSrcAttribute<T extends { src: string }>(image: T): T {
  return {
    ...image,
    src: decodeURIComponent(image.src),
  };
}

export async function fetchCafes() {
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

export async function fetchCafesByAreaId(areaId: string) {
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
