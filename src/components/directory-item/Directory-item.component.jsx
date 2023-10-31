import {
  Body,
  DirectoryItemContainer,
  ShopNow,
  Title,
  BackgroundImage,
} from "./Directory-item.styles.jsx";
import { useNavigate } from "react-router-dom";

const Directoryitem = ({ title, id, imageUrl, route }) => {
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer key={id} onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <Title>{title}</Title>
        <ShopNow>Shop now</ShopNow>
      </Body>
      ;
    </DirectoryItemContainer>
  );
};

export default Directoryitem;
