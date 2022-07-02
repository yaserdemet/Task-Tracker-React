import React from 'react'
import Inputs from './Inputs';
import { useState } from 'react';

const List = () => {
  const [data1, setData1] = useState([]);

  return (
    <div>
            

      <Inputs  data1={data1} setData1={setData1} />
      
      


    </div>
  )
}

export default List