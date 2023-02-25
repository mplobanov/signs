import { useContext, useEffect } from "react";
import { SignContext, ValueNames } from "../pages/layout/_Layout";

export interface InputWrapperProps {
  children: (text?: string) => React.ReactNode;
  name: string;
  title: string;
  lockedText?: string;
}

export const InputWrapper = ({
  name,
  title,
  children,
  lockedText,
}: InputWrapperProps) => {
  const vals = useContext(SignContext);
  const { addName } = useContext(ValueNames);

  useEffect(() => {
    addName({ name, title, lockedText });
  }, [addName, lockedText, name, title]);

  return <>{children(lockedText ?? vals[name])}</>;
};
