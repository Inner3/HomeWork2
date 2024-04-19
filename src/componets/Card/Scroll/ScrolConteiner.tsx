import React from "react";
import { ScrollContainerProps } from "./ScrollConteiner.types";
import { Meg } from "./ScrollConteiner.Styles";

export const ScrollContainer: React.FC<ScrollContainerProps> = ({
  children,
}) => {
  return <Meg>{children}</Meg>;
};
