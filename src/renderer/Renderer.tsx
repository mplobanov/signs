import { modules, Spec } from "../types/Spec";
import { Named } from "../forms/Former";

export interface RendererProps extends Named {
  spec: Spec;
}

export const Renderer = ({ spec, name }: RendererProps) => {
  const Component = modules[spec.type].Component;
  return <Component spec={spec} name={name} />;
};
