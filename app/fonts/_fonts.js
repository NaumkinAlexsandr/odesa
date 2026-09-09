import localFont from "next/font/local";

export const caveat = localFont({
  src: [
    { path: "./Caveat-Regular.ttf", weight: "400", style: "normal" },
    { path: "./Caveat-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-caveat",
});

export const greatVibes = localFont({
  src: [{ path: "./GreatVibes-Regular.ttf", weight: "400", style: "normal" }],
  variable: "--font-greatVibes",
});

export const georgia = localFont({
  src: [
    {
      path: "./GeorgiaPro-CondRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./GeorgiaPro-CondItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./GeorgiaPro-CondBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./GeorgiaPro-CondBoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-georgia",
  display: "swap",
});
