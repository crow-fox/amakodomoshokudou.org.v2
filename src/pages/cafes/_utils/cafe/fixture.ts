import type { NewtCafe } from "@/schemas/cafe";
import {
  areaFixtureFactory,
  isMockAreaId,
  type MockAreaId,
} from "@/pages/cafes/_utils/area/fixture";

type CafeFixtureFactoryParams = {
  name: string;
  slug: string;
  image: "none" | "1" | "2";
  areaId: MockAreaId;
};

export function cafeFixtureFactory({
  name,
  slug,
  image,
  areaId,
}: CafeFixtureFactoryParams): NewtCafe {
  return {
    _id: crypto.randomUUID(),
    name,
    slug,
    image:
      image === "1"
        ? {
            fileName: "sample-cafe.png",
            height: 430,
            src: "/_mock/sample-cafe.png",
            width: 398,
          }
        : image === "2"
          ? {
              fileName: "sample-cafe2.png",
              height: 1600,
              src: "/_mock/sample-cafe2.png",
              width: 1066,
            }
          : null,
    area: areaFixtureFactory(areaId),
    address: "兵庫県○市00-00-00",
    schedule: "毎週○曜日 00:00-00:00",
    host: "サンプル団体",
    contact: "000-0000-0000",
  };
}

export function cafesFixtureFactory(
  count: number,
  area: MockAreaId | "all",
): NewtCafe[] {
  let counter = 0;
  const cafes: NewtCafe[] = [];

  while (counter < count) {
    cafes.push(
      cafeFixtureFactory({
        name:
          area === "all"
            ? `サンプル食堂${counter + 1}`
            : `${areaFixtureFactory(area).name}サンプル食堂${counter + 1}`,
        slug: `sample-cafe${counter + 1}`,
        image: counter % 3 === 0 ? "none" : counter % 3 === 1 ? "1" : "2",
        areaId:
          area === "all" ? isMockAreaId(((counter % 6) + 1).toString()) : area,
      }),
    );

    counter++;
  }

  return cafes;
}
