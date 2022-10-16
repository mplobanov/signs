import { Spec as GeneralSpec } from "../../types/Spec";
import React from "react";
import { Renderer } from "../../renderer/Renderer";
import { Former, Named } from "../../forms/Former";
import styled from "styled-components";

export namespace FlexBody {
  export interface FormProps extends Named {
    spec: Spec;
  }

  export interface Spec extends GeneralSpec {
    type: "Flex";
    props: {
      content: GeneralSpec[];
      direction: "row" | "column";
      gap?: number;
      horizontal: "flex-start" | "flex-end" | "center";
      vertical: "flex-start" | "flex-end" | "center";
    };
  }

  const makeName = (name: string, i: number) => `${name}/grid/${i}`;

  export const Component: (props: FormProps) => JSX.Element = ({
    spec,
    name,
  }) => {
    const { gap, direction, horizontal, vertical } = spec.props;

    const Container = styled.div`
      display: flex;
      flex-direction: ${direction};
      ${gap ? `gap: ${gap}px;` : ""}
      align-items: ${vertical};
      justify-content: ${horizontal};
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
    display: flex;
    flex-direction: column;
    gap: 20px;
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
