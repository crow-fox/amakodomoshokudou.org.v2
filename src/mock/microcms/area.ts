import type { MicroCMSArea } from "../../libs/microcms/types";

const mukoArea = {
  id: "1",
  name: "武庫",
  slug: "muko",
  priority: 1,
} as const satisfies MicroCMSArea;

const tachibanaArea = {
  id: "2",
  name: "立花",
  slug: "tachibana",
  priority: 2,
} as const satisfies MicroCMSArea;

const sonodaArea = {
  id: "3",
  name: "園田",
  slug: "sonoda",
  priority: 3,
} as const satisfies MicroCMSArea;

const oshoArea = {
  id: "4",
  name: "大庄",
  slug: "osho",
  priority: 4,
} as const satisfies MicroCMSArea;

const chuoArea = {
  id: "5",
  name: "中央",
  slug: "chuo",
  priority: 5,
} as const satisfies MicroCMSArea;

const odaArea = {
  id: "6",
  name: "小田",
  slug: "oda",
  priority: 6,
} as const satisfies MicroCMSArea;

export const microcmsAreas = {
  muko: mukoArea,
  tachibana: tachibanaArea,
  sonoda: sonodaArea,
  osho: oshoArea,
  chuo: chuoArea,
  oda: odaArea,
} as const;
