import * as colors from "config/colors";
import styled from "styled-components";

export const InputStyled = styled.input`
  height: 40px;
  border: 1px solid #ddd;
  padding: 0 10px;
  border-radius: 4px;
  margin-bottom: 20px;

  &:focus {
    border: 1px solid ${colors.primaryColor}
  }
`;
