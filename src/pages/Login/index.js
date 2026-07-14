import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import * as actions from "store/modules/auth/actions";
import { Container } from "styles/GlobalStyles";
import { Form } from "./styled";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(actions.loginRequest({ ...form, navigate }));
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="email" hidden={true}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Seu email"
          value={form.email}
          onChange={handleChange}
        />
        <label htmlFor="password" hidden={true}>
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Sua senha"
          minLength={6}
          maxLength={50}
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
};

export default Login;
