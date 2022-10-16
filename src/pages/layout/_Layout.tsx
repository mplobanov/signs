import { Spec } from "../../types/Spec";
import classes from "./Layout.module.css";
import { Renderer } from "../../renderer/Renderer";
import React, { useCallback, useState } from "react";
import { FormLayout } from "../../forms/FormLayout";

export interface LayoutProps {
  spec: Spec;
  formTitle: string;
}

export type Value = Record<string, string>;
export type Names = {
  names: { name: string; title: string }[];
  addName: (newName: { name: string; title: string }) => void;
};

export const SignContext = React.createContext<Value>({});
export const ValueNames = React.createContext<Names>({
  names: [],
  addName: () => {},
});

const initialName = "";

export const Layout = ({ spec, formTitle }: LayoutProps) => {
  const init =
    localStorage.getItem("value") === null
      ? {}
      : JSON.parse(localStorage.getItem("value") as string);

  const [value, setValue] = useState<Value>(init);
  const [names, setNames] = useState<{ name: string; title: string }[]>([]);

  const addName = useCallback((newName: { name: string; title: string }) => {
    setNames((oldNames) => [...oldNames, newName]);
  }, []);

  return (
    <SignContext.Provider value={value}>
      <ValueNames.Provider value={{ names: names, addName: addName }}>
        <div className={classes.container}>
          <div className={classes.form}>
            <FormLayout
              setValue={(values) => {
                localStorage.setItem("value", JSON.stringify(values));
                setValue(values);
              }}
              spec={spec}
              name={initialName}
              formTitle={formTitle}
            />
          </div>
          <div className={classes.layout}>
            <Renderer spec={spec} name={initialName} />
          </div>
        </div>
      </ValueNames.Provider>
    </SignContext.Provider>
  );
};
