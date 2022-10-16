import { useContext, useEffect } from "react";
import { SignContext, ValueNames } from "../pages/layout/_Layout";

export interface InputWrapperProps {
  children: (text?: string) => React.ReactNode;
  name: string;
  title: string;
}

export const InputWrapper = ({ name, title, children }: InputWrapperProps) => {
  const vals = useContext(SignContext);
  const { addName } = useContext(ValueNames);

  useEffect(() => {
    addName({ name, title });
  }, [addName, name, title]);

  return <>{children(vals[name])}</>;
};
