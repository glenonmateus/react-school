import Button from "components/Button";
import Form, { useFormField } from "components/Form";
import Input from "components/Input";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import * as actions from "store/modules/user/actions";
import { Container } from "styles/GlobalStyles";

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userId = useSelector((state) => state.auth.user.id);
  const userData = useSelector((state) => state.user.data);

  useEffect(() => {
    if (userId && !userData) dispatch(actions.fetchUserRequest(userId));
  }, [dispatch, userId, userData]);

  const { form, handleChange } = useFormField({
    name: userData ? userData.name : "",
    surname: userData ? userData.surname : "",
    email: userData ? userData.email : "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Remove empty value from form object
    Object.keys(form).forEach((key) => {
      if (!form[key]) {
        delete form[key];
      }
    });

    if (userId) {
      return dispatch(actions.updateUserRequest({ ...form, navigate }));
    }
    return dispatch(actions.storeUserRequest({ ...form, navigate }));
  };

  return (
    <Container>
      <h1>{userId ? "Perfil do Usuário" : "Crie sua conta"}</h1>
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

        <Button type="submit">{userId ? "Salvar" : "Cadastrar"}</Button>
      </Form>
    </Container>
  );
};

export default User;
