import { newtClient } from "@/service/client";
import type { NewtArea, NewtCafe } from "@/service/types";

export const getCafes = async (
  option: { limit: number; skip: number } = {
    limit: 1000,
    skip: 0,
  },
): Promise<{
  limit: number;
  skip: number;
  total: number;
  cafes: NewtCafe[];
}> => {
  const result = await newtClient.getContents<NewtCafe>({
    appUid: "cafes",
    modelUid: "cafe",
    query: {
      limit: option.limit,
      skip: option.skip,
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

  return {
    ...result,
    cafes: result.items.map((item) => {
      if (item.image === null) {
        return item;
      }

      return {
        ...item,
        image: {
          ...item.image,
          src: decodeURIComponent(item.image.src),
        },
      };
    }),
  };
};

export const getCafesByArea = async (
  areaId: string,
  option: { limit: number; skip: number } = {
    limit: 1000,
    skip: 0,
  },
): Promise<{
  limit: number;
  skip: number;
  total: number;
  cafes: NewtCafe[];
}> => {
  const result = await newtClient.getContents<NewtCafe>({
    appUid: "cafes",
    modelUid: "cafe",

    query: {
      limit: option.limit,
      skip: option.skip,
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

  return {
    ...result,
    cafes: result.items.map((item) => {
      if (item.image === null) {
        return item;
      }

      return {
        ...item,
        image: {
          ...item.image,
          src: decodeURIComponent(item.image.src),
        },
      };
    }),
  };
};

export const getAllAreas = async (): Promise<{
  limit: number;
  skip: number;
  total: number;
  areas: NewtArea[];
}> => {
  const result = await newtClient.getContents<NewtArea>({
    appUid: "cafes",
    modelUid: "area",
    query: {
      select: ["_id", "name", "slug", "priority"],
      order: ["priority"],
    },
  });

  return {
    ...result,
    areas: result.items,
  };
};
