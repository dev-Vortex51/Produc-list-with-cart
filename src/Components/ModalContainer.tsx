import { createPortal } from "react-dom";
import styled from "styled-components";
import Modal from "./Modal";

const StyledModalContainer = styled.div`
  position: fixed;
  top:0;
  left:0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7)
  inset: 0;
  display: flex;
  align-items: end;
  justify-content: center;
   z-index: 1000;
   backdrop-filter: blur(5px);



   @media screen and (min-width: 768px){
     align-items: center;
   }
`;

const ModalContainer = () => {
  return createPortal(
    <StyledModalContainer>
      <Modal />
    </StyledModalContainer>,
    document.body
  );
};

export default ModalContainer;
