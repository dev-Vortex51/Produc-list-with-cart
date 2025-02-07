import styled from "styled-components";
import { Products, useProduct } from "../contexts/AppContext";
import { formatCurrency } from "../Utils/helper";

import Remove from "../../public/icon-remove-item.svg";

interface CartItemProps {
  item: Products;
}

const StyledCartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid var(--rose-sm);
  padding-bottom: 1rem;
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Pricing = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Span = styled.span`
  width: 23px;
  height: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid var(--rose-md);
  padding: 0.2rem;
  cursor: pointer;
`;

const Name = styled.h2`
  font-size: var(--font-product-names);
  font-weight: 600;
`;

const Quantity = styled.p`
  color: var(--red);
  font-weight: 700;
`;
const Price = styled.p`
  color: var(--rose-md);
`;

const TotalPrice = styled.p`
  color: var(--rose-xl);
  font-weight: 600;
`;

const CartItem = ({ item }: CartItemProps) => {
  const { setCart, setDesserts } = useProduct();

  function handleRemoveProduct(id: number) {
    setCart((prev) => prev.filter((item) => item.id !== id));

    setDesserts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: 0, totalPrice: 0 } : item
      )
    );
  }
  return (
    <StyledCartItem>
      <LeftDiv>
        <Name>{item.name}</Name>
        <Pricing>
          <Quantity>{item.quantity}x</Quantity>
          <Price>@ {formatCurrency(item.price)}</Price>
          <TotalPrice>{formatCurrency(item.totalPrice)}</TotalPrice>
        </Pricing>
      </LeftDiv>
      <Span onClick={() => handleRemoveProduct(item.id)}>
        <img src={Remove} alt="" />
      </Span>
    </StyledCartItem>
  );
};

export default CartItem;
