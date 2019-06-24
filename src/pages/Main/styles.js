import styled from "styled-components/native";
import { TextField } from "react-native-material-textfield";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: stretch;
  padding: 10px;
  background-color: #fefefe;
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  color: #4fc3f7;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;

export const InputMaterial = styled(TextField).attrs({
  labelFontSize: 16,
  returnKeyType: "next"
})``;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#222222",
  placeholderStyle: {
    fontWeight: "bold"
  }
})`
  height: 70px;
  margin: 10px;
  font-size: 22px;
  padding: 5px 15px;
`;
