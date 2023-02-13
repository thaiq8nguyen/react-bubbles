import React, { useState, useEffect } from 'react';

import Bubbles from './Bubbles';
import ColorList from './ColorList';
import { FetchBubbleList } from '../api';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    FetchBubbleList()
      .then(function ({ data }) {
        console.log(data);
        setColorList(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
