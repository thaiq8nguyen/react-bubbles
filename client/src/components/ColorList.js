import React, { useState } from "react";
import APIServices from "../utils/apiServices";
import { Button, Header, Form, Grid, List } from "semantic-ui-react";
import { Formik } from "formik";
const api = new APIServices();

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const deleteColor = color => {
    api
      .deleteColor(color.id)
      .then(response => {
        console.log(response.data);

        handleDeletedColor(response.data);
      })
      .catch(errors => {
        console.log(errors.response);
      });
  };
  const handleDeletedColor = deletedColorID => {
    const newColorList = colors.filter(color => {
      return color.id !== deletedColorID;
    });

    console.log(newColorList);

    updateColors(newColorList);
  };
  const handleEditedColorList = editedColor => {
    const newColorList = colors.map(color => {
      if (color.id === editedColor.id) {
        color = editedColor;
      }
      return color;
    });

    updateColors(newColorList);
  };

  return (
    <>
      <Grid columns={2} container padded="vertically">
        <Grid.Row>
          <Grid.Column>
            <Header>Color List</Header>
            <List>
              {colors.map(color => (
                <List.Item key={color.id}>
                  <Grid columns={3}>
                    <Grid.Row verticalAlign="middle">
                      <Grid.Column textAlign="left" width={4}>
                        <Header as="h4">{color.color}</Header>
                      </Grid.Column>
                      <Grid.Column textAlign="right" width={3}>
                        <Button onClick={() => editColor(color)} size="tiny">
                          Edit
                        </Button>
                      </Grid.Column>
                      <Grid.Column textAlign="right" width={3}>
                        <Button
                          onClick={() => deleteColor(color)}
                          color="red"
                          size="tiny"
                        >
                          Delete
                        </Button>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </List.Item>
              ))}
            </List>
          </Grid.Column>
          <Grid.Column>
            {editing && (
              <Formik
                enableReinitialize
                initialValues={{
                  id: colorToEdit.id,
                  color: colorToEdit.color,
                  code: colorToEdit.code.hex
                }}
                onSubmit={(values, actions) => {
                  actions.setSubmitting(true);
                  const editedColor = {
                    id: values.id,
                    color: values.color,
                    code: {
                      hex: values.code
                    }
                  };
                  api
                    .editColor(editedColor)
                    .then(response => {
                      handleEditedColorList(response.data);
                    })
                    .catch(errors => {
                      console.log(errors.response);
                    })
                    .then(() => {
                      actions.setSubmitting(false);
                    });
                }}
                render={props => (
                  <Form onSubmit={props.handleSubmit}>
                    <Header>Edit Color</Header>
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
                    <Button secondary onClick={() => setEditing(false)}>
                      Cancel
                    </Button>
                  </Form>
                )}
              />
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default ColorList;
