export type CMSArea = {
  _id: string;
  _sys: unknown; // 使用する予定がないためunknown
  name: string;
  slug: string;
  priority: number;
};

const mukoArea = {
  _id: "1",
  _sys: {},
  name: "武庫",
  slug: "muko",
  priority: 1,
} as const satisfies CMSArea;

const tachibanaArea = {
  _id: "2",
  _sys: {},
  name: "立花",
  slug: "tachibana",
  priority: 2,
} as const satisfies CMSArea;

const sonodaArea = {
  _id: "3",
  _sys: {},
  name: "園田",
  slug: "sonoda",
  priority: 3,
} as const satisfies CMSArea;

const oshoArea = {
  _id: "4",
  _sys: {},
  name: "大庄",
  slug: "osho",
  priority: 4,
} as const satisfies CMSArea;

const chuoArea = {
  _id: "5",
  _sys: {},
  name: "中央",
  slug: "chuo",
  priority: 5,
} as const satisfies CMSArea;

const odaArea = {
  _id: "6",
  _sys: {},
  name: "小田",
  slug: "oda",
  priority: 6,
} as const satisfies CMSArea;

export const cmsAreas = {
  muko: mukoArea,
  tachibana: tachibanaArea,
  sonoda: sonodaArea,
  osho: oshoArea,
  chuo: chuoArea,
  oda: odaArea,
} as const;
