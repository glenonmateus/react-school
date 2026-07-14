import PropTypes from "prop-types";
import Container from "./styled";

const Loading = ({ isLoading }) => {
  if (!isLoading) return;
  return (
    <Container>
      <div></div>
      <span>Carregando...</span>
    </Container>
  );
};

Loading.defaultProps = { isLoading: false };

Loading.propTypes = { isLoading: PropTypes.bool };

export default Loading;
