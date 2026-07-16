import Button from "components/Button";
import Form, { useFormField } from "components/Form";
import Input from "components/Input";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import axios from "services/axios";
import { Container } from "styles/GlobalStyles";

const Register = () => {
  const navigate = useNavigate();
  const { form, handleChange } = useFormField({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("/users/store", form);
      toast.success("Conta criada com sucesso!");
      navigate("/login", { replace: true });
    } catch (error) {
      const errors = error.response.data.errors;
      errors.map((error) => toast.error(error));
    }
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

export default Register;
