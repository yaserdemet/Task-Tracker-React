import { useState, useEffect } from "react";
import Inputs from "./Inputs";
import { FiDelete } from "react-icons/fi";
import { BiHide } from "react-icons/bi";
import { BiShowAlt } from "react-icons/bi";
import "../App.css";
import { ImCheckboxChecked } from "react-icons/im";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [data1, setData1] = useState([]);
  const [cevir, setCevir] = useState(false);

  const handleDelete = (id) => {
    setData1(data1.filter((item) => item.id !== id));
    console.log(id);
    console.log(data1);
  };

 
 


  const handleDeg = (e) => {
    console.log(e.target.id);
    if(cevir){
      e.target.closest("li").classList.add("slide");
      setCevir(false);
    }
    else{
      e.target.closest("li").classList.remove("slide");
      setCevir(true);
    }
  };
  // useEffect(() => {
  //   console.log(data1);

  // }, [ data1 ]);

  return (
    <div className="head">
      <h1>Task Traker</h1>
      {/*  ?buton className changing */}
      <button
        className={`btn ${isOpen ? "btn-success" : "btn-primary"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <span >
            Show Task Bar <BiShowAlt />
          </span>
        ) : (
          <span>
            Hide Task Bar <BiHide />
          </span>
        )}
      </button>
      {!isOpen && <Inputs data1={data1} setData1={setData1} />}

      {data1.length == 0 && <p>No task yet</p> }
      {data1.length == 1 && <p>You have 1 task</p> }
      {data1.length > 1 && <p>You have {data1.length} tasks</p>}
         
            {data1.map((item) => {
             
              return (<li key={item.id} >
             
                  <button  style={{ border: "none" }}
                  onClick={handleDeg} 
                  // when button clicked , it will add class "slide" to li
                  >
                  
                    <ImCheckboxChecked color={"green"} />
                  </button>
                  {item.task.toUpperCase()}. {item.date} 
                  <button
                    onClick={() => handleDelete(item.id)}
                    type="button"
                    style={{ border: "none" }}
                  >
                    <FiDelete />
                   
                  </button>
             
                </li>
               
              );
            })}
        
    </div>
  );
};
export default Header;
