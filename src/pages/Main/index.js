import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  Container,
  Title,
  InputMaterial
} from "./styles";
import * as Yup from "yup";
import Button from "~/components/Button";
import { withFormik } from "formik";

const MainForm = withFormik({
  mapPropsToValues: () => ({ name: "", lastName: "", email: "", password: "" }),
  handleSubmit: values => {
    alert(JSON.stringify(values));
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(5, "Mínimo de 5 caracteres")
      .max(10, "Máximo de 10 caracteres")
      .required("O nome é obrigatório"),
    lastName: Yup.string()
      .min(5, "Mínimo de 5 caracteres")
      .max(10, "Máximo de 10 caracteres")
      .required("O sobrenome é obrigatório"),
    email: Yup.string()
      .email("Email inválido")
      .required("O email é obrigatório"),
    password: Yup.string()
      .min(5, "A senha deve ter no mínimo 5 caracteres")
      .max(10, "A senha deve ter no máximo 10 caracteres")
      .required("A senha é obrigatório")
  })
});

const Main = props => {
  const {
    errors,
    touched,
    handleSubmit,
    isValid,
    handleChange,
    handleBlur
  } = props;
  return (
    <Container>
      <KeyboardAvoidingView>
        <Title>Cadastro de Usuário</Title>
        <InputMaterial
          autoFocus
          onChangeText={handleChange("name")}
          onBlur={handleBlur("name")}
          label="Nome"
          returnKeyType="next"
          onSubmitEditing={() => this.lastName.focus()}
          error={errors.name && touched.name ? errors.name : null}
        />
        <InputMaterial
          onChangeText={handleChange("lastName")}
          onBlur={handleBlur("lastName")}
          label="Sobrenome"
          returnKeyType="next"
          ref={ref => {
            this.lastName = ref;
          }}
          onSubmitEditing={() => this.email.focus()}
          error={errors.lastName && touched.lastName ? errors.lastName : null}
        />
        <InputMaterial
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          label="Email"
          keyboardType="email-address"
          returnKeyType="next"
          ref={ref => {
            this.email = ref;
          }}
          onSubmitEditing={() => this.password.focus()}
          error={errors.email && touched.email ? errors.email : null}
        />
        <InputMaterial
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          label="Senha"
          returnKeyType="send"
          secureTextEntry
          ref={ref => {
            this.password = ref;
          }}
          onSubmitEditing={handleSubmit}
          error={errors.password && touched.password ? errors.password : null}
        />
        <Button enabled={isValid} onPress={handleSubmit} title="Salvar" />
      </KeyboardAvoidingView>
    </Container>
  );
};

export default MainForm(Main);
