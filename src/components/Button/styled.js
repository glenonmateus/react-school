import * as colors from "config/colors";
import styled from "styled-components";

export const ButtonStyled = styled.button`
  cursor: pointer;
  background: ${colors.primaryColor};
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 700;
  transition: all 300ms;

  &:hover {
    filter: brightness(75%);
  }
`;
