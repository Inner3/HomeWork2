import { DesProps } from "./des.types";
import { Des } from "./des.styled";
import React from "react";

export const Paragraph: React.FC<DesProps> = ({ text }) => {
  return <Des>{text}</Des>;
};
