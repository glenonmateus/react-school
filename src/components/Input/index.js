import { InputStyled } from "./styled";

const Input = ({ children, name, ...rest }) => {
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <InputStyled name={name} {...rest}></InputStyled>
    </>
  );
};

export default Input;
