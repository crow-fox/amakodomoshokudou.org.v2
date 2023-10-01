export type Cafe = {
  name: string;
  slug: string;
  image: {
    src: string;
    width: number;
    height: number;
    fileName: string;
  } | null;
  area: {
    name: string;
    slug: string;
    priority: number;
  };
  address: string;
  schedule: string;
  host: string;
  contact: string;
};
