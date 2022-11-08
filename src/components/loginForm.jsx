import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class LoginForm extends Form {
  username = React.createRef();

  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  state = {
    data: { password: "", username: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    console.log("submitted");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}

          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
