import { Spec } from "../../types/Spec";
import classes from "./Layout.module.css";
import { Renderer } from "../../renderer/Renderer";
import React, { useCallback, useState } from "react";
import { FormLayout } from "../../forms/FormLayout";
import { useValueKey } from "../../forms/useValueKey";

export interface LayoutProps {
  // spec: Spec;
  formTitle: string;
  children: React.ReactNode;
}

export type Value = Record<string, string>;
export type Names = {
  names: { name: string; title: string; lockedText?: string }[];
  addName: (newName: {
    name: string;
    title: string;
    lockedText?: string;
  }) => void;
};

export const SignContext = React.createContext<Value>({});
SignContext.displayName = "SignContext";
export const ValueNames = React.createContext<Names>({
  names: [],
  addName: () => {},
});
ValueNames.displayName = "ValueNames";

const initialName = "";

export const Layout = ({ formTitle, children }: LayoutProps) => {
  const key = useValueKey();

  const init =
    localStorage.getItem(key) === null
      ? {}
      : JSON.parse(localStorage.getItem(key) as string);

  const [value, setValue] = useState<Value>(init);
  const [names, setNames] = useState<
    { name: string; title: string; lockedText?: string }[]
  >([]);

  const addName = useCallback((newName: { name: string; title: string }) => {
    setNames((oldNames) => {
      if (oldNames.some((name) => name.name === newName.name))
        return [...oldNames];
      return [...oldNames, newName];
    });
  }, []);

  return (
    <SignContext.Provider value={value}>
      <ValueNames.Provider value={{ names: names, addName: addName }}>
        <div className={classes.container}>
          <div className={classes.form}>
            <FormLayout
              setValue={(values) => {
                localStorage.setItem(key, JSON.stringify(values));
                setValue(values);
              }}
              // spec={spec}
              name={initialName}
              formTitle={formTitle}
            />
          </div>
          <div className={classes.layout}>{children}</div>
        </div>
      </ValueNames.Provider>
    </SignContext.Provider>
  );
};
