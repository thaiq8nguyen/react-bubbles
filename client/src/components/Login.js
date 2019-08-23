import React from "react";
import { Card, Grid } from "semantic-ui-react";
import { Formik } from "formik";
import LoginForm from "./LoginForm";
import AuthService from "../utils/authServices";

const auth = new AuthService();

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  return (
    <>
      <Grid
        style={{ height: "100vh" }}
        textAlign="center"
        verticalAlign="middle"
      >
        <Grid.Column width={4}>
          <Card>
            <Card.Content>
              <Formik
                initialValues={{
                  username: "Lambda School",
                  password: "i<3Lambd4"
                }}
                onSubmit={(credentials, actions) => {
                  actions.setSubmitting(true);

                  auth.login(credentials).then(response => {
                    actions.setSubmitting(false);

                    auth.finishAuthentication(response.data.payload);

                    props.history.push("/bubble");
                  });
                }}
                render={formikProps => <LoginForm {...formikProps} />}
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Login;
