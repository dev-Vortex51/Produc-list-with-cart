import styled from "styled-components";
import { useProduct } from "../contexts/AppContext";
import CartItem from "./CartItem";
import { formatCurrency } from "../Utils/helper";
import Button from "../Ui/Button";

const StyledCart = styled.div`
  background-color: white;
  padding: 1.5rem 0.9rem;
  width: 100%;
  height: fit-content;
  border-radius: 0.4rem;
  @media screen and (min-width: 768px) {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    width: 20rem;
    padding: 1.5rem 0.8rem;
  }
`;

const Image = styled.div`
  width: 60%;
  margin: 20px auto 0 auto;
`;

const H1 = styled.h1`
  color: var(--red);
  margin-bottom: 2rem;
`;
const P = styled.p`
  text-align: center;
  font-weight: 400;
  color: var(--rose-md);
`;

interface ItemDivProps {
  itemCount: number;
}

const ItemDiv = styled.div<ItemDivProps>`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;

  max-height: ${({ itemCount }) => (itemCount >= 4 ? "15rem" : "auto")};
  overflow-y: ${({ itemCount }) => (itemCount >= 4 ? "auto" : "visible")};
  padding-right: ${({ itemCount }) => (itemCount >= 4 ? "0.5rem" : "0")};

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--rose-md);
    border-radius: 4px;
  }
`;

const TotalDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PP = styled.p`
  color: var(--rose-2xl);
  font-weight: 600;
`;

const TotalPrice = styled.h1`
  font-size: x-large;
  color: var(--rose-2xl);
`;

const Carbon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: var(--rose-sm);
  padding: 0.8rem 1rem;
  border-radius: 0.4rem;
  margin: 1rem 0 2rem;
`;

const CarbonP = styled.p`
  color: var(--rose-2xl);
  font-size: medium;
`;

const CarbonSpan = styled.span`
  font-weight: 600;
`;

const Cart = () => {
  const { cart, setPay } = useProduct();

  function confirmPayment() {
    setPay(true);
  }
  return (
    <StyledCart>
      <H1>Your Cart ({cart?.length})</H1>

      {cart.length === 0 ? (
        <div>
          <Image>
            <img src="/public/illustration-empty-cart.svg" alt="" />
          </Image>
          <P>Your added items will appear here</P>
        </div>
      ) : (
        <>
          <ItemDiv itemCount={cart.length}>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ItemDiv>

          <TotalDiv>
            <PP>Order Total</PP>
            <TotalPrice>
              {formatCurrency(
                cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
              )}
            </TotalPrice>
          </TotalDiv>
          <Carbon>
            <span>
              <img src="/public/icon-carbon-neutral.svg" alt="" />
            </span>
            <CarbonP>
              This is a <CarbonSpan>carbon-neutral</CarbonSpan> delivery
            </CarbonP>
          </Carbon>
          <Button size="medium" variation="secondary" onClick={confirmPayment}>
            Confirm Order
          </Button>
        </>
      )}
    </StyledCart>
  );
};

export default Cart;
