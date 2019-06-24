import styled from "styled-components/native";
import { BorderlessButton } from "react-native-gesture-handler";

export const Container = styled(BorderlessButton).attrs({
  borderless: false
})`
  margin-top: 20px;
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  opacity: 10;
  background-color: ${props => (props.enabled ? "#4fc3f7" : "#3887aa")};
`;

export const Title = styled.Text`
  color: ${props => (props.enabled ? "#ffffffff" : "#c4c4c4")};
  font-weight: bold;
  font-size: 16px;
`;
