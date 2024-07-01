import type { NewtCafe } from "@/pages/_schemas/cafe";
import {
  areaFixtureFactory,
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
