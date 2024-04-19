import { TitleProps } from "./title.types";
import { Title } from "./title.Styles";
import React from "react";

export const Titles: React.FC<TitleProps>=({text}) =>{
    return(
        <Title>{text}</Title>
    )
}