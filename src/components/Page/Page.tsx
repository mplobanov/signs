import { Spec as GeneralSpec } from "../../types/Spec";
import React from "react";
import { Renderer } from "../../renderer/Renderer";
import { Former, Named } from "../../forms/Former";
import styled from "styled-components";

export namespace Page {
  export interface Props {
    spec: Spec;
  }

  export interface FormProps extends Named {
    spec: Spec;
  }

  export interface Spec extends GeneralSpec {
    type: "Page";
    props: {
      content: GeneralSpec;
      width: number;
      height: number;
      paddingRatio?: number;
    };
  }

  const makeName = (name: string) => `${name}/page`;

  export const Component: (props: FormProps) => JSX.Element = ({
    spec,
    name,
  }) => {
    const { height, width, paddingRatio } = spec.props;

    const Container = styled.div`
      width: ${width}px;
      height: ${height}px;
      box-sizing: border-box;
      border: 1px ridge rgba(0, 0, 0, 0.1);
      padding: ${height / (paddingRatio ?? 10)}px
        ${width / (paddingRatio ?? 10)}px;

      @media only print {
        position: fixed;
        top: 0;
        left: 0;
        border: none;

        @page {
          size: ${width}px ${height}px;
          margin: 0;
        }
      }
    `;

    return (
      <Container>
        <Renderer spec={spec.props.content} name={makeName(name)} />
      </Container>
    );
  };

  export const Form = ({ spec, name }: FormProps) => (
    <Former spec={spec.props.content} name={makeName(name)} />
  );
}
