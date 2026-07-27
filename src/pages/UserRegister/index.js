import Button from "components/Button";
import Form, { useFormField } from "components/Form";
import Input from "components/Input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import * as actions from "store/modules/user/actions";
import { Container } from "styles/GlobalStyles";

const UserRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form, handleChange } = useFormField({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(actions.storeUserRequest({ ...form, navigate }));
  };

  return (
    <Container>
      <h1>Crie sua conta</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          name="name"
          type="text"
          id="name"
          minLength={3}
          maxLength={255}
          placeholder="Seu nome"
          value={form.name}
          onChange={(event) => handleChange("name", event.target.value)}
        >
          Nome:
        </Input>

        <Input
          name="surname"
          type="text"
          id="surname"
          minLength={3}
          maxLength={255}
          placeholder="Seu sobrenome"
          value={form.surname}
          onChange={(event) => handleChange("surname", event.target.value)}
        >
          Sobrenome:
        </Input>

        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Seu email"
          value={form.email}
          onChange={(event) => handleChange("email", event.target.value)}
        >
          Email:
        </Input>

        <Input
          type="password"
          id="password"
          name="password"
          minLength={6}
          maxLength={50}
          placeholder="Sua senha"
          value={form.password}
          onChange={(event) => handleChange("password", event.target.value)}
        >
          Senha:
        </Input>

        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default UserRegister;
