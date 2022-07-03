import React from "react";

import { useState, useEffect } from "react";
import { FaTasks } from "react-icons/fa";

const Inputs = ({setData1 , data1}) => {
   
   
  const [data, setData] = useState({ task: "", date: "" });

  const handleChange = (e) => {
    // console.log(e.target.value);

    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(data.task === "" || data.date === ""){
      alert("Please fill all the fields");
      return false;
  }
    setData1([...data1 , data]);
    
    const { task, date } = data;
    setData({task : "" , date : ""});
    // setData({ task: "", date: "" });
    
       
    console.log("submit");
    
   
  };

  useEffect(() => {
    console.log(data1);
  }, [])
  
  return (
    <form >
      <div>
        <label style={{ display: "block" }} htmlFor="Task">
          TASK  <FaTasks /> </label>
        <input
        className="form-control"
          name="task"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          value={data.task}
          type="text"
          autoFocus
          placeholder="Add Task"
          onChange={handleChange}
        />
      </div>
      <div>
        <label style={{ display: "block" }} htmlFor="Date">
          DATE
        </label>
        <input
          className="form-control"
           aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        value={data.date}
          name="date"
          type="text"
          placeholder="Add Date"
          onChange={handleChange}
        />
      </div>
     
        <button
          className="btn btn-warning my-3 "
          type="button"
          onClick={handleSubmit}
        >
          Save Task
        </button>
     
    </form>
  );
};
export default Inputs;
