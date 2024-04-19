import "./App.css";
import { Card } from "./componets/Card/card";
import { Avatar } from "./componets/Card/Styled/Content/Avatar";
import { Text } from "./componets/Card/Styled/Text/Text";
import { AvatarImage, PhotoImage } from "./componets/Card/Styled/Images/img";
import { ScrollContainer as Meg } from "./componets/Card/Scroll/ScrolConteiner";
import { Titles } from "./componets/Card/Styled/Text/title";
import { Paragraph } from "./componets/Card/Styled/Text/des";
import * as images from "./assets";
import { mySkills } from "./Skills/MySkills";
import { havedSkills } from "./Skills/Skills";
import { CardPhoto } from "./componets/Card/Styled/Images/Img.Style";

function App() {
  return (
    <>
      <Titles text="Карточка"></Titles>
      <Avatar>
        <Titles text="Харинов Никита Владимирович" />
        <AvatarImage PhotoURL={images.cat} />
        <Paragraph text="Маленький котик >.<"></Paragraph>
        <Text text="Привет,вот мои навыки"></Text>
      </Avatar>
      <Titles text="Компетенции"></Titles>
      {mySkills.map((skill) => {
        return (
          <Card>
            <Text text={skill.name} />
            <CardPhoto src={skill.image} />
          </Card>
        );
      })}
      <Titles text="Хочется изучить"></Titles>
      <Meg>
        {havedSkills.map((hskill) => {
          return (
            <Card>
              <Text text={hskill.name} />
              <CardPhoto src={hskill.image} />
            </Card>
          );
        })}
      </Meg>
    </>
  );
}

export default App;
