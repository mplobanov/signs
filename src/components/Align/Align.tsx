import { Spec as GeneralSpec } from "../../types/Spec";
import { Renderer } from "../../renderer/Renderer";
import React from "react";
import classes from "./Align.module.css";
import { Former, Named } from "../../forms/Former";
import styled from "styled-components";

export namespace Align {
  export interface AlignProps {
    spec: Spec;
  }

  export interface AlignFormProps extends Named {
    spec: Spec;
  }

  export interface Spec extends GeneralSpec {
    type: "Align";
    props: {
      content: GeneralSpec;
      horizontal: "flex-start" | "flex-end" | "center";
      vertical: "flex-start" | "flex-end" | "center";
    };
  }

  const makeName = (name: string) => `${name}/align`;

  export const Component: (props: AlignFormProps) => JSX.Element = ({
    spec,
    name,
  }) => {
    const { horizontal, vertical } = spec.props;

    const Container = styled.div`
      display: flex;
      height: 100%;
      width: 100%;
      align-items: ${vertical};
      justify-content: ${horizontal};
    `;

    return (
      <Container className={classes.container}>
        <Renderer spec={spec.props.content} name={makeName(name)} />
      </Container>
    );
  };

  export const Form = ({ spec, name }: AlignFormProps) => {
    return <Former spec={spec.props.content} name={makeName(name)} />;
  };
}
