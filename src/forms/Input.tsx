import { useField } from "formik";
import { TextField } from "@mui/material";

export interface InputProps {
  name: string;
  title: string;
  lockedText?: string;
}

export const Input = ({ name, title, lockedText }: InputProps) => {
  const [input, , helpers] = useField(name);

  return (
    <TextField
      onChange={(e) => {
        e.stopPropagation();
        e.preventDefault();
        helpers.setValue(e.target.value);
      }}
      label={title}
      defaultValue={lockedText ?? input.value}
      disabled={Boolean(lockedText)}
    />
  );
};
