import React, { Component } from "react";
import { Container, Title, InputMaterial } from "./styles";
import Button from "~/components/Button";
import { withFormik } from "formik";

class Main extends Component {
  componentDidMount() {
    console.tron.log("bem vindo");
  }
  render() {
    const {
      values,
      errors,
      touched,
      dirty,
      isSubmitting,
      handleSubmit,
      isValid,
      ...rest
    } = this.props;
    return (
      <Container>
        <Title>Cadastro de Usuário</Title>
        <InputMaterial
          onChangeText={this.props.handleChange("name")}
          onBlur={this.props.handleBlur("name")}
          label="Nome"
          error={errors.name && touched.name ? errors.name : null}
        />
        <InputMaterial
          onChangeText={this.props.handleChange("lastName")}
          onBlur={this.props.handleBlur("lastName")}
          label="Sobrenome"
          error={errors.lastName && touched.lastName ? errors.lastName : null}
        />
        <InputMaterial
          onChangeText={this.props.handleChange("email")}
          onBlur={this.props.handleBlur("email")}
          label="Email"
          error={errors.email && touched.email ? errors.email : null}
        />
        <InputMaterial
          onChangeText={this.props.handleChange("password")}
          onBlur={this.props.handleBlur("password")}
          label="Senha"
          error={errors.password && touched.password ? errors.password : null}
        />
        <Button enabled={isValid} onPress={handleSubmit} title="Salvar" />
      </Container>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({ name: "", lastName: "", email: "", password: "" }),
  handleSubmit: values => {
    alert(JSON.stringify(values));
  },
  validate: (values, props) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Nome obrigatório";
    }
    if (!values.lastName) {
      errors.lastName = "Sobrenome obrigatório";
    }
    if (!values.email) {
      errors.email = "Email obrigatório";
    }
    if (!values.password) {
      errors.password = "Senha obrigatório";
    }
    return errors;
  }
})(Main);
