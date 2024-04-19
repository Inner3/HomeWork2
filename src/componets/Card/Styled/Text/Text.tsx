import { TEXT } from "./Text.Styles";
import { TextProps } from "./Text.Types";

export const Text: React.FC<TextProps> = ({ text }) => {
  return <TEXT>{text}</TEXT>;
};
