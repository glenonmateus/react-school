import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import axios from "services/axios";
import { Container } from "styles/GlobalStyles";
import { Form } from "./styled";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

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
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          minLength={3}
          maxLength={255}
          placeholder="Seu nome"
          value={form.name}
          onChange={handleChange}
        />

        <label htmlFor="surname">Sobrenome:</label>
        <input
          type="text"
          id="surname"
          name="surname"
          minLength={3}
          maxLength={255}
          placeholder="Seu sobrenome"
          value={form.surname}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Seu email"
          value={form.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          name="password"
          minLength={6}
          maxLength={50}
          placeholder="Sua senha"
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
};

export default Register;
