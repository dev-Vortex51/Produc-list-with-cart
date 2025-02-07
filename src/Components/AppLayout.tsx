import styled from "styled-components";
import Cart from "./Cart";
import Header from "./Header";
import Main from "./Main";
import { useProduct } from "../contexts/AppContext";
import ModalContainer from "./ModalContainer";

const StyledAppLayout = styled.section`
  width: 88%;
  margin: 50px auto;
  display: grid;
  gap: 1rem;
  grid-template-rows: auto 1fr auto;
  @media screen and (min-width: 768px) {
    width: 70%;
    grid-template-columns: 1fr 200px; 
    grid-template-rows: auto 1fr;
`;

const AppLayout = () => {
  const { pay } = useProduct();
  return (
    <>
      {pay && <ModalContainer />}
      <StyledAppLayout>
        <Header />
        <Main />
        <Cart />
      </StyledAppLayout>
    </>
  );
};

export default AppLayout;
