import React from "react";
import { modules, Spec } from "../types/Spec";

export interface FormProps {
  spec: Spec;
  name: string;
}

export interface Named {
  name: string;
}

export const Former = ({ spec, name }: FormProps) => {
  const FormComponent = modules[spec.type].Form;
  return <FormComponent spec={spec} name={name} />;
};
