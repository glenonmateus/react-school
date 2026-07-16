import Button from "components/Button";
import Form, { useFormField } from "components/Form";
import Input from "components/Input";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import axios from "services/axios";
import { Container } from "styles/GlobalStyles";

const Student = () => {
  const navigate = useNavigate();
  const { form, handleChange } = useFormField({
    name: "",
    surname: "",
    email: "",
    age: "",
    weight: "",
    height: "",
  });

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
          value={form.surname}
          onChange={(event) => handleChange("surname", event.target.value)}
        >
          Sobrenome:
        </Input>

        <Input
          name="email"
          type="email"
          id="email"
          value={form.email}
          onChange={(event) => handleChange("email", event.target.value)}
        >
          Email:
        </Input>

        <Input
          name="age"
          type="number"
          id="age"
          value={form.age}
          onChange={(event) => handleChange("age", event.target.value)}
        >
          Idade:
        </Input>

        <Input
          name="weight"
          type="number"
          id="weight"
          value={form.weight}
          onChange={(event) => handleChange("weight", event.target.value)}
        >
          Peso:
        </Input>

        <Input
          name="height"
          type="number"
          id="height"
          value={form.height}
          onChange={(event) => handleChange("height", event.target.value)}
        >
          Altura:
        </Input>

        <Button type="submit">Salvar</Button>
      </Form>
    </Container>
  );
};

export default Student;
