import styled from "styled-components/native";
import { BorderlessButton } from "react-native-gesture-handler";

export const Container = styled(BorderlessButton).attrs({
  borderless: false
})`
  margin-top: 20px;
  height: 50px;
  background-color: #4fc3f7;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  opacity: 10;
`;

export const Title = styled.Text`
  color: #ffffffff;
  font-weight: bold;
  font-size: 16px;
`;
