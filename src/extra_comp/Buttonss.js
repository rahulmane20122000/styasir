import React from 'react';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';

const btn={
    color :"#fff",
    textDecoration:"none",
    marginLeft:"2rem",
}

const Buttonss = (props) => {
    return (
        <>
            
            <Link exact to={props.to} style={btn}><Button style={btn}>{props.btn_title}</Button></Link>
            
        </>
    )
}

export default Buttonss
