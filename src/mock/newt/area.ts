import type { NewtArea } from "../../libs/newt/types";

const mukoArea = {
  _id: "1",
  name: "武庫",
  slug: "muko",
  priority: 1,
} as const satisfies NewtArea;

const tachibanaArea = {
  _id: "2",
  name: "立花",
  slug: "tachibana",
  priority: 2,
} as const satisfies NewtArea;

const sonodaArea = {
  _id: "3",
  name: "園田",
  slug: "sonoda",
  priority: 3,
} as const satisfies NewtArea;

const oshoArea = {
  _id: "4",
  name: "大庄",
  slug: "osho",
  priority: 4,
} as const satisfies NewtArea;

const chuoArea = {
  _id: "5",
  name: "中央",
  slug: "chuo",
  priority: 5,
} as const satisfies NewtArea;

const odaArea = {
  _id: "6",
  name: "小田",
  slug: "oda",
  priority: 6,
} as const satisfies NewtArea;

export const cmsAreas = {
  muko: mukoArea,
  tachibana: tachibanaArea,
  sonoda: sonodaArea,
  osho: oshoArea,
  chuo: chuoArea,
  oda: odaArea,
} as const;
