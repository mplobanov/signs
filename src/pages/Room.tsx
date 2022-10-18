import { Layout } from "./layout/_Layout";
import { TextField, Page, Align } from "../components";
import { Stack } from "../components/Stack/Stack";
import { GridBody } from "../components/Grid/GridBody";
import { GridCell } from "../components/Grid/GridCell";
import { Decoration } from "../components/Decoration";
import { FlexBody } from "../components/Flex/FlexBody";
import { Decoration2 } from "../components/Decoration2";

const ratio = Math.sqrt(2);
const w = 500;

const getCell = (i: number) => {
  const cell: GridCell.Spec = {
    type: "Cell",
    props: {
      content: {
        type: "Grid",
        props: {
          cols: 1,
          rows: 4,
          rowGap: 0,
          content: [
            {
              type: "Cell",
              props: {
                fromRow: 1,
                toRow: 1,
                content: {
                  type: "Text",
                  props: {
                    formTitle: `Заголовок`,
                    weight: 700,
                    size: 12,
                  },
                } as TextField.Spec,
              },
            } as GridCell.Spec,
            {
              type: "Cell",
              props: {
                content: {
                  type: "Stack",
                  props: {
                    content: [
                      // {
                      //   type: "ColorFill",
                      //   props: {
                      //     color: "lime",
                      //   },
                      // } as ColorFill.Spec,
                      {
                        type: "Text",
                        props: {
                          formTitle: `Описание`,
                          size: 9,
                        },
                      } as TextField.Spec,
                    ],
                  },
                } as Stack.Spec,
                fromRow: 2,
                toRow: 4,
              },
            } as GridCell.Spec,
          ],
        },
      } as GridBody.Spec,
      formTitle: `Карточка ${i + 1}`,
    },
  };
  return cell;
};

const header: Stack.Spec = {
  type: "Stack",
  props: {
    content: [
      {
        type: "Align",
        props: {
          content: {
            type: "Decoration",
            props: {
              size: 4,
            },
          } as Decoration.Spec,
          vertical: "center",
          horizontal: "flex-end",
        },
      } as Align.Spec,

      {
        type: "Text",
        props: {
          formTitle: "Заголовок",
          size: 90,
          weight: 700,
        },
      } as TextField.Spec,
    ],
  },
};

const bigCell = (from: number, to: number, prefix: string) =>
  ({
    type: "Cell",
    props: {
      content: {
        type: "Align",
        props: {
          content: {
            type: "Text",
            props: { formTitle: `${prefix} работы`, size: 50, weight: 700 },
          } as TextField.Spec,
          vertical: "center",
          horizontal: "center",
        },
      } as Align.Spec,
      fromRow: from,
      toRow: to,
    },
  } as GridCell.Spec);

const timetable: GridBody.Spec = {
  type: "Grid",
  props: {
    rows: 5,
    cols: 1,
    content: [
      bigCell(1, 2, "Начало"),
      bigCell(3, 4, "Конец"),

      {
        type: "Cell",
        props: {
          content: {
            type: "Align",
            props: {
              content: {
                type: "Text",
                props: { formTitle: `Дни недели`, size: 14, weight: 500 },
              } as TextField.Spec,
              vertical: "center",
              horizontal: "center",
            },
          } as Align.Spec,
        },
      } as GridCell.Spec,
    ],
  },
};

const Page1: Page.Spec = {
  type: "Page",
  props: {
    content: {
      type: "Align",
      props: {
        vertical: "center",
        horizontal: "flex-start",
        content: {
          type: "Flex",
          props: {
            direction: "column",
            gap: 0,
            horizontal: "center",
            vertical: "flex-start",
            content: [
              {
                type: "Decoration2",
                props: {
                  size: 7,
                  height: 20,
                },
              } as Decoration2.Spec,
              {
                type: "Text",
                props: {
                  formTitle: "Комната",
                  size: 90,
                  weight: 700,
                },
              } as TextField.Spec,
              {
                type: "Flex",
                props: {
                  direction: "row",
                  gap: 30,
                  horizontal: "center",
                  vertical: "flex-start",
                  content: [
                    {
                      type: "Text",
                      props: {
                        formTitle: "Ответственный",
                        size: 20,
                        weight: 500,
                      },
                    } as TextField.Spec,
                    {
                      type: "Text",
                      props: {
                        formTitle: "Телеграм",
                        size: 15,
                        weight: 500,
                        alignSelf: "center",
                        icon: "telegram",
                      },
                    } as TextField.Spec,
                    {
                      type: "Text",
                      props: {
                        formTitle: "ВК",
                        size: 15,
                        weight: 500,
                        alignSelf: "center",
                        icon: "vk",
                      },
                    } as TextField.Spec,
                  ],
                },
              } as FlexBody.Spec,
            ],
          },
        } as FlexBody.Spec,
      },
    } as Align.Spec,
    width: w,
    height: (w * ratio) / 3,
  },
};

const Centered: Align.Spec = {
  type: "Align",
  props: {
    content: Page1,
    horizontal: "center",
    vertical: "center",
  },
};

// export const Room = () => {
//   return <Layout spec={Centered} formTitle={"Комната"} />;
// };
