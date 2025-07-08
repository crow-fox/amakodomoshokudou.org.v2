import { newtClient } from "../../../../libs/newt";
import { type Cafe, parseCafe } from "../../../../models/cafe";

function decodeSrcAttribute<T extends { src: string }>(image: T): T {
  return {
    ...image,
    src: decodeURIComponent(image.src),
  };
}

type NewtCafe = {
  _id: string;
  name: string;
  slug: string;
  image: {
    src: string;
    width: number;
    height: number;
    fileName: string;
  } | null;
  area: {
    _id: string;
    name: string;
    slug: string;
    priority: number;
  };
  address: string;
  schedule: string;
  host: string;
  contact: string;
};

function parseNewtCafeToCafe(data: NewtCafe): Cafe {
  try {
    const cafe = parseCafe({
      ...data,
      area: {
        ...data.area,
        id: data.area._id, // modelはidを使用するが、newtからは_idが返ってくるため変換する
      },
    });
    return {
      ...cafe,
      // decodeしないとうまく動作しない
      image: cafe.image === null ? null : decodeSrcAttribute(cafe.image),
    };
  } catch (error) {
    throw new Error(`Invalid cafe data: ${error}`);
  }
}

const selectFields = [
  "_id",
  "name",
  "slug",
  "image",
  "area",
  "address",
  "schedule",
  "host",
  "contact",
];

export async function fetchCafes(): Promise<Cafe[]> {
  const { items } = await newtClient.getContents<NewtCafe>({
    appUid: "cafes",
    modelUid: "cafe",
    query: {
      select: selectFields,
    },
  });

  return items.map(parseNewtCafeToCafe);
}

export async function fetchCafesByAreaId(areaId: string): Promise<Cafe[]> {
  const { items } = await newtClient.getContents<NewtCafe>({
    appUid: "cafes",
    modelUid: "cafe",
    query: {
      select: selectFields,
      area: areaId,
    },
  });

  return items.map(parseNewtCafeToCafe);
}
