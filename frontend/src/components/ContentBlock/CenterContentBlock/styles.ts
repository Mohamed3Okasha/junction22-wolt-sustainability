import styled from "styled-components";
import { SvgIcon } from "../../../common/SvgIcon";

export const  CenterContentSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  position: relative;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 30px;
  line-height: 1rem;
  margin-top: 1rem ;
  display: flex;
  justify-content: center;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 18px;
  display: flex;
  text-align: center;
    padding: 0.5rem  0.3rem 0.3rem;

`;


export const Img = styled("img")`
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

export const SvgIc = styled("img")`
    display: block;
    margin-left: auto;
    margin-right: auto;
`;
