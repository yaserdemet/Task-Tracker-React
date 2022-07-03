
import { useState, useEffect } from 'react'
import Inputs from './Inputs'
import {FiDelete} from 'react-icons/fi'
import {BiHide} from 'react-icons/bi'
import {BiShowAlt} from 'react-icons/bi'
import "../App.css";


const Header = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [data1 , setData1] = useState([]);
    // const [style, setStyle] = useState(true)

    const handleDelete = (index) => {

      setData1(data1.filter(item => item.index !== index))
    









      // let x = e.target.closest("li").style
      //  if(style){
      //   x.textDecoration = "line-through"
      //   x.display = "none" 
      //   setStyle(false)
      //  }
      //  else {
      //   x.textDecoration = "none" 
      //   setStyle(true)
      //  }
    }
   

    useEffect(() => {
      console.log(data1);

    }, [ data1 ]);

  return (
    <div>
        <h1>Task Traker</h1>
        {/*  ?buton className changing */}
        <button className={`btn ${isOpen ? "btn-dark" : "btn-primary"}` } onClick={() => setIsOpen(!isOpen)} >
          {isOpen ?  <span>Show Task Bar <BiShowAlt /></span>  :  <span>Hide Task Bar <BiHide/></span>}    
        </button>
      {
        !isOpen && <Inputs  data1={data1} setData1={setData1}/> 
      }
      {
        isOpen && <p>No task yet</p>
      }
      <div>
        <ul>
          { data1.map((item,index) => {
            return <li key={index}> {item.index}  {item.task} {item.date}  
             <button    onClick={() => handleDelete( index )}  
             
             type="button" style={{border : "none"}}><FiDelete size={"1.3rem"} /></button> </li>
          })}
        </ul>
      </div>



    </div>
  )
}

export default Header