import React from 'react';
import DropDown from "react-dropdown";
import "react-dropdown/style.css";

const Dropdown = (props) => {
    
    return (
        <div>
            <DropDown
        className="drop_down"
        options={props.options}
        
        placeholder="Select an option"
      />
        </div>
    )
}

export default Dropdown;
