import { ImageBoxContainer, ImageContainer } from "./Header.styles";
import Card from "./Card/Card";

const Header = () => {
  return (
    <ImageBoxContainer>
      <ImageContainer
        src="images/header/header_gradient1.svg"
        alt="banner Image"
        height={450}
      />
      <Card />
    </ImageBoxContainer>
  );
};

export default Header;
