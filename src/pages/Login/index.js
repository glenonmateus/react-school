import Button from "components/Button";
import Form, { useFormField } from "components/Form";
import Input from "components/Input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import * as actions from "store/modules/auth/actions";
import { Container } from "styles/GlobalStyles";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { form, handleChange } = useFormField({ email: "", password: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(actions.loginRequest({ ...form, navigate }));
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Seu email"
          value={form.email}
          onChange={(event) => handleChange("email", event.target.value)}
        ></Input>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Sua senha"
          minLength={6}
          maxLength={50}
          value={form.password}
          onChange={(event) => handleChange("password", event.target.value)}
        ></Input>

        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
};

export default Login;
