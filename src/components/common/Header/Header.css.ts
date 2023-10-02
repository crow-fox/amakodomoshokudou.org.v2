import { style } from "@vanilla-extract/css";

//   .nav {
//     display: none;
//   }

//   .contact {
//     display: none;
//   }

//   @media (width >= 64em) {
//     .header {
//       display: grid;
//       grid-template-areas: "logo" "nav" "contact";
//       grid-template-rows: repeat(3, auto);
//       gap: 1rem;
//       padding-block: 0;
//       overflow-y: auto;
//     }

//     .logo {
//       grid-area: logo;
//     }

//     .nav {
//       display: block;
//       grid-area: nav;
//       padding-inline: 1rem;
//     }

//     .contact {
//       display: block;
//       grid-area: contact;
//     }

//     .menu {
//       grid-area: 1 / 1;
//     }
//   }
// </style>

const header = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBlock: "0.5rem",
  "@media": {
    "screen and (min-width: 64em)": {
      display: "grid",
      gridTemplateAreas: "'logo' 'nav' 'contact'",
      gridTemplateRows: "repeat(3, auto)",
      gap: "1rem",
      paddingBlock: "0",
      overflowY: "auto",
    },
  },
});

const logo = style({
  "@media": {
    "screen and (min-width: 64em)": {
      gridArea: "logo",
    },
  },
});

const nav = style({
  display: "none",
  "@media": {
    "screen and (min-width: 64em)": {
      display: "block",
      gridArea: "nav",
      paddingInline: "1rem",
    },
  },
});

const contact = style({
  display: "none",
  "@media": {
    "screen and (min-width: 64em)": {
      display: "block",
      gridArea: "contact",
    },
  },
});

const menu = style({
  "@media": {
    "screen and (min-width: 64em)": {
      gridArea: "1 / 1",
    },
  },
});

export default {
  header,
  logo,
  nav,
  contact,
  menu,
};
