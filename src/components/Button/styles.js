import styled from "styled-components/native";

export const Container = styled.TouchableNativeFeedback``;

export const Content = styled.View`
  margin-top: 20px;
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  opacity: 10;
  background-color: ${props => (props.disabled ? "#4fc3f7" : "#3887aa")};
`;

export const Title = styled.Text`
  color: ${props => (props.disabled ? "#ffffffff" : "#c4c4c4")};
  font-weight: bold;
  font-size: 16px;
`;
