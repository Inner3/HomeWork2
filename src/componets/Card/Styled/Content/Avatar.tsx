import { Ava } from "../../card.style";
import { AvatarProps } from "./AvatarTypes";

export const Avatar: React.FC<AvatarProps> = ({ children }) => {
  return <Ava>{children}</Ava>;
};
