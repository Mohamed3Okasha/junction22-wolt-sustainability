import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <img src={`/img/svg/${src}`} alt={src} width={width} height={height}  style ={{ display: "block", marginLeft: "auto", marginRight: "auto"}}  />
);
