import { Spec } from "../../types/Spec";
import classes from "./Layout.module.css";
import { Renderer } from "../../renderer/Renderer";
import React, { useState } from "react";
import { FormLayout } from "../../forms/FormLayout";

export interface LayoutProps {
  spec: Spec;
  formTitle: string;
}

export type Value = Record<string, string>;

export const SignContext = React.createContext<Value>({});

const initialName = "";

export const Layout = ({ spec, formTitle }: LayoutProps) => {
  const [value, setValue] = useState<Value>({});

  return (
    <SignContext.Provider value={value}>
      <div className={classes.container}>
        <div className={classes.form}>
          <FormLayout
            setValue={setValue}
            spec={spec}
            name={initialName}
            formTitle={formTitle}
          />
        </div>
        <div className={classes.layout}>
          <Renderer spec={spec} name={initialName} />
        </div>
      </div>
    </SignContext.Provider>
  );
};
