import { AvatarPhoto, CardPhoto } from "./Img.Style";
import { ImageProps } from "./img.Types";

export const PhotoImage: React.FC<ImageProps> = ({ PhotoURL }) => {
  return <CardPhoto src={PhotoURL} />;
};

export const AvatarImage: React.FC<ImageProps> = ({ PhotoURL }) => {
  return <AvatarPhoto src={PhotoURL} />;
};
