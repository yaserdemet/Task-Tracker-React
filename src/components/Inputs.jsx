import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect , useRef} from "react";
import { FaTasks } from "react-icons/fa";
import {BsCalendar2Date} from "react-icons/bs";
import { toastWarnNotify } from "../utils/ToastContainer";
import autoAnimate from '@formkit/auto-animate'
const Inputs = ({setData1 , data1}) => {
    const myRef = useRef();
    const parent = useRef(null)
   
  const [data, setData] = useState({ task: "", date: "" , id : Math.random() * 10000});

  const handleChange = (e) => {
    // console.log(e.target.value);
    
    setData({ ...data, [e.target.name]: e.target.value });
    //! input onChange olunca değerleri state te atmamız gerekir. Bunun için önce 
    //! ilk değeri tutmak için datayı açtık daha sonra içine yeni değerleri attık.
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if(data.task === "" || data.date === ""){

      toastWarnNotify("Please fill all fields");
      
      return false;
      
  }
    setData1([...data1 , data]);
    
    const { task, date , id} = data;
    setData({task : "" , date : "" , id : Math.random() * 10000});
    //! form submit olduğunda formu prevent default etmiştik. bu yüzden setDatanın içine tekrar
    //! boş değerleri gönderdik.
   
  };
  useEffect(() => {
    console.log(data1);
    myRef.current.focus();
    
   
  }, [])


  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])
  
  return (
    <form ref={parent}>
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
         ref={myRef}
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

        {/* <button
          className="btn btn-danger mx-5 "
          type="button"
          onClick={() =>handleDelete}
          > DELETE ALL</button> */}
     
    </form>
  );
};
export default Inputs;
