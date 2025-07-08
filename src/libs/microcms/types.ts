export type MicroCMSArea = {
  id: string;
  name: string;
  slug: string;
  priority: number;
};

export type MicroCMSCafe = {
  id: string;
  name: string;
  slug: string;
  image:
    | {
        url: string;
        width: number;
        height: number;
      }
    | undefined;
  area: MicroCMSArea;
  address: string;
  schedule: string;
  host: string;
  contact: string | undefined;
};
