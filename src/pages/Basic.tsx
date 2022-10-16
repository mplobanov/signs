import { Layout } from "./layout/_Layout";
import { TextField, Page, Align } from "../components";
import { ColorFill } from "../components/ColorFill";
import { Stack } from "../components/Stack/Stack";

const TextSpec: TextField.Spec = {
  type: "Text",
  props: { formTitle: "текстуха" },
};

const Page1: Page.Spec = {
  type: "Page",
  props: {
    content: TextSpec,
  },
};

const Page2: Page.Spec = {
  type: "Page",
  props: {
    content: Page1,
  },
};

const Align1: Align.Spec = {
  type: "Align",
  props: {
    content: Page2,
  },
};

const ColorFill1: ColorFill.Spec = {
  type: "ColorFill",
  props: {
    color: "rgba(150, 0, 150, 0.2)",
  },
};

const Stack1: Stack.Spec = {
  type: "Stack",
  props: {
    content: [ColorFill1, Align1],
  },
};

export const Basic = () => {
  return <Layout spec={Stack1} formTitle={"Basic Form"} />;
};
