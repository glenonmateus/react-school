import { useState } from "react";
import { FormStyled } from "./styled.js";

const Form = ({ children, ...rest }) => {
  return <FormStyled {...rest}>{children}</FormStyled>;
};

const useFormField = (inputs) => {
  const [form, setForm] = useState(inputs);

  const handleChange = (name, value) => {
    setForm((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  return { form, handleChange };
};

export { useFormField };
export default Form;
