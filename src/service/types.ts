export type NewtSys = {
  createdAt: string;
  updatedAt: string;
  raw: {
    createdAt: string;
    updatedAt: string;
    firstPublishedAt: string;
    publishedAt: string;
  };
};

export type NewtArea = {
  _id: string;
  _sys: NewtSys;
  name: string;
  slug: string;
  priority: number;
};

export type NewtCafe = {
  _id: string;
  _sys: NewtSys;
  name: string;
  slug: string;
  image: {
    src: string;
    width: number;
    height: number;
    fileName: string;
  } | null;
  area: NewtArea;
  address: string;
  schedule: string;
  host: string;
  contact: string;
};
