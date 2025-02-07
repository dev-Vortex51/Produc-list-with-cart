import styled from "styled-components";

const StyledHeader = styled.header`
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--rose2xl);
  @media screen and (min-width: 768px) {
    grid-column: 1 / 2; 
    grid-row: 1 / 2; 
`;

const Header = () => {
  return <StyledHeader>Desserts</StyledHeader>;
};

export default Header;
