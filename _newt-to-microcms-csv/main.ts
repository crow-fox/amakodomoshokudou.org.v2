import * as v from "valibot";
import { createClient } from "newt-client-js";
import fs from "node:fs";
import { config } from "dotenv";

// NewtからmicroCMSへ移行するための処理を書いたscript
// 地区と食堂の情報をNewtから取得し、microCMSが要求するCSV形式で出力する
// 画像の処理は複雑になるのでのちに手動で設定する
// 移行が完了したのち、このscriptは削除する

// 動作command: pnpm tsx _contents-export/main.ts

config({ path: ".env" });

const NEWT_SPACE_UID =
  process.env.NEWT_SPACE_UID ??
  (() => {
    throw new Error("NEWT_SPACE_UID is not defined in .env file");
  })();

const NEWT_CDN_API_TOKEN =
  process.env.NEWT_CDN_API_TOKEN ??
  (() => {
    throw new Error("NEWT_CDN_API_TOKEN is not defined in .env file");
  })();

const newtClient = createClient({
  spaceUid: NEWT_SPACE_UID,
  token: NEWT_CDN_API_TOKEN,
  apiType: "cdn",
  fetch: fetch,
});

const newtAreaSchema = v.object({
  _id: v.string(),
  name: v.string(),
  slug: v.string(),
  priority: v.number(),
});

type NewtArea = v.InferOutput<typeof newtAreaSchema>;

async function fetchAreas(): Promise<NewtArea[]> {
  const { items } = await newtClient.getContents({
    appUid: "cafes",
    modelUid: "area",
  });

  const areas = v.parse(v.array(newtAreaSchema), items);
  const sortedAreas = areas.sort((a, b) => a.priority - b.priority);
  return sortedAreas;
}

// 取得したareasをcsv形式で出力する
// _idは空欄にしておけば、microCMS側でimportした時に自動で設定されるが、cafeと紐付ける時にidが必要なので、Newtの_idをそのまま使う
// _id, name, slug, priority
function exportAreas(areas: NewtArea[]): void {
  const csvRows = areas.map((area) => {
    return `${area._id},${area.name},${area.slug},${area.priority}`;
  });
  csvRows.unshift("_id,name,slug,priority"); // ヘッダー行を追加
  const csvContent = csvRows.join("\n");
  fs.writeFileSync("./_contents-export/areas.csv", csvContent, "utf8");
}

const newtCafeSchema = v.object({
  _id: v.string(),
  name: v.string(),
  slug: v.string(),
  area: v.object({
    _id: v.string(),
  }),
  image: v.nullable(v.object({ fileName: v.string() })), // 画像は自動的な移行が難しいので、後で管理画面から手動で設定するので適当
  address: v.string(),
  schedule: v.string(),
  host: v.string(),
  contact: v.string(),
});

type NewtCafe = v.InferOutput<typeof newtCafeSchema>;

async function fetchCafes(): Promise<NewtCafe[]> {
  const { items } = await newtClient.getContents({
    appUid: "cafes",
    modelUid: "cafe",
  });

  const cafes = v.parse(v.array(newtCafeSchema), items);

  return cafes;
}

// 取得したcafesをcsv形式で出力する
// _id, name, slug, image, area, address, schedule, host, contact
// imageは手動で設定するので、空欄にする
// _idは空欄にして、microCMS側の自動生成IDを使う
// areaは、_idを使ってareaと紐付ける
function exportCafes(cafes: NewtCafe[]): void {
  const csvRows = cafes.map((cafe) => {
    // 画像は手動で設定するので、imageは空欄にする
    // _食堂のIDは空欄にして、microCMS側の自動生成IDを使う
    return `,${cafe.name},${cafe.slug},,${cafe.area._id},${cafe.address},${cafe.schedule},${cafe.host},${cafe.contact}`;
  });
  csvRows.unshift("_id,name,slug,image,area,address,schedule,host,contact"); // ヘッダー行を追加
  const csvContent = csvRows.join("\n");
  fs.writeFileSync("./_contents-export/cafes.csv", csvContent, "utf8");
}

async function main() {
  const areas = await fetchAreas();
  exportAreas(areas);
  console.log("Areas exported to CSV successfully.");

  const cafes = await fetchCafes();
  exportCafes(cafes);
  console.log("Cafes exported to CSV successfully.");
}

main().catch((error) => {
  console.error("Error exporting data:", error);
});
