import { style } from "@vanilla-extract/css";

export default {
  icon: style({
    display: "inline-block",
    backgroundColor: "currentcolor",
    maskPosition: "center",
    maskRepeat: "no-repeat",
    maskSize: "contain",
    selectors: {
      "&[data-size='sm']": {
        width: "0.75rem",
        height: "0.75rem",
      },
      "&[data-size='md']": {
        width: "1rem",
        height: "1rem",
      },
      "&[data-size='lg']": {
        width: "1.25rem",
        height: "1.25rem",
      },
      "&[data-color='current']": {
        backgroundColor: "currentcolor",
      },
      "&[data-type='arrow']": {
        maskImage: "url('./assets/arrow.svg')",
      },
      "&[data-type='external']": {
        maskImage: "url('./assets/external.svg')",
      },
      "&[data-type='download']": {
        maskImage: "url('./assets/download.svg')",
      },
      "&[data-type='copy']": {
        maskImage: "url('./assets/copy.svg')",
      },
      "&[data-type='next']": {
        maskImage: "url('./assets/next.svg')",
      },
      "&[data-type='menu']": {
        maskImage: "url('./assets/menu.svg')",
      },
      "&[data-type='cancel']": {
        maskImage: "url('./assets/cancel.svg')",
      },
    },
  }),
};
