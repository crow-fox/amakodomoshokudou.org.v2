import dotenv from "dotenv";
import { HttpResponse, http } from "msw";
import { type CMSArea, cmsAreas } from "./area";
import { type CMSCafe, cmsCafes } from "./cafe";

// 環境変数を読み込む（./env ファイルを参照）
dotenv.config();

function newtUrl(path: `/${string}`): string {
  const baseUrl = `https://${process.env.NEWT_SPACE_UID}.cdn.newt.so/`;
  return new URL(`/v1${path}`, baseUrl).toString();
}

export const handlers = [
  http.get(newtUrl("/cafes/cafe"), ({ request }) => {
    const url = new URL(request.url);
    const searchParams = url.searchParams;

    if (
      searchParams.get("select") !==
      "_id,name,slug,image,area,address,schedule,host,contact"
    ) {
      console.error("select is invalid");
      return HttpResponse.json({}, { status: 400 });
    }

    if (searchParams.get("area")) {
      // 特定のareaのcafeの一覧を取得
      const items = cmsCafes().filter(
        (item: CMSCafe) => item.area._id === searchParams.get("area"),
      );
      return HttpResponse.json({
        skip: 0,
        limit: 100,
        total: items.length,
        items,
      });
    }

    // 全てのcafeの一覧を取得
    const items = cmsCafes();
    return HttpResponse.json({
      skip: 0,
      limit: 100,
      total: items.length,
      items,
    });
  }),

  http.get(newtUrl("/cafes/area"), ({ request }) => {
    const url = new URL(request.url);
    const searchParams = url.searchParams;

    if (searchParams.get("select") !== "_id,name,slug,priority") {
      console.error("select is invalid");
      return HttpResponse.json({}, { status: 400 });
    }

    if (searchParams.get("order") !== "priority") {
      console.error("order is invalid");
      return HttpResponse.json({}, { status: 400 });
    }

    const items: CMSArea[] = Object.values(cmsAreas);
    return HttpResponse.json({
      skip: 0,
      limit: 100,
      total: items.length,
      items,
    });
  }),
];
