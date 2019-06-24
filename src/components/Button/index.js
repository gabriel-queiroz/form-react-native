import React from "react";

import { Container, Title } from "./styles";

const Button = ({ title, disabled, onPress }) => (
  <Container enabled={disabled} onPress={onPress}>
    <Title disabled={!disabled}>{title}</Title>
  </Container>
);

export default Button;
