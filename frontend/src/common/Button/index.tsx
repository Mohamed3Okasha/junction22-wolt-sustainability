import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({
  color,
  fixedWidth,
  background,
  children,
  onClick,
}: ButtonProps) => (
  <StyledButton background={background} color={color} fixedWidth={fixedWidth} onClick={onClick}>
    {children}
  </StyledButton>
);
