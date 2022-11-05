import styled from "styled-components";

export const StyledButton = styled("button")<any>`
  background: ${(p) => p.background || "#699635"};
  color: ${(p) => (p.color || "#2E186A")};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border-radius: 24px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  justify-self: end;
  transition: all 0.3s ease-in-out;
  outline: 0;
  border-style:none;

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    background-color: rgb(255, 130, 92);
  }
`;
