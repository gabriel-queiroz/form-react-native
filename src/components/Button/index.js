import React from "react";

import { Container, Title } from "./styles";

const Button = ({ title, enabled, onPress }) => (
  <Container enabled={enabled} onPress={onPress}>
    <Title enabled={enabled}>{title}</Title>
  </Container>
);

export default Button;
