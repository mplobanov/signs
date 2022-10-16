import { Spec as GeneralSpec } from "../types/Spec";
import React, { useContext } from "react";
import { Named } from "../forms/Former";
import { Input } from "../forms/Input";
import { SignContext } from "../pages/layout/_Layout";

export namespace TextField {
  export interface Props {
    spec: Spec;
  }

  export interface FormProps extends Named {
    spec: Spec;
  }

  export interface Spec extends GeneralSpec {
    type: "Text";
    props: {
      formTitle: string;
    };
  }

  const makeName = (name: string) => `${name}/text`;

  export const Component: (props: FormProps) => JSX.Element = ({
    name,
  }) => {
    const vals = useContext(SignContext);

    return <div>{vals[makeName(name)]}</div>;
  };

  export const Form = ({ spec, name }: FormProps) => (
    <Input name={makeName(name)} title={spec.props.formTitle} />
  );
}
