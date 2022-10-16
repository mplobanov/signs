import { Spec as GeneralSpec } from "../types/Spec";
import React from "react";
import { Renderer } from "../renderer/Renderer";
import { Former, Named } from "../forms/Former";

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
    };
  }

  const makeName = (name: string) => `${name}/page`;

  export const Component: (props: FormProps) => JSX.Element = ({
    spec,
    name,
  }) => {
    return (
      <div>
        Page1: <Renderer spec={spec.props.content} name={makeName(name)} />
      </div>
    );
  };

  export const Form = ({ spec, name }: FormProps) => (
    <Former spec={spec.props.content} name={makeName(name)} />
  );
}
