import { Page } from "../components";
import { TextField } from "../components";
import { Align } from "../components";
import { Stack } from "../components/Stack/Stack";
import { ColorFill } from "../components/ColorFill";
import { GridBody } from "../components/Grid/GridBody";
import { GridCell } from "../components/Grid/GridCell";
import { Decoration } from "../components/Decoration";
import { FlexBody } from "../components/Flex/FlexBody";
import { Decoration2 } from "../components/Decoration2";

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
  | "Text"
  | "Align"
  | "Stack"
  | "ColorFill"
  | "Grid"
  | "Decoration"
  | "Flex"
  | "Decoration2";

export const modules: Record<
  Types,
  {
    Component: (props: any) => JSX.Element;
    Form: (props: { spec: any; name: string }) => JSX.Element;
  }
> = {
  Page: Page,
  Cell: GridCell,
  Text: TextField,
  Align: Align,
  Stack: Stack,
  ColorFill: ColorFill,
  Grid: GridBody,
  Decoration: Decoration,
  Decoration2: Decoration2,
  Flex: FlexBody,
};

export interface Spec {
  type: keyof typeof modules;
  props: unknown;
}
