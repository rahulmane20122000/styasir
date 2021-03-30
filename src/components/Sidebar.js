import react,{useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as faicons from "react-icons/fa";
import * as Aiicons from "react-icons/ai";
import Sidebardata from './Sidebardata';
import Submenu from './Submenu';
import {IconContext} from 'react-icons/lib';
import '../App.css';
import Buttonss from '../extra_comp/Buttonss';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { Button } from '@material-ui/core';


const Nav=styled.div`
background:	#ff7400;
height:50px;
display:flex;
justify-content:flex-start;
align-items:center;
box-shadow: 5px 5px 35px -5px rgba(0,0,0,0.3);
`;

const NavIcon=styled(Link)`
margin-left:2rem;
font-size:1.5rem;
height:80px;
display:flex;
justify-content:flex-start;
align-items:center;
color:black;
`;

const SideBarNav=styled.nav `
background:#ff7400;
box-shadow: 5px 5px 35px -5px rgba(0,0,0,0.3);
width:250px;
height:100vh;
display:flex;
justify-content:center;
position:fixed;
top:0;
left:${({isSidebar})=>(isSidebar? '0': '-100%')};
transition:350ms;
z-index:10;
`;

const SidebarWrap=styled.div `
width:100%;

`;



const Sidebar=()=>{

    const[isSidebar,setisSidebar]=useState(false);
   
   

    const showSidebar=()=>setisSidebar(!isSidebar);
    return(
        <>
        <IconContext.Provider value={{color:'#fff'}}>
        <Nav>
            <NavIcon>
                <faicons.FaBars onClick={showSidebar}/>
            </NavIcon>
            <div className="center_btns">
            <Buttonss to='basic/target' btn_title="Design" />
            <Buttonss to='#' btn_title="Result" />
            </div>

            <div className="end_btn"  >
            <Buttonss to='#' btn_title="Save" />
           <Button style={{color:"#fff",marginLeft:"3.5rem"}}> Train   <PlayCircleFilledIcon style={{color:"#fff",
            position:"relative",
            
            }}/></Button>
            </div>
            
        </Nav>

        <SideBarNav isSidebar={isSidebar}>
            <SidebarWrap>
                <NavIcon to='#'>
                    <Aiicons.AiOutlineClose onClick={showSidebar}/>
                </NavIcon>
                {Sidebardata.map((item,index)=>{
                       return <Submenu item={item} key={index}/>;
                })}
            </SidebarWrap>
        </SideBarNav>
        </IconContext.Provider>
        </>
    );
}

export default Sidebar;