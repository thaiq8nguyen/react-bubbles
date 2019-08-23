import React from "react";
import { Button, Form, Grid, Header } from "semantic-ui-react";

const ColorForm = ({ props, getRandomColor, setEditing }) => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <Grid columns={2}>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Header>Edit Color</Header>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Button
              onClick={getRandomColor}
              size="small"
              style={{ backgroundColor: props.values.code }}
              type="button"
            >
              Random Color
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Form.Field>
        <label htmlFor="color">Color Name</label>
        <input
          name="color"
          onChange={props.handleChange}
          type="text"
          value={props.values.color}
        />
      </Form.Field>
      <Form.Field>
        <label htmlFor="code">Hex Code</label>
        <input
          name="code"
          onChange={props.handleChange}
          type="text"
          value={props.values.code}
        />
      </Form.Field>
      <Button loading={props.isSubmitting} primary type="submit">
        Save
      </Button>
      <Button secondary onClick={() => setEditing(false)} type="button">
        Cancel
      </Button>
    </Form>
  );
};

export default ColorForm;
