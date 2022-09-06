import styled from "styled-components";

export const InputCss = styled.input`
  width: 100vw;
  height: 22px;
  background-color: inherit;
  font-size: 0.8em;
  font-weight: 400;
  border: none;
  border-bottom: 1px solid #dbdbdb;
  margin-left: 9px;
  padding-bottom: 6px;
  color: #161616;

  &:focus {
    outline: none;
  }

  &.right {
    text-align: right;
  }

  &::placeholder {
    color: #dbdbdb;
  }
`;
