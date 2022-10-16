import { Spec as GeneralSpec } from "../../types/Spec";
import React from "react";
import { Renderer } from "../../renderer/Renderer";
import classes from "./Stack.module.css";
import { Former, Named } from "../../forms/Former";

export namespace Stack {
  export interface Props {
    spec: Spec;
  }

  export interface FormProps extends Named {
    spec: Spec;
  }

  export interface Spec extends GeneralSpec {
    type: "Stack";
    props: {
      content: GeneralSpec[];
    };
  }

  const makeName = (name: string, i: number) => `${name}/stack/${i}`;

  export const Component: (props: FormProps) => JSX.Element = ({
    spec,
    name,
  }) => {
    return (
      <div className={classes.container}>
        {spec.props.content.map((piece, i) => (
          <span key={i} className={classes.item} style={{ zIndex: i }}>
            <Renderer spec={piece} name={makeName(name, i)} />
          </span>
        ))}
      </div>
    );
  };

  export const Form: (props: FormProps) => JSX.Element = ({ spec, name }) => {
    return (
      <React.Fragment>
        {spec.props.content.map((piece, i) => (
          <Former spec={piece} name={makeName(name, i)} />
        ))}
      </React.Fragment>
    );
  };
}
