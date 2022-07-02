
import { useState, useEffect } from 'react'
import Inputs from './Inputs'


const Header = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [data1 , setData1] = useState([]);

    useEffect(() => {
      console.log(data1);

    }, [ data1 ]);

  return (
    <div>
        <h1>Task Traker</h1>
        <button className='btn btn-primary my-3' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Show Task Bar' :  'Hide Task Bar'  }
        </button>
      {
        !isOpen && <Inputs  data1={data1} setData1={setData1}/> 
      }
      {
        isOpen && <p>No task yet</p>
      }
      <div>
        <ul>
          { data1.map((item, index) => {
            return <li key={index}> {item.task} {item.date}  </li>
          })}
        </ul>
      </div>



    </div>
  )
}

export default Header