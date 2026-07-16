import Button from "components/Button";
import Form from "components/Form";
import Input from "components/Input";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import axios from "services/axios";
import { Container } from "styles/GlobalStyles";

const Student = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    age: "",
    weight: "",
    height: "",
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
      await axios.post("/students/store", form);
      toast.success("Aluno cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      const errors = error.response.data.errors;
      errors.map((error) => toast.error(error));
    }
  };

  return (
    <Container>
      <h1>Cadastrar Aluno</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          name="name"
          type="text"
          id="name"
          minLength={3}
          maxLength={255}
          value={form.name}
          onChange={handleChange}
        >
          Nome:
        </Input>

        <Input
          name="surname"
          type="text"
          id="surname"
          minLength={3}
          maxLength={255}
          value={form.surname}
          onChange={handleChange}
        >
          Sobrenome:
        </Input>

        <Input
          name="email"
          type="email"
          id="email"
          value={form.email}
          onChange={handleChange}
        >
          Email:
        </Input>

        <Input
          name="age"
          type="number"
          id="age"
          value={form.age}
          onChange={handleChange}
        >
          Idade:
        </Input>

        <Input
          name="weight"
          type="number"
          id="weight"
          value={form.weight}
          onChange={handleChange}
        >
          Peso:
        </Input>

        <Input
          name="height"
          type="number"
          id="height"
          value={form.height}
          onChange={handleChange}
        >
          Altura:
        </Input>

        <Button type="submit">Salvar</Button>
      </Form>
    </Container>
  );
};

export default Student;
