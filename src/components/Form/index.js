import { FormStyled } from "./styled.js";

const Form = ({ children, ...rest }) => {
  return <FormStyled {...rest}>{children}</FormStyled>;
};

export default Form;
