import { Spec as GeneralSpec } from "../../types/Spec";
import React from "react";
import { Renderer } from "../../renderer/Renderer";
import { Former, Named } from "../../forms/Former";
import styled from "styled-components";

export namespace GridBody {
  export interface FormProps extends Named {
    spec: Spec;
  }

  export interface Spec extends GeneralSpec {
    type: "Grid";
    props: {
      content: GeneralSpec[];
      cols: number;
      rows: number;
      rowGap?: number;
      colGap?: number;
    };
  }

  const makeName = (name: string, i: number) => `${name}/grid/${i}`;

  export const Component: (props: FormProps) => JSX.Element = ({
    spec,
    name,
  }) => {
    const { cols, rows, rowGap, colGap } = spec.props;

    const Container = styled.div`
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(${cols}, 1fr);
      grid-template-rows: repeat(${rows}, 1fr);
      ${colGap ? `column-gap: ${colGap}px;` : ""}
      ${rowGap ? `row-gap: ${rowGap}px;` : ""}
    `;

    return (
      <Container>
        {spec.props.content.map((cell, i) => (
          <Renderer spec={cell} name={makeName(name, i)} key={i} />
        ))}
      </Container>
    );
  };

  const Div = styled.div`
    margin-left: 10px;
  `;

  export const Form = ({ spec, name }: FormProps) => {
    return (
      <React.Fragment>
        <Div>
          {spec.props.content.map((cell, i) => (
            <Former spec={cell} name={makeName(name, i)} />
          ))}
        </Div>
      </React.Fragment>
    );
  };
}
