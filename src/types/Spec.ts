import { Page } from "../components";
import { TextField } from "../components";
import { Align } from "../components";
import { Stack } from "../components/Stack/Stack";
import { ColorFill } from "../components/ColorFill";

export const exampleSpec = {
  type: "Page",
  props: {
    content: {
      type: "Grid4x3",
      props: {
        cells: [
          {
            type: "Cell",
            props: {
              columnStart: 1,
              columnEnd: 3,
              content: {
                type: "Column",
                props: {
                  content: [
                    {
                      type: "Text",
                      props: {
                        size: 20,
                      },
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    },
  },
};

export type Types =
  | "Page"
  | "Cell"
  | "Grid4x3"
  | "Text"
  | "Align"
  | "Stack"
  | "ColorFill";

export const modules: Record<
  Types,
  {
    Component: (props: any) => JSX.Element;
    Form: (props: { spec: any; name: string }) => JSX.Element;
  }
> = {
  Page: Page,
  Grid4x3: Page,
  Cell: Page,

  Text: TextField,
  Align: Align,
  Stack: Stack,
  ColorFill: ColorFill,
};

export interface Spec {
  type: keyof typeof modules;
  props: unknown;
}
