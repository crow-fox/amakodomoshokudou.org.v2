import { randomUUID } from "node:crypto";
import { cmsAreas } from "./area";
import type { NewtArea, NewtCafe } from "../../libs/newt/types";

function uniqueString(): string {
  return randomUUID();
}

export function cmsCafe(
  area: NewtArea,
): (
  cafe: Pick<
    NewtCafe,
    "name" | "slug" | "image" | "address" | "schedule" | "host" | "contact"
  >,
) => NewtCafe {
  return (cafe) => ({
    _id: uniqueString(),
    name: cafe.name,
    slug: cafe.slug,
    image: cafe.image,
    address: cafe.address,
    schedule: cafe.schedule,
    host: cafe.host,
    contact: cafe.contact,
    area,
  });
}

const mukoCafe = cmsCafe(cmsAreas.muko);
const tachibanaCafe = cmsCafe(cmsAreas.tachibana);
const sonodaCafe = cmsCafe(cmsAreas.sonoda);
const oshoCafe = cmsCafe(cmsAreas.osho);
const chuoCafe = cmsCafe(cmsAreas.chuo);
const odaCafe = cmsCafe(cmsAreas.oda);

export function cmsCafes(): NewtCafe[] {
  const cafes: NewtCafe[] = [];

  for (let i = 1; i <= 10; i++) {
    cafes.push(
      mukoCafe({
        name: `武庫の食堂${i}`,
        slug: `muko-cafe${uniqueString()}`,
        image: null,
        address: "尼崎市000-000-000",
        schedule: "毎週月曜日00~00",
        host: "田中太郎",
        contact: "000-0000-0000",
      }),
    );
    cafes.push(
      tachibanaCafe({
        name: `立花の食堂${i}`,
        slug: `tachibana-cafe${uniqueString()}`,
        image: null,
        address: "尼崎市000-000-000",
        schedule: "毎週月曜日00~00",
        host: "山田花子",
        contact: "000-0000-0000",
      }),
    );
    cafes.push(
      sonodaCafe({
        name: `園田の食堂${i}`,
        slug: `sonoda-cafe${uniqueString()}`,
        image: null,
        address: "尼崎市000-000-000",
        schedule: "毎週月曜日00~00",
        host: "佐藤次郎",
        contact: "000-0000-0000",
      }),
    );
    cafes.push(
      oshoCafe({
        name: `大庄の食堂${i}`,
        slug: `osho-cafe${uniqueString()}`,
        image: null,
        address: "尼崎市000-000-000",
        schedule: "毎週月曜日00~00",
        host: "中村三郎",
        contact: "000-0000-0000",
      }),
    );
    cafes.push(
      chuoCafe({
        name: `中央の食堂${i}`,
        slug: `chuo-cafe${uniqueString()}`,
        image: null,
        address: "尼崎市000-000-000",
        schedule: "毎週月曜日00~00",
        host: "鈴木四郎",
        contact: "000-0000-0000",
      }),
    );
    cafes.push(
      odaCafe({
        name: `小田の食堂${i}`,
        slug: `oda-cafe${uniqueString()}`,
        image: null,
        address: "尼崎市000-000-000",
        schedule: "毎週月曜日00~00",
        host: "伊藤五郎",
        contact: "000-0000-0000",
      }),
    );
  }

  return cafes;
}
