import React from "react";
import styled from "styled-components";
import "../App.css";
import Dropdown from "../extra_comp/Dropdown";



const Target = () => {
    const options = ["one", "two", "three"];
    
    const options1 = ["x", "y", "z"];
 
  return (
    <>
    <div className="main_wrap">
     <h1>Target</h1>
     
      <div className='warp_content'>
  
      <h3>Prediction </h3>
      <Dropdown options={options} /><br/>
      
      </div>
      <div className="wrap_content_2">
      <h3>Target</h3>
      <Dropdown options={options1} />
      </div>
      </div>
     
     
      
      
    </>
  );
};

export default Target;
