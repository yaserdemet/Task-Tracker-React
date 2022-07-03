import React from "react";

import { useState, useEffect } from "react";
import { FaTasks } from "react-icons/fa";
import {BsCalendar2Date} from "react-icons/bs";

const Inputs = ({setData1 , data1}) => {
  
   
  const [data, setData] = useState({ task: "", date: "" , id : Math.random() * 10000});

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
    
    const { task, date , id} = data;
    setData({task : "" , date : "" , id : Math.random() * 10000});
   
  };

  useEffect(() => {
    console.log(data1);
  }, [])
  
  return (
    <form >
      <div>
        <label style={{ display: "block" }} htmlFor="Task">
        <FaTasks />  TASK   </label>
        <input
        className="form-control "
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
         <BsCalendar2Date />   DATE
        </label>
        <input
        
          className="form-control "
          type="date"
        value={data.date}
          name="date"
         
          placeholder="Add Date "
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
