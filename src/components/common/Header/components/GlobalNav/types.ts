export type GlobalNavItem =
  | {
      type: "internal";
      title: string;
      href: `/${string}`;
      isCurrent: boolean;
      isActive: boolean;
    }
  | {
      type: "external";
      title: string;
      href: `https://${string}`;
    };
