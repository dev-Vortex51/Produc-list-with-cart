import styled from "styled-components";
import { Products, useProduct } from "../contexts/AppContext";
import Button from "../Ui/Button";
import AddToCart from "../../public/icon-add-to-cart.svg";
import Increase from "../../public/icon-increment-quantity.svg";
import Decrease from "../../public/icon-decrement-quantity.svg";

import { formatCurrency } from "../Utils/helper";

const StyledProduct = styled.div`
  width: 100%;
  margin-top: 1rem;

  @media screen and (min-width: 768px) {
    width: 15rem;
  }
`;

const Img = styled.img`
  width: 20px;
`;
const ImgAction = styled.img`
  width: 12px;
`;

const Span = styled.span`
  width: 20px;
  height: 20px;
  border: 2px solid white;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Relative = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 12rem;
  }
`;

const Absolute = styled.div`
  position: absolute;
  top: 11.5rem;

  @media screen and (min-width: 768px) {
    top: 6rem;
  }
`;

const H2 = styled.h2`
  font-size: small;
  margin-top: 2rem;
  color: var(--rose-md);
`;
const H1 = styled.h1`
  font-size: var(--font-product-names);
  margin-top: 0.2rem;
  color: var(--rose-2xl);
`;
const H3 = styled.h3`
  font-size: var(--font-product-names);
  margin-top: 0.2rem;
  color: var(--red);
  font-weight: bold;
`;
const RoundedImg = styled.img`
  border-radius: 0.4rem;
`;
interface ProductProps {
  dessert: Products;
}

const Product = ({ dessert }: ProductProps) => {
  const { desserts, setDesserts, setCart } = useProduct();

  function handleAddToCart(id: number) {
    const theProduct = desserts.find((item) => item.id === id);

    if (theProduct) {
      setCart((prev) => [
        ...prev,
        { ...theProduct, quantity: 1, totalPrice: theProduct.price },
      ]);
    }
    setDesserts((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.price * item.quantity,
            }
          : item
      )
    );
  }

  function handleIncrease(id: number) {
    setDesserts((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.price * (item.quantity + 1),
            }
          : item
      )
    );

    setCart((prev) => {
      const itemExists = prev.find((item) => item.id === id);

      if (itemExists) {
        return prev.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: item.price * (item.quantity + 1),
              }
            : item
        );
      } else {
        const dessert = desserts.find((item) => item.id === id);
        if (dessert) {
          return [
            ...prev,
            { ...dessert, quantity: 1, totalPrice: dessert.price },
          ];
        }
      }
      return prev;
    });
  }

  function handleDecrease(id: number) {
    setDesserts((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 0
          ? {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: item.price * (item.quantity - 1),
            }
          : item
      )
    );

    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.quantity > 0
            ? {
                ...item,
                quantity: item.quantity - 1,
                totalPrice: item.price * (item.quantity - 1),
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <StyledProduct>
      <Relative>
        <RoundedImg
          className={dessert.quantity > 0 ? "added" : ""}
          src={dessert.image.mobile}
          alt=""
        />
        {dessert.quantity === 0 ? (
          <Absolute>
            <Button onClick={() => handleAddToCart(dessert.id)}>
              <Img src={AddToCart} alt="" />
              Add to cart
            </Button>
          </Absolute>
        ) : (
          <Absolute>
            <Button variation="secondary" size="small" flex="between">
              <Span onClick={() => handleDecrease(dessert.id)}>
                <ImgAction src={Decrease} alt="" />
              </Span>
              <span>{dessert.quantity}</span>
              <Span onClick={() => handleIncrease(dessert.id)}>
                <ImgAction src={Increase} alt="" />
              </Span>
            </Button>
          </Absolute>
        )}
      </Relative>
      <H2>{dessert.category}</H2>
      <H1>{dessert.name}</H1>
      <H3>{formatCurrency(dessert.price)}</H3>
    </StyledProduct>
  );
};

export default Product;
