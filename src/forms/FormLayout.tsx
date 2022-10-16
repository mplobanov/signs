import React from "react";
import { Value } from "../pages/layout/_Layout";
import { Spec } from "../types/Spec";
import { Formik } from "formik";
import { Former, Named } from "./Former";
import { Button } from "@mui/material";
import classes from "./FormLayout.module.css";

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
  return (
    <div className={classes.container}>
      <div className={classes.title}>{formTitle}</div>
      <Formik initialValues={{}} onSubmit={(values) => setValue(values)}>
        {(form) => (
          <div className={classes.body}>
            <Former spec={spec} name={name} />
            <Button onClick={form.submitForm}>Обновить</Button>
          </div>
        )}
      </Formik>
    </div>
  );
};
