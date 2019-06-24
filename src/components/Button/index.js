import React from "react";

import { Container, Content, Title } from "./styles";

const Button = ({ title, disabled, onPress }) => (
  <Container onPress={onPress}>
    <Content disabled={!disabled}>
      <Title disabled={!disabled}>{title}</Title>
    </Content>
  </Container>
);

export default Button;
