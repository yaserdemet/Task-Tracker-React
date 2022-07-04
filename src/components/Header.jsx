
import { useState, useEffect } from 'react'
import Inputs from './Inputs'
import {FiDelete} from 'react-icons/fi'
import {BiHide} from 'react-icons/bi'
import {BiShowAlt} from 'react-icons/bi'
import "../App.css";
import {ImCheckboxChecked} from 'react-icons/im'


const Header = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [data1 , setData1] = useState([]);
    const [cevir, setCevir] = useState(false);
    // const [style, setStyle] = useState(true)

    const handleDelete = (id) => {

      setData1(data1.filter(item => item.id !== id));
     console.log(id)
     console.log(data1);
    }
   
    
    // useEffect(() => {
    //   console.log(data1);

    // }, [ data1 ]);

  return (
    <div className='head'>
        <h1>Task Traker</h1>
        {/*  ?buton className changing */}
        <button className={`btn ${isOpen ? "btn-dark" : "btn-primary"}` } onClick={() => setIsOpen(!isOpen)} >
          {isOpen ?  <span>Show Task Bar <BiShowAlt /></span>  :  <span>Hide Task Bar <BiHide/></span>}    
        </button>
      {
        !isOpen && <Inputs  data1={data1} setData1={setData1}/> 
      }
     
      {data1.length == 0 && <p>No task yet</p>}
      <div>
        <div>
          
          
          <div>
          { 
          data1.map((item) => {
          
            return <div key={item.id} > 
              <li onClick={() => setCevir(!cevir)}  
            className={(cevir ? "slide" : "nonSlide")} 
       

                >
            
               <button style={{border : "none"}}> <ImCheckboxChecked  color = {"green"} /> </button>
              {item.task} {item.date} 
         

             <button    onClick={() => handleDelete( item.id )}  
             
             type="button" style={{border : "none"}}><FiDelete  /></button></li>
          
              </div>
             
              
          })
        }
           </div>
      
         
       
         </div>
      </div>



    </div>
  )
}

export default Header