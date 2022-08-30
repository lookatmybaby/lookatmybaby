import * as React from "react";
import { CtDisabled, Btn, CtEnabled, SaveDisabled } from "./buttonStyle";

interface BtnProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

export const CtEnabledBtn = ({ onClick, children }: BtnProps) => {
  return (
    <CtEnabled width={60} fontSize={14} onClick={onClick}>
      {children}
    </CtEnabled>
  );
};

export const CtDisabledBtn = ({ onClick, children }: BtnProps) => {
  return (
    <CtDisabled width={60} fontSize={14} onClick={onClick}>
      {children}
    </CtDisabled>
  );
};

export const SmallCategory = ({ onClick, children }: BtnProps) => {
  return (
    <Btn width={50} fontSize={10}>
      {children}
    </Btn>
  );
};

export const SaveDisabledBtn = ({ onClick, children }: BtnProps) => {
  return (
    <SaveDisabled width={90} fontSize={14} onClick={onClick}>
      저장
    </SaveDisabled>
  );
};
