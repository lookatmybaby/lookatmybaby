import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrap = styled.header`
  width: 100vw;
  background-color: #f4800b;
`;

export const HeaderLink = styled(Link)`
  display: block;
  padding: 11px 15px 10px;
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
`;
