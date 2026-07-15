import { ButtonStyled } from "./styled";

const Button = ({ children, ...rest }) => {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};

export default Button;
