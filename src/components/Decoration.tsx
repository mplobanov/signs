import { Spec as GeneralSpec } from "../types/Spec";
import React, { useContext } from "react";
import { Named } from "../forms/Former";
import { Input } from "../forms/Input";
import { SignContext } from "../pages/layout/_Layout";
import styled from "styled-components";

export namespace Decoration {
  export interface FormProps extends Named {
    spec: Spec;
  }

  export interface Spec extends GeneralSpec {
    type: "Decoration";
    props: {
      size: number;
      getColor?: (i: number, j: number) => "orange" | "blue" | "white";
    };
  }

  const makeName = (name: string) => `${name}/decoration`;

  const Cell = (props: { i: number; j: number }) => {
    const { i, j } = props;
    const Dv = styled.div`
      width: 100%;
      height: 100%;
      background: ${(i + j) % 2 === 0 && j >= i
        ? i % 2 === 0
          ? "rgba(171,187,234, 1)"
          : "rgba(241,163,100, 1)"
        : "rgba(0, 0, 0, 0)"};
    `;
    return <Dv />;
  };

  export const Component: (props: FormProps) => JSX.Element = ({
    name,
    spec,
  }) => {
    const { size } = spec.props;

    const Container = styled.div`
      display: grid;
      grid-template-columns: repeat(${size}, 1fr);
      grid-template-rows: repeat(${size}, 1fr);
      height: 100%;
      aspect-ratio: 1;
    `;

    const mp = [];
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        mp.push(<Cell i={i} j={j} />);
      }
    }

    return <Container>{mp}</Container>;
  };

  export const Form = ({ spec, name }: FormProps) => <></>;
}
