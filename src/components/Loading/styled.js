import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 30px;

  div {
    position: absolute;
    z-index: 1;
    background: rgba(0,0,0,0.8);
    width: 100%;
    height: 100%;
  }

  span {
    z-index: 2;
  }
`;

export default Container;
