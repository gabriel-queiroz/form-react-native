import React from "react";

import { Container, Content, Title } from "./styles";

const Button = ({ title, disabled, onPress }) => (
  <Container onPress={onPress}>
    <Title>{title}</Title>
  </Container>
);

export default Button;
