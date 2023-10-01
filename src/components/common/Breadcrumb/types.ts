export type BreadcrumbParentItem = {
  title: string;
  href: string;
};

export type BreadcrumbCurrentItem = {
  title: string;
};

export type BreadcrumbItems = [
  ...BreadcrumbParentItem[],
  BreadcrumbCurrentItem,
];
