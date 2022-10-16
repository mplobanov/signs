import { Layout } from "./layout/_Layout";
import { TextField, Page, Align } from "../components";
import { ColorFill } from "../components/ColorFill";
import { Stack } from "../components/Stack/Stack";
import { GridBody } from "../components/Grid/GridBody";
import { GridCell } from "../components/Grid/GridCell";

const TextSpec: (i: number) => TextField.Spec = (i) => ({
  type: "Text",
  props: { formTitle: `текст ${i + 1}`, size: 20 },
});

const getSt = (i: number) => {
  const st: Stack.Spec = {
    type: "Stack",
    props: {
      content: [
        {
          type: "ColorFill",
          props: { color: `rgba(255, 192, 203, ${i / 12})` },
        } as ColorFill.Spec,
        TextSpec(i),
      ],
    },
  };
  return st;
};

const table: GridBody.Spec = {
  type: "Grid",
  props: {
    rows: 4,
    cols: 3,
    colGap: 10,
    rowGap: 10 * Math.sqrt(2),
    content: Array.apply(null, Array(4 * 3)).map(
      (v, i) =>
        ({
          type: "Cell",
          props: {
            content: getSt(i),
          },
        } as GridCell.Spec)
    ),
  },
};

const stack: Stack.Spec = {
  type: "Stack",
  props: {
    content: [
      {
        type: "ColorFill",
        props: { color: "rgba(255, 192, 203, 0.2)" },
      } as ColorFill.Spec,
      table,
    ],
  },
};

const Page2: Page.Spec = {
  type: "Page",
  props: {
    content: stack,
    width: 500,
    height: 500 * Math.sqrt(2),
  },
};

const Align1: Align.Spec = {
  type: "Align",
  props: {
    content: Page2,
    vertical: "center",
    horizontal: "center",
  },
};

export const Basic = () => {
  return <Layout spec={Align1} formTitle={"Basic Form"} />;
};
