import { Spec as GeneralSpec } from "../../types/Spec";
import React from "react";
import { Renderer } from "../../renderer/Renderer";
import { Former, Named } from "../../forms/Former";
import styled from "styled-components";
import { Card, CardHeader, Typography } from "@mui/material";

export namespace GridCell {
  export interface FormProps extends Named {
    spec: Spec;
  }

  export interface Spec extends GeneralSpec {
    type: "Cell";
    props: {
      content: GeneralSpec;
      fromCol?: number;
      toCol?: number;
      fromRow?: number;
      toRow?: number;

      formTitle?: string;
    };
  }

  const makeName = (name: string) => `${name}/cell`;

  export const Component: (props: FormProps) => JSX.Element = ({
    spec,
    name,
  }) => {
    const { fromCol, toCol, fromRow, toRow } = spec.props;

    const Container = styled.div`
      width: 100%;
      height: 100%;
      overflow: hidden;
      ${fromCol ? `grid-column-start: ${fromCol};` : ""}
      ${toCol
        ? `grid-column-end: ${
            toCol && fromCol && toCol - fromCol > 0 ? "span" : ""
          } ${toCol};`
        : ""}
      ${fromRow ? `grid-row-start: ${fromRow};` : ""}
      ${toRow
        ? `grid-row-end: ${
            toRow && fromRow && toRow - fromRow > 0 ? "span" : ""
          } ${toRow};`
        : ""}
    `;

    return (
      <Container>
        <Renderer spec={spec.props.content} name={makeName(name)} />
      </Container>
    );
  };

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 5px 0;
  `;

  export const Form = ({ spec, name }: FormProps) => {
    return (
      <Container>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {spec.props.formTitle ?? makeName(name)}
        </Typography>
        <Former spec={spec.props.content} name={makeName(name)} />
      </Container>
    );
  };
}
