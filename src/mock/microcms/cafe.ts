import { randomUUID } from "node:crypto";
import type { MicroCMSArea, MicroCMSCafe } from "../../libs/microcms/types";
import { microcmsAreas } from "./area";

function uniqueString(): string {
  return randomUUID();
}

function microcmsCafe(
  area: MicroCMSArea,
): (
  cafe: Pick<
    MicroCMSCafe,
    "name" | "slug" | "image" | "address" | "schedule" | "host" | "contact"
  >,
) => MicroCMSCafe {
  return (cafe) => ({
    id: uniqueString(),
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

const mukoCafe = microcmsCafe(microcmsAreas.muko);
const tachibanaCafe = microcmsCafe(microcmsAreas.tachibana);
const sonodaCafe = microcmsCafe(microcmsAreas.sonoda);
const oshoCafe = microcmsCafe(microcmsAreas.osho);
const chuoCafe = microcmsCafe(microcmsAreas.chuo);
const odaCafe = microcmsCafe(microcmsAreas.oda);

export function microcmsCafes(): MicroCMSCafe[] {
  const cafes: MicroCMSCafe[] = [];

  for (let i = 1; i <= 10; i++) {
    cafes.push(
      mukoCafe({
        name: `武庫の食堂${i}`,
        slug: `muko-cafe${uniqueString()}`,
        image: undefined,
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
        image: undefined,
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
        image: undefined,
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
        image: undefined,
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
        image: undefined,
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
        image: undefined,
        address: "尼崎市000-000-000",
        schedule: "毎週月曜日00~00",
        host: "伊藤五郎",
        contact: "000-0000-0000",
      }),
    );
  }

  return cafes;
}
