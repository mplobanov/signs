import { Spec as GeneralSpec } from "../types/Spec";
import React from "react";
import { Named } from "../forms/Former";

export namespace ColorFill {
  export interface Props {
    spec: Spec;
  }

  export interface FormProps extends Named {
    spec: Spec;
  }

  export interface Spec extends GeneralSpec {
    type: "ColorFill";
    props: {
      color: string;
    };
  }

  export const Component: (props: FormProps) => JSX.Element = ({ spec }) => {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: spec.props.color,
        }}
      />
    );
  };

  export const Form = () => {
    return <></>;
  };
}
