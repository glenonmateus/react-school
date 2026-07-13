import { useDispatch } from "react-redux";
import { buttonClickRequest } from "store/modules/example/actions";
import { Container } from "styles/GlobalStyles";
import { Paragraph, Title } from "./styled";

const Home = () => {
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(buttonClickRequest());
  };

  return (
    <Container>
      <Title>
        Login
        <small>System</small>
      </Title>
      <Paragraph>Esse é um paragrafo</Paragraph>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
};

export default Home;
