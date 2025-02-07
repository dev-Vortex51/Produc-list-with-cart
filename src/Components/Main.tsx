import styled from "styled-components";
import Product from "./Product";
import { useProduct } from "../contexts/AppContext";

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    /* background-color: red; */
  }
`;

const Main = () => {
  const { desserts } = useProduct();
  return (
    <StyledMain>
      {desserts.map((dessert, index) => (
        <Product key={index} dessert={dessert} />
      ))}
    </StyledMain>
  );
};

export default Main;
