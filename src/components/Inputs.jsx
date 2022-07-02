import React from "react";
import { useState } from "react";

const Inputs = () => {
    const [data, setData] = useState({ task: "", date: "" });

    
return (
    <form>
      <div>
        <label style={{ display: "block" }} htmlFor="">
          TASK
        </label>
        <input id="Task" type="text" value={data.task} placeholder="Add Task" />
      </div>
      <div>
        <label style={{ display: "block" }} htmlFor="">
          DATE
        </label>
        <input id="Date" type="date" value={data.date} placeholder="Add Date" />
      </div>
      <div>
        <button className="btn btn-warning mt-3">Save Task</button>
      </div>
    </form>
  );
}
export default Inputs;
