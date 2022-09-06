import * as React from "react";
import { InputCss } from "./inputStyle";

export interface InputProps {
  isInput: boolean;
  id?: string;
  type?: string;
  value?: string;
  required?: boolean;
  className?: string;
}

const Input = ({
  isInput = true,
  id,
  type,
  value,
  required = true,
  className,
}: InputProps) => {
  return <InputCss />;
};

export default Input;
