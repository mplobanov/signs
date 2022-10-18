import { Layout } from "./layout/_Layout";
import { TextField, Page, Align } from "../components";
import { Stack } from "../components/Stack/Stack";
import { GridBody } from "../components/Grid/GridBody";
import { GridCell } from "../components/Grid/GridCell";
import { Decoration } from "../components/Decoration";
import { FlexBody } from "../components/Flex/FlexBody";

const ratio = Math.sqrt(2);
const w = 500;

const getCell = (i: number) => {
  const cell: GridCell.Spec = {
    type: "Cell",
    props: {
      content: {
        type: "Flex",
        props: {
          direction: "column",
          gap: 10,
          content: [
            {
              type: "Text",
              props: {
                formTitle: `Заголовок`,
                weight: 700,
                size: 12,
              },
            } as TextField.Spec,
            {
              type: "Text",
              props: {
                formTitle: `Описание`,
                size: 9,
              },
            } as TextField.Spec,
          ],
        },
      } as FlexBody.Spec,
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
      type: "Grid",
      props: {
        rows: 4,
        cols: 3,
        rowGap: 18,
        colGap: 18 / ratio,
        content: [
          {
            type: "Cell",
            props: {
              fromCol: 1,
              toCol: 3,
              formTitle: "Верхняя строчка",
              content: header,
            },
          } as GridCell.Spec,
          {
            type: "Cell",
            props: {
              formTitle: "Расписание",
              content: timetable,
            },
          } as GridCell.Spec,
        ].concat(
          Array.apply(null, Array(3 * 3 - 1)).map((v, i) => {
            return getCell(i);
          })
        ),
      },
    } as GridBody.Spec,
    width: w,
    height: w * ratio,
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

// export const Gym = () => {
//   return <Layout spec={Centered} formTitle={"Качалка"} />;
// };
