import { HttpResponse, http } from "msw";
import { newtAreas } from "./area";
import { newtCafes } from "./cafe";
import type { NewtArea, NewtCafe } from "../../libs/newt/types";

function newtUrlRegExp(endpoint: string): RegExp {
  // process.env.NEWT_SPACE_UIDを使うと、dotenvの読み込みが不安定だったので、正規表現で対応
  const spaceUidRegExp = "[^/]+"; // (/) を含まない文字が１文字以上連続
  return new RegExp(
    `^https://${spaceUidRegExp}\\.cdn\\.newt\\.so/v1/${endpoint}$`,
  );
}

export const handlers = [
  http.get(newtUrlRegExp("cafes/cafe"), ({ request }) => {
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
      const items = newtCafes().filter(
        (item: NewtCafe) => item.area._id === searchParams.get("area"),
      );
      return HttpResponse.json({
        skip: 0,
        limit: 100,
        total: items.length,
        items,
      });
    }

    // 全てのcafeの一覧を取得
    const items = newtCafes();
    return HttpResponse.json({
      skip: 0,
      limit: 100,
      total: items.length,
      items,
    });
  }),

  http.get(newtUrlRegExp("cafes/area"), ({ request }) => {
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

    const items: NewtArea[] = Object.values(newtAreas);
    return HttpResponse.json({
      skip: 0,
      limit: 100,
      total: items.length,
      items,
    });
  }),
];
