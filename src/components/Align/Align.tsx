import { Spec as GeneralSpec } from "../../types/Spec";
import { Renderer } from "../../renderer/Renderer";
import React from "react";
import classes from "./Align.module.css";
import { Former, Named } from "../../forms/Former";

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
    };
  }

  const makeName = (name: string) => `${name}/align`;

  export const Component: (props: AlignFormProps) => JSX.Element = ({
    spec,
    name,
  }) => {
    return (
      <div className={classes.container}>
        <Renderer spec={spec.props.content} name={makeName(name)} />
      </div>
    );
  };

  export const Form = ({ spec, name }: AlignFormProps) => {
    return <Former spec={spec.props.content} name={makeName(name)} />;
  };
}
