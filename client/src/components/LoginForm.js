import React from "react";
import { Button, Form, Header, Icon } from "semantic-ui-react";

const LoginForm = props => {
  return (
    <div>
      <Header>Login</Header>
      <Form onSubmit={props.handleSubmit}>
        <Form.Input
          name="username"
          placeholder="username"
          onChange={props.handleChange}
          type="text"
          value={props.values.username}
        ></Form.Input>
        <Form.Input
          name="password"
          onChange={props.handleChange}
          placeholder="password"
          type="password"
          value={props.values.password}
        ></Form.Input>
        <Button
          fluid
          loading={props.isSubmitting}
          style={{
            backgroundColor: "#F06543",
            color: "#FFFFFF"
          }}
          type="submit"
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
