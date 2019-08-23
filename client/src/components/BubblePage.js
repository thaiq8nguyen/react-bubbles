import React, { useState, useEffect } from "react";

import { Grid } from "semantic-ui-react";
import APIServices from "../utils/apiServices";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const api = new APIServices();

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    api
      .getColors()
      .then(response => {
        setColorList(response.data);
      })
      .catch(errors => {
        console.log(errors.response);
      });
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Grid textAlign="center">
        <Grid.Column>
          <Bubbles colors={colorList} />
        </Grid.Column>
      </Grid>
    </>
  );
};

export default BubblePage;
