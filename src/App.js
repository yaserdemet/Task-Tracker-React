import './App.css';
import React from 'react'
import Header from './components/Header';
import { ToastContainer, toast } from "react-toastify";
import "./media.css";
// import ToastContainer from './utils/ToastContainer';
// import List from './components/List';


const App = () => {
  return (
    <div className='container'>
      <ToastContainer />
      <Header  />
      {/* <List /> */}
     


    </div>
  )
}

export default App