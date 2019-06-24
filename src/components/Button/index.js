import React from "react";

import { Container, Title } from "./styles";

const Button = ({ title, disabled, onPress }) => (
  <Container enabled={true} onPress={onPress}>
    <Title> {title}</Title>
  </Container>
);

export default Button;
