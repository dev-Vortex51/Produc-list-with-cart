import styled from "styled-components";
import { useProduct } from "../contexts/AppContext";
import { formatCurrency } from "../Utils/helper";
import Button from "../Ui/Button";

interface ShowCaseProps {
  cartLength: number;
}

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

const TotalDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PP = styled.p`
  color: var(--rose-2xl);
  font-weight: 600;
`;

const TotalPricing = styled.h1`
  font-size: larger;
  color: var(--rose-2xl);
`;

const StyledModal = styled.div`
  background: white;
  width: 100%;
  padding: 1rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 20rem;
    height: fit-content;
    border-radius: 0.5rem;
    z-index: 1000;
  }
`;

const SpanImage = styled.span`
  width: 30px;
  margin-bottom: 0.6rem;
`;

const H2 = styled.h2`
  color: var(--rose-2xl);
  margin-bottom: 0.3rem;
`;
const P = styled.p`
  color: var(--rose-md);
  margin-bottom: 1.5rem;
`;

const ShowCase = styled.div<ShowCaseProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1.5rem;
  background: var(--rose-sm);
  border-radius: 0.4rem;
  margin-bottom: 2rem;

  max-height: ${({ cartLength }) => (cartLength >= 4 ? "15rem" : "auto")};
  overflow-y: ${({ cartLength }) => (cartLength >= 4 ? "auto" : "visible")};

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--rose-md);
    border-radius: 4px;
  }
`;

const Main = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0.5rem;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--rose-md);
`;

const Thumbnail = styled.span`
  width: 3rem;
  height: 3rem;
`;

const ThumbnailImg = styled.img`
  border-radius: 0.4rem;
`;

const DivPricing = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.6rem;
`;

const Modal = () => {
  const { cart, setCart, setPay, setDesserts } = useProduct();

  function startNew() {
    setCart([]);
    setDesserts([
      {
        id: 1,
        image: {
          thumbnail: "/image-waffle-thumbnail.jpg",
          mobile: "/image-waffle-mobile.jpg",
          tablet: "/image-waffle-tablet.jpg",
          desktop: "/image-waffle-desktop.jpg",
        },
        name: "Waffle with Berries",
        category: "Waffle",
        price: 6.5,
        totalPrice: 0,
        quantity: 0,
      },
      {
        id: 2,
        image: {
          thumbnail: "/image-creme-brulee-thumbnail.jpg",
          mobile: "/image-creme-brulee-mobile.jpg",
          tablet: "/image-creme-brulee-tablet.jpg",
          desktop: "/image-creme-brulee-desktop.jpg",
        },
        name: "Vanilla Bean Crème Brûlée",
        category: "Crème Brûlée",
        price: 7.0,
        totalPrice: 0,
        quantity: 0,
      },
      {
        id: 3,
        image: {
          thumbnail: "/image-macaron-thumbnail.jpg",
          mobile: "/image-macaron-mobile.jpg",
          tablet: "/image-macaron-tablet.jpg",
          desktop: "/image-macaron-desktop.jpg",
        },
        name: "Macaron Mix of Five",
        category: "Macaron",
        price: 8.0,
        totalPrice: 0,
        quantity: 0,
      },
      {
        id: 4,
        image: {
          thumbnail: "/image-tiramisu-thumbnail.jpg",
          mobile: "/image-tiramisu-mobile.jpg",
          tablet: "/image-tiramisu-tablet.jpg",
          desktop: "/image-tiramisu-desktop.jpg",
        },
        name: "Classic Tiramisu",
        category: "Tiramisu",
        price: 5.5,
        totalPrice: 0,
        quantity: 0,
      },
      {
        id: 5,
        image: {
          thumbnail: "/image-baklava-thumbnail.jpg",
          mobile: "/image-baklava-mobile.jpg",
          tablet: "/image-baklava-tablet.jpg",
          desktop: "/image-baklava-desktop.jpg",
        },
        name: "Pistachio Baklava",
        category: "Baklava",
        price: 4.0,
        totalPrice: 0,
        quantity: 0,
      },
      {
        id: 6,
        image: {
          thumbnail: "/image-meringue-thumbnail.jpg",
          mobile: "/image-meringue-mobile.jpg",
          tablet: "/image-meringue-tablet.jpg",
          desktop: "/image-meringue-desktop.jpg",
        },
        name: "Lemon Meringue Pie",
        category: "Pie",
        price: 5.0,
        totalPrice: 0,
        quantity: 0,
      },
      {
        id: 7,
        image: {
          thumbnail: "/image-cake-thumbnail.jpg",
          mobile: "/image-cake-mobile.jpg",
          tablet: "/image-cake-tablet.jpg",
          desktop: "/image-cake-desktop.jpg",
        },
        name: "Red Velvet Cake",
        category: "Cake",
        price: 4.5,
        totalPrice: 0,
        quantity: 0,
      },
      {
        id: 8,
        image: {
          thumbnail: "/image-brownie-thumbnail.jpg",
          mobile: "/image-brownie-mobile.jpg",
          tablet: "/image-brownie-tablet.jpg",
          desktop: "/image-brownie-desktop.jpg",
        },
        name: "Salted Caramel Brownie",
        category: "Brownie",
        price: 4.5,
        totalPrice: 0,
        quantity: 0,
      },
      {
        id: 9,
        image: {
          thumbnail: "/image-panna-cotta-thumbnail.jpg",
          mobile: "/image-panna-cotta-mobile.jpg",
          tablet: "/image-panna-cotta-tablet.jpg",
          desktop: "/image-panna-cotta-desktop.jpg",
        },
        name: "Vanilla Panna Cotta",
        category: "Panna Cotta",
        price: 6.5,
        totalPrice: 0,
        quantity: 0,
      },
    ]);
    setPay(false);
  }
  return (
    <StyledModal>
      <SpanImage>
        <img src="/public/icon-order-confirmed.svg" alt="" />
      </SpanImage>

      <H2>Order Confirmed</H2>
      <P>We hope you enjoy your food</P>

      <ShowCase cartLength={cart.length}>
        {cart.map((item) => (
          <Main key={item.id}>
            <Thumbnail>
              <ThumbnailImg src={item.image.thumbnail} alt="" />
            </Thumbnail>
            <div>
              <Name>{item.name}</Name>
              <DivPricing>
                <Quantity>{item.quantity}x</Quantity>
                <Price>@ {formatCurrency(item.price)}</Price>
              </DivPricing>
            </div>
            <TotalPrice>{formatCurrency(item.totalPrice)}</TotalPrice>
          </Main>
        ))}
        <TotalDiv>
          <PP>Order Total</PP>
          <TotalPricing>
            {formatCurrency(
              cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
            )}
          </TotalPricing>
        </TotalDiv>
      </ShowCase>
      <Button size="medium" variation="secondary" onClick={startNew}>
        Start New Order
      </Button>
    </StyledModal>
  );
};

export default Modal;
