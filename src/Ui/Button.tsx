import styled, { css } from "styled-components";

const sizes = {
  small: css`
    width: 8rem;
  `,
  medium: css`
    width: 100%;
  `,
};

const variations = {
  primary: css`
    background-color: white;
    color: var(--rose-2xl);
    border: 1px solid gray;
  `,
  secondary: css`
    background-color: var(--red);
    color: var(--rose-sm);
  `,
};

const flex = {
  center: css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  `,
  between: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};

interface ButtonProps {
  size?: keyof typeof sizes;
  variation?: keyof typeof variations;
  flex?: keyof typeof flex;
}

const Button = styled.button<ButtonProps>`
  border-radius: 3rem;
  padding: 0.5rem 0.7rem;
  font-weight: 700;
  height: 3rem;

  ${(props) => sizes[props.size || "small"]}
  ${(props) => variations[props.variation || "primary"]}
  ${(props) => flex[props.flex || "center"]}
`;

Button.defaultProps = {
  size: "small",
  variation: "primary",
  flex: "center",
};

export default Button;
