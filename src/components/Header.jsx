import { useState, useEffect , useRef} from "react";
import Inputs from "./Inputs";
import { FiDelete } from "react-icons/fi";
import { BiHide } from "react-icons/bi";
import { BiShowAlt } from "react-icons/bi";
import "../App.css";
import { ImCheckboxChecked } from "react-icons/im";
import { toastWarnNotify } from "../utils/ToastContainer";
import autoAnimate from '@formkit/auto-animate'
const Header = () => {
  const parent = useRef(null)
  const [isOpen, setIsOpen] = useState(true); //? componenti açıp kapatmak için kullanıldı.
  const [data1, setData1] = useState([]);     //* gelecek olan inputları tutmak için kullanıldı.
  const [cevir, setCevir] = useState(false);  //! classlar için kullanıldı.

  const handleDelete = (id) => {
    setData1(data1.filter((item) => item.id !== id));
    // ! silme işlemi ile id ye bakarak gelen id kalanlara eşit olmayanları filter ettim.
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

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  return (
    <div className="head" ref={parent}>
      <h1>Task Traker</h1>
      {/*  ?buton className changing */}
      <button
        className={`btn ${isOpen ? "btn-light" : "btn-primary"}`}
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

      {/* //! en önemli kısım burası. Burada yukarıda oluşturduğumuz kompenentteki verileri alıp burada sergilemek için yeni bir state oluşturduk. Ve oradan gelen verileri map edip DOM a bastım. */}

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
