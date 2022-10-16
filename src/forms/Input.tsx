import { useField } from "formik";
import { TextField } from "@mui/material";

export interface InputProps {
  name: string;
  title: string;
}

export const Input = ({ name, title }: InputProps) => {
  const [input, , helpers] = useField(name);

  return (
    <TextField
      onChange={(e) => {
        e.stopPropagation();
        e.preventDefault();
        helpers.setValue(e.target.value);
      }}
      label={title}
      defaultValue={input.value}
    />
  );
};
