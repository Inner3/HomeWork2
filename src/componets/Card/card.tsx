import { Cardprops } from "./card.Types";
import { CardContainer } from "./card.style";

export const Card: React.FC<Cardprops> = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};
