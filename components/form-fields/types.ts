import { Control, FieldPath, FieldValues } from "react-hook-form";

export type FormFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  description?: string;
  type?: "text" | "email" | "password" | "tel" | "date" | "number";
  disabled?: boolean;
};

export type InputFormFieldProps<T extends FieldValues> = FormFieldProps<T> & {
  placeholder?: string;
  type?: "text" | "email" | "password" | "tel" | "date" | "number" | "url";
};

export type SelectOption = {
  value: string;
  label: string;
};

export type SelectFormFieldProps<T extends FieldValues> = FormFieldProps<T> & {
  placeholder?: string;
  options: SelectOption[];
};
