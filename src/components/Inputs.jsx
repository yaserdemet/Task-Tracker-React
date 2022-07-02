import React from "react";
import { useState } from "react";

const Inputs = ({data1, setData1}) => {
    console.log(data1);
   
  const [data, setData] = useState({ task: "", date: "" });

  const handleChange = (e) => {
    // console.log(e.target.value);

    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { task, date } = data;
    setData({task : "" , date : ""});
    // setData({ task: "", date: "" });
    if(data.task === "" || data.date === ""){
        alert("Please fill all the fields");
 
      return false;
    }
       
    console.log("submit");
    
   
  };

  return (
    <form >
      <div>
        <label style={{ display: "block" }} htmlFor="Task">
          TASK
        </label>
        <input
          name="task"
          value={data.task}
          type="text"
          placeholder="Add Task"
          onChange={handleChange}
        />
      </div>
      <div>
        <label style={{ display: "block" }} htmlFor="Date">
          DATE
        </label>
        <input
        value={data.date}
          name="date"
          type="date"
          placeholder="Add Date"
          onChange={handleChange}
        />
      </div>
      <div>
        <button
          className="btn btn-warning mt-3"
          
          onClick={handleSubmit}
        >
          Save Task
        </button>
      </div>
    </form>
  );
};
export default Inputs;
