export type NewtArea = {
  _id: string;
  name: string;
  slug: string;
  priority: number;
};

export type NewtCafe = {
  _id: string;
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
