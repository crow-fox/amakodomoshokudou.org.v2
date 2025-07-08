import { HttpResponse, http } from "msw";
import type { MicroCMSArea } from "../../libs/microcms/types";
import { microcmsAreas } from "./area";
import { microcmsCafes } from "./cafe";

function microcmsUrlRegExp(endpoint: string): RegExp {
  // process.env.MICROCMS_SERVICE_DOMAINを使うと、dotenvの読み込みが不安定だったので、正規表現で対応
  // サービスドメインは、スラッシュ (/) を含まない文字が１文字以上連続
  const serviceDomainPattern = "[^/]+";
  return new RegExp(
    `^https://${serviceDomainPattern}\\.microcms\\.io/api/v1/${endpoint}$`,
  );
}

export const microcmsHandlers = [
  http.get(microcmsUrlRegExp("cafes"), ({ request }) => {
    const url = new URL(request.url);
    const searchParams = url.searchParams;

    if (
      searchParams.get("fields") !==
      "id,name,slug,image,area,address,schedule,host,contact"
    ) {
      console.error("fields is invalid");
      return HttpResponse.json({}, { status: 400 });
    }

    if (searchParams.get("filters")) {
      // 特定のareaのcafeの一覧を取得
      const areaId = searchParams.get("filters")?.replace("area[equals]", "");
      if (!areaId) {
        console.error("areaId is missing in filters");
        return HttpResponse.json({}, { status: 400 });
      }

      const contents = microcmsCafes().filter(
        (cafe) => cafe.area.id === areaId,
      );
      return HttpResponse.json({
        contents,
      });
    }

    // 全てのcafeの一覧を取得
    return HttpResponse.json({
      contents: microcmsCafes(),
    });
  }),

  http.get(microcmsUrlRegExp("areas"), ({ request }) => {
    const url = new URL(request.url);
    const searchParams = url.searchParams;

    if (searchParams.get("fields") !== "id,name,slug,priority") {
      console.error("fields is invalid");
      return HttpResponse.json({}, { status: 400 });
    }

    if (searchParams.get("orders") !== "priority") {
      console.error("orders is invalid");
      return HttpResponse.json({}, { status: 400 });
    }

    return HttpResponse.json({
      contents: Object.values(microcmsAreas) satisfies MicroCMSArea[],
    });
  }),
];
