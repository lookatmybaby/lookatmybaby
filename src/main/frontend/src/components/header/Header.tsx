import * as React from "react";
import { Link } from "react-router-dom";
import "./headerStyle";
import { HeaderWrap, HeaderLink } from "./headerStyle";

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderLink to="/">전국 내새끼 자랑</HeaderLink>
    </HeaderWrap>
  );
};

export default Header;
