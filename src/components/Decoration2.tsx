import { Spec as GeneralSpec } from "../types/Spec";
import React, { useContext } from "react";
import { Named } from "../forms/Former";
import { Input } from "../forms/Input";
import { SignContext } from "../pages/layout/_Layout";
import styled from "styled-components";

export namespace Decoration2 {
  export interface FormProps extends Named {
    spec: Spec;
  }

  export interface Spec extends GeneralSpec {
    type: "Decoration2";
    props: {
      size: number;
      height: number;
      getColor?: (i: number, j: number) => "orange" | "blue" | "white";
    };
  }

  const makeName = (name: string) => `${name}/decoration`;

  const Cell = (props: { i: number; j: number }) => {
    const { i, j } = props;
    const Dv = styled.div`
      height: 100%;
      aspect-ratio: 1;
      background: ${j % 2 === 0
        ? "rgba(171,187,234, 0.5)"
        : "rgba(241,163,100, 0.5)"};
    `;
    return <Dv />;
  };

  export const Component: (props: FormProps) => JSX.Element = ({
    name,
    spec,
  }) => {
    const { size, height } = spec.props;

    const Container = styled.div`
      display: grid;
      grid-template-columns: repeat(${size}, 1fr);
      grid-template-rows: 1fr;
      height: ${height}px;
      gap: 10px;
    `;

    const mp = [];
    for (let i = 0; i < 1; i++) {
      for (let j = 0; j < size; j++) {
        mp.push(<Cell i={i} j={j} />);
      }
    }

    return <Container>{mp}</Container>;
  };

  export const Form = ({ spec, name }: FormProps) => <></>;
}
