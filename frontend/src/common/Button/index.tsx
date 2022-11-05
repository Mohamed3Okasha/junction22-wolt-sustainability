import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({
  color,
  fixedWidth,
  background,
  justify,
  children,
  onClick,
}: ButtonProps) => (
  <StyledButton justifySelf = "center" background={background} color={color} fixedWidth={fixedWidth} onClick={onClick}>
    {children}
  </StyledButton>
);
