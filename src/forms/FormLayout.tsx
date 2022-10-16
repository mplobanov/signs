import React, { useContext } from "react";
import { Value, ValueNames } from "../pages/layout/_Layout";
import { Spec } from "../types/Spec";
import { Formik } from "formik";
import { Former, Named } from "./Former";
import { Button } from "@mui/material";
import classes from "./FormLayout.module.css";
import { Input } from "./Input";

export interface FormLayoutProps extends Named {
  setValue: React.Dispatch<React.SetStateAction<Value>>;
  spec: Spec;
  formTitle: string;
}

export const FormLayout = ({
  setValue,
  spec,
  name,
  formTitle,
}: FormLayoutProps) => {
  const init =
    localStorage.getItem("value") === null
      ? {}
      : JSON.parse(localStorage.getItem("value") as string);

  const names = useContext(ValueNames);

  return (
    <div className={classes.container}>
      <div className={classes.title}>{formTitle}</div>
      <Formik initialValues={init} onSubmit={(values) => setValue(values)}>
        {(form) => (
          <div className={classes.body}>
            {/*{names.names.map((name) => (*/}
            {/*  <Input name={name.name} title={name.title} />*/}
            {/*))}*/}
            <Former spec={spec} name={name} />
            <Button onClick={form.submitForm}>Обновить</Button>
          </div>
        )}
      </Formik>
    </div>
  );
};
