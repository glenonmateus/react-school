import Button from "components/Button";
import Form, { useFormField } from "components/Form";
import Input from "components/Input";
import Loading from "components/Loading";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import * as actions from "store/modules/user/actions";
import { Container } from "styles/GlobalStyles";

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const { data, isLoading } = useSelector((state) => state.user);

  useEffect(() => {
    if (user.id && !data) dispatch(actions.fetchUserRequest(user.id));
  }, [dispatch, user.id, data]);

  const { form, handleChange } = useFormField({
    name: data ? data.name : user.name,
    surname: data ? data.surname : user.surname,
    email: data ? data.email : user.email,
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

    if (user.id) {
      return dispatch(actions.updateUserRequest({ ...form, navigate }));
    }
    return dispatch(actions.storeUserRequest({ ...form, navigate }));
  };

  return (
    <Container>
      <Loading isLoading={isLoading}></Loading>
      <h1>{user.id ? "Perfil do Usuário" : "Crie sua conta"}</h1>
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

        <Button type="submit">{user.id ? "Salvar" : "Cadastrar"}</Button>
      </Form>
    </Container>
  );
};

export default User;
